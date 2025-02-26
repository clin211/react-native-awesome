import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const BASE_URL = 'http://192.168.0.77:11080';

// 接口管理
const API_URL = {
    devices: '/v1/devices/',
};

// 代理
export const API: typeof API_URL = new Proxy(API_URL, {
    get(target: typeof API_URL, prop: keyof typeof API_URL): string {
        return `${BASE_URL}${target[prop]}`;
    },
});



// 存储当前刷新状态和请求队列
let isRefreshing = false;
let requests: Array<(token: string) => void> = [];

interface ResponseData<T = any> {
    code: number;
    message: string;
    data: T;
}

interface RequestOptions extends RequestInit {
    body?: BodyInit_;// | Record<string, any>;
}

const handleRefreshToken = async (): Promise<string> => {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const requestId = uuid.v4() as string;

    try {
        const response = await fetch('YOUR_REFRESH_TOKEN_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                requestId,
            },
            body: JSON.stringify({ refreshToken }),
        });

        const data: ResponseData<{ accessToken: string; refreshToken: string }> =
            await response.json();

        if (data.code === 0) {
            await AsyncStorage.multiSet([
                ['accessToken', data.data.accessToken],
                ['refreshToken', data.data.refreshToken],
            ]);
            return data.data.accessToken;
        }

        throw new Error(data.message || '刷新 Token 失败');
    } catch (error) {
        await AsyncStorage.multiRemove(['accessToken', 'refreshToken']);
        throw error;
    }
};

const authFetch = async <T = any>(
    url: string,
    options: RequestOptions = {}
): Promise<ResponseData<T>> => {
    // 请求拦截处理
    const requestId = uuid.v4() as string;
    const accessToken = await AsyncStorage.getItem('accessToken');

    // 处理请求头
    const headers = new Headers(options.headers);
    headers.set('requestId', requestId);

    // 自动处理不同数据类型
    let processedBody: BodyInit_ = null;
    if (options.body) {
        if (options.body instanceof FormData) {
            // FormData 类型（通常用于文件上传）
            processedBody = options.body;
            // React Native 会自动设置 Content-Type 和 boundary
        } else if (typeof options.body === 'object') {
            // JSON 数据类型
            headers.set('Content-Type', 'application/json');
            processedBody = JSON.stringify(options.body);
        } else {
            // 其他数据类型（如字符串）
            processedBody = options.body as BodyInit_;
        }
    }

    // 添加 Authorization
    if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
    }

    try {
        const response = await fetch(url, {
            ...options,
            headers,
            body: processedBody,
        });

        // 处理响应数据
        const data: ResponseData<T> = await response.json();

        // Token 过期处理
        if (data.code === 401101) {
            if (!isRefreshing) {
                isRefreshing = true;
                try {
                    const newToken = await handleRefreshToken();
                    // 执行队列中的请求
                    requests.forEach((callback) => callback(newToken));
                    requests = [];
                    // 重试当前请求
                    return authFetch(url, options);
                } catch (error) {
                    // 跳转登录页面或其他处理
                    throw error;
                } finally {
                    isRefreshing = false;
                }
            }

            // 正在刷新 Token，将请求加入队列
            return new Promise((resolve, reject) => {
                requests.push((freshToken: string) => {
                    headers.set('Authorization', `Bearer ${freshToken}`);
                    authFetch(url, { ...options, headers })
                        .then(resolve)
                        .catch(reject);
                });
            });
        }

        // 其他错误处理（可根据业务需求扩展）
        if (data.code !== 0) {
            throw new Error(data.message || '请求失败');
        }

        return data;
    } catch (error) {
        // 网络错误处理
        if (error instanceof TypeError) {
            throw new Error('网络连接异常，请检查网络设置');
        }
        throw error;
    }
};

export default authFetch;
// export default API;

// const data = {
//     code: 401101,
//     message: 'Unauthorized',
//     data: null,
// };

// const headers = {
//     requestId: 'b5e4c4d3-0a0d-11ec-9d3a-0242ac120002',
// };
