import API from './api';
import request from '../utils/request';

export function createDeviceInfo(data: any) {
    return request.post(API.deviceCreate, data)
}