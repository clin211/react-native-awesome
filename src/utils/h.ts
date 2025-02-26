// http.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 基础响应结构
interface BaseResponse<T = any> {
    code: number;
    data: T;
    message?: string;
}

// 扩展请求配置
interface RequestOptions extends AxiosRequestConfig {
    needAuth?: boolean;        // 需要认证
    handleError?: boolean;     // 自动错误处理
    skipDuplicate?: boolean;   // 跳过重复请求检查
}

// 请求控制器类型
interface RequestController<T> {
    promise: Promise<T>;
    cancel: (reason?: string) => void;
}

// 刷新令牌队列项
type RefreshQueueItem = {
    resolve: (token: string) => void;
    reject: (error: any) => void;
};

class HttpService {
    private instance: AxiosInstance;
    private pendingRequests = new Map<string, AbortController>();
    private isRefreshing = false;
    private refreshQueue: RefreshQueueItem[] = [];

    constructor() {
        this.instance = axios.create({
            baseURL: 'https://api.example.com',
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
            async config => {
                const key = this.generateKey(config);

                // 重复请求检查 [19](@ref)
                if (!(config as RequestOptions).skipDuplicate && this.pendingRequests.has(key)) {
                    this.cancelRequest(key, '重复请求已取消');
                }

                // 添加认证令牌
                if ((config as RequestOptions).needAuth) {
                    const token = await this.getAccessToken();
                    if (token) { config.headers!.Authorization = `Bearer ${token}`; }
                }

                // 创建取消控制器
                const controller = new AbortController();
                config.signal = controller.signal;
                this.pendingRequests.set(key, controller);

                return config;
            },
            error => Promise.reject(error)
        );

        // 响应拦截器
        this.instance.interceptors.response.use(
            (response: AxiosResponse<BaseResponse>) => {
                const key = this.generateKey(response.config);
                this.pendingRequests.delete(key);

                if (response.data.code !== 0) {
                    return Promise.reject(response.data);
                }
                return response.data.data;
            },
            async (error: AxiosError) => {
                const originalConfig = error.config as RequestOptions;
                const key = this.generateKey(originalConfig);
                this.pendingRequests.delete(key);

                // 处理取消请求 [24](@ref)
                if (axios.isCancel(error)) {
                    return Promise.reject({ isCanceled: true, message: error.message });
                }

                // Token刷新逻辑 [12,14](@ref)
                if (error.response?.status === 401 && originalConfig?.needAuth) {
                    return this.handle401Error(error);
                }

                // 统一错误处理 [15](@ref)
                if (originalConfig?.handleError !== false) {
                    this.handleError(error);
                }

                return Promise.reject(error);
            }
        );
    }

    // 生成请求唯一标识
    private generateKey(config: AxiosRequestConfig): string {
        return [
            config.method,
            config.url,
            JSON.stringify(config.params),
            JSON.stringify(config.data),
        ].join('&');
    }

    // Token刷新处理
    private async handle401Error(error: AxiosError) {
        const originalConfig = error.config as RequestOptions;

        if (!this.isRefreshing) {
            this.isRefreshing = true;
            try {
                const newToken = await this.refreshToken();
                await this.setAccessToken(newToken);
                this.refreshQueue.forEach(({ resolve }) => resolve(newToken));
                return this.instance(originalConfig);
            } catch (e) {
                this.refreshQueue.forEach(({ reject }) => reject(e));
                await this.clearTokens();
                // 跳转登录逻辑
            } finally {
                this.isRefreshing = false;
                this.refreshQueue = [];
            }
        }

        return new Promise((resolve, reject) => {
            this.refreshQueue.push({
                resolve: async (token: string) => {
                    originalConfig.headers!.Authorization = `Bearer ${token}`;
                    resolve(this.instance(originalConfig));
                },
                reject,
            });
        });
    }

    // 错误处理
    private handleError(error: AxiosError) {
        let message = '请求失败';

        if (error.response) {
            switch (error.response.status) {
                case 400: message = '请求参数错误'; break;
                case 401: message = '身份验证失败'; break;
                case 403: message = '没有访问权限'; break;
                case 404: message = '资源不存在'; break;
                case 500: message = '服务器错误'; break;
            }
        } else if (error.code === 'ECONNABORTED') {
            message = '请求超时';
        } else if (error.message === 'Network Error') {
            message = '网络连接失败';
        }

        // 实际项目中替换为Toast显示
        console.error(`[HTTP Error] ${message}`, error);
    }

    // Token管理
    private async getAccessToken(): Promise<string | null> {
        return AsyncStorage.getItem('ACCESS_TOKEN');
    }

    private async setAccessToken(token: string): Promise<void> {
        await AsyncStorage.setItem('ACCESS_TOKEN', token);
    }

    private async getRefreshToken(): Promise<string | null> {
        return AsyncStorage.getItem('REFRESH_TOKEN');
    }

    private async clearTokens(): Promise<void> {
        await AsyncStorage.multiRemove(['ACCESS_TOKEN', 'REFRESH_TOKEN']);
    }

    private async refreshToken(): Promise<string> {
        const refreshToken = await this.getRefreshToken();
        const response = await axios.post('/auth/refresh', { refreshToken });
        return response.data.accessToken;
    }

    // 公共方法
    public request<T = any>(config: RequestOptions): RequestController<T> {
        const controller = new AbortController();

        const promise = new Promise<T>((resolve, reject) => {
            this.instance({
                ...config,
                signal: controller.signal,
            })
                .then(resolve)
                .catch(reject);
        });

        return {
            promise,
            cancel: (reason = '请求已取消') => controller.abort(reason),
        };
    }

    // 快捷方法
    public get<T = any>(url: string, config?: RequestOptions): RequestController<T> {
        return this.request({ method: 'GET', url, ...config });
    }

    public post<T = any>(url: string, data?: any, config?: RequestOptions): RequestController<T> {
        return this.request({ method: 'POST', url, data, ...config });
    }

    // 取消方法
    public cancelRequest(key: string) {
        const controller = this.pendingRequests.get(key);
        controller?.abort();
        this.pendingRequests.delete(key);
    }

    public cancelAllRequests() {
        this.pendingRequests.forEach(controller => controller.abort());
        this.pendingRequests.clear();
    }
}

// 单例实例
const http = new HttpService();

export default http;
