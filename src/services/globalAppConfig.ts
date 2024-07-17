import { appConfigHttpsInstance } from '@/utils/https';

/**
 * 获取APP应用全局配置信息
 */
export const apiGetGlobalConfigs = (mobile: string): Promise<ResponseType> => {
    return appConfigHttpsInstance.get('/globalAppConfig', { params: { mobile } });
};

/**
 * 获取AB实验规则
 */
export const apiGetABTestRules = (mobile: string): Promise<ResponseType> => {
    return appConfigHttpsInstance.get('/abTestRules');
};
