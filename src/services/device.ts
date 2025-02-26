import API from './api';
import http from '../utils/http';

// 创建设备
export async function createDeviceInfo(data: any) {
    return await http.post(API.devices, data);
}

// 获取设备
export async function fetchDeviceInfo(params: { page: number, order: string, pageSize: number }) {
    return await http.get(API.devices, params);
}
