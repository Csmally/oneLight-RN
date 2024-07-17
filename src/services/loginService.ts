import { businessHttpsInstance } from '@/utils/https';

/**
 * 获取验证码
 */
export const apiGetMsgCode = (mobile: string): Promise<ResponseType> => {
  return businessHttpsInstance.get('/login/msgCode', { params: { mobile } });
};

/**
 * 登录or注册
 */
export const apiLogin = (
  mobile: string,
  msgCode: string,
): Promise<ResponseType> => {
  return businessHttpsInstance.post('login/signIn', { mobile, msgCode });
};
