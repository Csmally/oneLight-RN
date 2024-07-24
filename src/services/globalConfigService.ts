import { appConfigRequest } from '@/utils/request';

/**
 * 获取APP应用全局配置信息
 */
export const apiGetGlobalConfigs = (): Promise<ResponseType> => {
  return appConfigRequest.get('/globalAppConfig');
};

/**
 * 获取AB实验规则
 */
export const apiGetABTestRules = (): Promise<ResponseType> => {
  return appConfigRequest.get('/abTestRules');
};
