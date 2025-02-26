// import uuid from 'react-native-uuid';
// import AsyncStorage from '@react-native-async-storage/async-storage';

interface RequestConfig extends Omit<RequestInit, 'body'> {
    body?: BodyInit_ | object;
    timeout?: number;
}

interface ResponseData<T = any> {
    code: number;
    message: string;
    data: T;
}

type RequestInterceptor = (config: RequestConfig) => Promise<RequestConfig>;
type ResponseInterceptor<T = any> = (response: ResponseData<T>) => Promise<ResponseData<T>>;

// 核心类实现 ----------------------------------------------------------------------
class HttpClient {
    private static instance: HttpClient;
    private refreshPromise: Promise<string> | null = null;
    private requestQueue: Array<() => void> = [];
    private requestInterceptors: RequestInterceptor[] = [];
    private responseInterceptors: ResponseInterceptor[] = [];

    constructor(private baseURL: string = '') { }

    static getInstance(baseURL?: string) {
        if (!this.instance) {
            this.instance = new HttpClient(baseURL);
        }
        return this.instance;
    }

    // 添加拦截器
    addRequestInterceptor(interceptor: RequestInterceptor) {
        this.requestInterceptors.push(interceptor);
    }

    addResponseInterceptor<T>(interceptor: ResponseInterceptor<T>) {
        this.responseInterceptors.push(interceptor);
    }

    // 核心请求方法
    async request<T = any>(endpoint: string, config: RequestConfig = {}): Promise<ResponseData<T>> {
        try {
            // 处理请求拦截器
            let processedConfig = await this.processRequestConfig(config);

            // 执行请求
            const response = await this.fetchWithTimeout(
                `${this.baseURL}${endpoint}`,
                processedConfig
            );

            // 处理响应数据
            const data: ResponseData<T> = await response.json();

            // Token 过期处理
            if (data.code === 401101) {
                return this.handleTokenRefresh(endpoint, processedConfig);
            }

            // 处理响应拦截器
            return this.processResponseData(data);
        } catch (error) {
            return this.handleError(endpoint, config, error);
        }
    }

    // 快捷方法
    get<T = any>(endpoint: string, config?: Omit<RequestConfig, 'body'>) {
        return this.request<T>(endpoint, { ...config, method: 'GET' });
    }

    post<T = any>(endpoint: string, body?: any, config?: Omit<RequestConfig, 'body'>) {
        return this.request<T>(endpoint, { ...config, method: 'POST', body });
    }

    upload<T = any>(endpoint: string, formData: FormData, config?: Omit<RequestConfig, 'body'>) {
        return this.request<T>(endpoint, {
            ...config,
            method: 'POST',
            body: formData,
        });
    }

    //  ------------------------------------- 私有方法 ---------------------------------
    private async processRequestConfig(config: RequestConfig) {
        let processedConfig: RequestConfig = {
            headers: new Headers(),
            ...config,
        };

        // 执行请求拦截器
        for (const interceptor of this.requestInterceptors) {
            processedConfig = await interceptor(processedConfig);
        }

        // 处理请求体
        processedConfig = this.normalizeRequestBody(processedConfig);

        // 添加唯一请求ID
        const headers = new Headers(processedConfig.headers);
        headers.set('X-Request-ID', '');
        processedConfig.headers = headers;

        return processedConfig;
    }

    // 处理请求体
    private normalizeRequestBody(config: RequestConfig): RequestConfig {
        if (!config.body) { return config; }

        const headers = new Headers(config.headers);

        // 处理 FormData
        if (config.body instanceof FormData) {
            return {
                ...config,
                body: config.body,
                headers,
            };
        }

        // 处理 React Native 文件 URI
        if (typeof config.body === 'object' && 'uri' in config.body) {
            return {
                ...config,
                body: config.body as BodyInit_,
            };
        }

        // 处理普通对象（转为 JSON）
        if (typeof config.body === 'object') {
            headers.set('Content-Type', 'application/json');
            return {
                ...config,
                headers,
                body: JSON.stringify(config.body),
            };
        }

        return config;
    }

    private async fetchWithTimeout(url: string, config: RequestConfig) {
        const controller = new AbortController();
        const timeout = config.timeout || 15000;

        const timeoutId = setTimeout(() => {
            controller.abort();
        }, timeout);

        try {
            const response = await fetch(url, {
                ...config,
                signal: controller.signal,
            } as RequestInit | undefined);
            clearTimeout(timeoutId);
            return response;
        } catch (error) {
            if (error instanceof DOMException && error.name.includes('AbortError')) {
                throw new Error(`请求超时（${timeout}ms）`);
            }
            throw error;
        }
    }

    private async handleTokenRefresh<T>(endpoint: string, config: RequestConfig) {
        if (!this.refreshPromise) {
            this.refreshPromise = this.refreshToken().finally(() => {
                this.refreshPromise = null;
            });
        }

        const newToken = await this.refreshPromise;
        const headers = new Headers(config.headers);
        headers.set('Authorization', `Bearer ${newToken}`);

        // 重试原始请求
        return this.request<T>(endpoint, {
            ...config,
            headers,
        });
    }

    private async refreshToken(): Promise<string> {
        const refreshToken = ''; // await AsyncStorage.getItem('refreshToken');
        const response = await fetch(`${this.baseURL}/auth/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refreshToken }),
        });

        const { data } = await response.json();
        // await AsyncStorage.multiSet([
        //     ['accessToken', data.accessToken],
        //     ['refreshToken', data.refreshToken],
        // ]);

        // 重试队列中的请求
        this.requestQueue.forEach(callback => callback());
        this.requestQueue = [];

        return data.accessToken;
    }

    private async processResponseData<T>(data: ResponseData<T>) {
        for (const interceptor of this.responseInterceptors) {
            await interceptor(data);
        }
        return data;
    }

    private handleError<T>(endpoint: string, config: RequestConfig = {}, error: Error | unknown): Promise<ResponseData<T>> {
        // 处理 abort error
        if (error instanceof DOMException && error.name.includes('AbortError')) {
            return Promise.reject({
                code: 400301,
                message: 'abort error',
                data: null as T,
            });
        }

        //  处理 error 实例
        if (error instanceof Error) {
            return Promise.reject({
                code: 400302,
                message: error.message,
                data: null as T,
            });
        }

        // 处理 Response 对象
        if (error instanceof Response) {
            return Promise.reject({
                code: 400303,
                message: `HTTP error ${error.statusText} (${error.status})`,
                data: null as T,
            });
        }

        if (this.refreshPromise) {
            return new Promise((resolve, reject) => {
                this.requestQueue.push(() => {
                    this.request(endpoint, config)
                        .then(resolve)
                        .catch(reject);
                });
            });
        }

        return Promise.reject(error);
    }

}

// 使用示例 ------------------------------------------------------------------------
// 初始化实例
const request = HttpClient.getInstance('https://api.yourservice.com');

// 添加请求拦截器（自动添加 Token）
request.addRequestInterceptor(async (config) => {
    const token = ''; // await AsyncStorage.getItem('accessToken');
    if (token) {
        const headers = new Headers(config.headers);
        headers.set('Authorization', `Bearer ${token}`);
        return { ...config, headers };
    }
    return config;
});

// 添加响应拦截器（错误处理）
request.addResponseInterceptor(async (response) => {
    if (response.code !== 0) {
        throw new Error(response.message);
    }
    return response;
});

// // 使用示例
// const fetchUserProfile = async () => {
//     try {
//         const { data } = await request.get<User>('/users/me');
//         return data;
//     } catch (error) {
//         console.error('获取用户信息失败:', error.message);
//         // 处理跳转登录等逻辑
//     }
// };

// const uploadProfilePhoto = async (uri: string) => {
//     const formData = new FormData();
//     formData.append('file', {
//         uri,
//         type: 'image/jpeg',
//         name: 'profile.jpg',
//     });

//     return request.upload<{ url: string }>('/upload', formData);
// };

// // 高级用法：并发请求处理
// const fetchDashboardData = async () => {
//     const [user, orders] = await Promise.all([
//         request.get('/users/me'),
//         request.get('/orders'),
//     ]);

//     return {
//         user: user.data,
//         orders: orders.data,
//     };
// };
