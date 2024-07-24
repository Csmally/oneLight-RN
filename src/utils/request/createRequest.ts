import { ApiVersion, AppVersion, ClientTypes } from '@/common/consts';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Platform } from 'react-native';
import { getBrand } from 'react-native-device-info';

/**
 * 创建Axios实例工具方法
 */
interface RequestOptions extends AxiosRequestConfig {
  baseURL: string;
  timeout?: number;
  options?: object;
}
const ClientType: number =
  ClientTypes[Platform.OS as 'ios' | 'android' | 'web'];

const defaultHeaders = {
  'Content-Type': 'application/json', // 设置请求头
  'Ol-Agent-Type': 'oneLight-APP', // 设置应用来源类型
  'Ol-Client-Type': ClientType ?? UnknownValue, // 客户端系统OS
  'Ol-Client-Version': Platform.Version ?? UnknownValue, // 客户端系统版本号
  'Ol-Client-Brand': getBrand() || UnknownValue,
  'Ol-App-Version': `${AppVersion.major}.${AppVersion.minor}.${AppVersion.patch}`, // oneLight应用APP版本号
  'Ol-Api-Version': `${ApiVersion.major}.${ApiVersion.minor}.${ApiVersion.patch}`, // oneLight应用API版本号
};

const createRequest = ({
  baseURL,
  timeout = 10000,
  headers,
}: RequestOptions): AxiosInstance => {
  // 创建axios实例
  const request = axios.create({
    baseURL, // 设置基础URL，用于所有请求
    timeout, // 设置请求超时时间，单位是毫秒
    headers: { ...defaultHeaders, ...headers },
  });

  // 使用拦截器（interceptor）配置请求和响应
  request.interceptors.request.use(
    config => {
      // 做一些设置请求参数的操作
      return config;
    },
    error => {
      // 对请求错误做一些处理
      return Promise.reject(error);
    },
  );

  request.interceptors.response.use(
    response => {
      // 对响应数据做一些处理
      return response.data;
    },
    error => {
      const errorData = error.response.data ?? {};
      const { code, data, message, path, success, time } = errorData;
      // 对响应错误做一些处理
      Toast.show(message);
      return {
        success,
        code,
        data,
        message,
        path,
        time,
      };
    },
  );
  return request;
};

export default createRequest;
