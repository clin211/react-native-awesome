// http.ts
import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig,
} from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// 定义响应数据结构
interface ResponseData<T = any> {
    code: number;
    data: T;
    message: string;
}

// 扩展请求配置
interface RequestOptions extends AxiosRequestConfig {
    needAuth?: boolean; // 是否需要认证
    handleError?: boolean; // 是否统一处理错误
}

// 刷新令牌队列项
type RefreshQueueItem = {
    resolve: (token: string) => void;
    reject: (error: any) => void;
};

const BASE_URL = 'http://192.168.0.77:11080';

class HttpRequest {
    private instance: AxiosInstance;
    private isRefreshing = false; // 是否正在刷新令牌
    private refreshQueue: RefreshQueueItem[] = []; // 刷新令牌等待队列

    constructor() {
        this.instance = axios.create({
            baseURL: BASE_URL,
            timeout: 15000,
            headers: {
                'Content-Type': 'application/json',
                'X-Client': 'react-native',
            },
        });

        this.initInterceptors();
    }

    // 初始化拦截器
    private initInterceptors() {
        // 请求拦截器
        this.instance.interceptors.request.use(
            async (config: AxiosRequestConfig) => {
                // 添加认证令牌
                const token = await this.getAccessToken();
                if (token) {
                    (config as InternalAxiosRequestConfig<any>).headers!.Authorization = `Bearer ${token}`;
                }
                return config as InternalAxiosRequestConfig<any>;
            },
            (error: AxiosError) => {
                return Promise.reject(error);
            }
        );

        // 响应拦截器
        this.instance.interceptors.response.use(
            (response: AxiosResponse<ResponseData>) => {
                console.log('🚀 ~ HttpRequest ~ initInterceptors ~ response:', response.data);
                const { status } = response;
                // 处理响应数据
                if (status !== 200) {
                    return Promise.reject(response.data);
                }
                // return response.data.data;
                return response.data?.data;
            },
            async (error: AxiosError) => {
                const originalRequest = error.config as RequestOptions;

                // 处理令牌过期
                if (error.response?.status === 401 && originalRequest.needAuth) {
                    if (!this.isRefreshing) {
                        this.isRefreshing = true;
                        try {
                            const newToken = await this.refreshToken();
                            await this.setAccessToken(newToken);
                            this.refreshQueue.forEach(({ resolve }) => resolve(newToken));
                            this.refreshQueue = [];
                            return this.instance(originalRequest);
                        } catch (refreshError) {
                            this.refreshQueue.forEach(({ reject }) => reject(refreshError));
                            this.refreshQueue = [];
                            await this.clearTokens();
                            // 跳转到登录页
                            return Promise.reject(refreshError);
                        } finally {
                            this.isRefreshing = false;
                        }
                    }

                    // 将请求加入队列
                    return new Promise((resolve, reject) => {
                        this.refreshQueue.push({
                            resolve: (token: string) => {
                                originalRequest.headers!.Authorization = `Bearer ${token}`;
                                resolve(this.instance(originalRequest));
                            },
                            reject,
                        });
                    });
                }

                // 统一错误处理
                if (originalRequest.handleError !== false) {
                    this.handleError(error);
                }

                return Promise.reject(error);
            }
        );
    }

    // 错误处理
    private handleError(error: AxiosError) {
        let errorMessage = '请求错误';

        if (error.response) {
            const status = error.response.status;
            switch (status) {
                case 400:
                    errorMessage = '请求参数错误';
                    break;
                case 403:
                    errorMessage = '没有权限';
                    break;
                case 404:
                    errorMessage = '资源不存在';
                    break;
                case 500:
                    errorMessage = '服务器错误';
                    break;
            }
        } else if (error.code === 'ECONNABORTED') {
            errorMessage = '请求超时';
        } else if (error.message === 'Network Error') {
            errorMessage = '网络连接失败';
        }

        // 显示错误提示（需要根据实际项目替换）
        console.error(`${errorMessage}: ${error.config?.url}(${error.config?.method})----${error.message}`);
    }

    // 存储令牌
    private async setAccessToken(token: string): Promise<void> {
        console.log('🚀 ~ HttpRequest ~ setAccessToken ~ token:', token);
        // await AsyncStorage.setItem('ACCESS_TOKEN', token);
    }

    // 获取令牌
    private async getAccessToken(): Promise<string | null> {
        // return AsyncStorage.getItem('ACCESS_TOKEN');
        return Promise.resolve('');
    }

    // 清除令牌
    private async clearTokens(): Promise<void> {
        // await AsyncStorage.multiRemove(['ACCESS_TOKEN', 'REFRESH_TOKEN']);
    }

    // 刷新令牌
    private async refreshToken(): Promise<string> {
        const refreshToken = ''; // await AsyncStorage.getItem('REFRESH_TOKEN');
        // 实际项目中替换为你的刷新令牌接口
        const response = await axios.post('/auth/refresh', { refreshToken });
        return response.data.token;
    }

    // 通用请求方法
    public request<T = any>(options: RequestOptions): Promise<T> {
        return this.instance(options);
    }

    // GET 请求
    public get<T = any>(url: string, params?: any, options?: RequestOptions): Promise<T> {
        return this.request({ method: 'GET', url, params, ...options });
    }

    // POST 请求
    public post<T = any>(url: string, data?: any, options?: RequestOptions): Promise<T> {
        return this.request({ method: 'POST', url, data, ...options });
    }

    // 其他方法...
}

const http = new HttpRequest();

export default http;
