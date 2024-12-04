
import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:9999',
    withCredentials: true,
    timeout: 5000,
});

request.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        console.log(error); // for debug
        return Promise.reject(error);
    },
);

request.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code !== 200) {
            return Promise.reject(new Error(res.message || 'Error'));
        } else {
            return res;
        }
    },
    error => {
        console.log('接口信息报错' + error);
        return Promise.reject(error);
    },
);

export default request;

