const BASE_URL = 'http://192.168.0.77:11080';

export const API = {
    devices: '/v1/devices',
};

export const APIS: typeof API = new Proxy(API, {
    get(target: typeof API, prop: keyof typeof API): string {
        return `${BASE_URL}${target[prop]}`;
    },
});

export default API;
