import { appConfigHttpsInstance } from '@/utils/https';

/**
 * 获取APP应用全局配置信息
 */
export const apiGetGlobalConfigs = (): Promise<ResponseType> => {
  return appConfigHttpsInstance.get('/globalAppConfig');
};

/**
 * 获取AB实验规则
 */
export const apiGetABTestRules = (): Promise<ResponseType> => {
  return appConfigHttpsInstance.get('/abTestRules');
};
