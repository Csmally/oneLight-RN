import { businessRequest } from '@/utils/request';

/**
 * 获取验证码
 */
export const apiGetMsgCode = (mobile: string): Promise<ResponseType> => {
  return businessRequest.get('/login/msgCode', { params: { mobile } });
};

/**
 * 登录or注册
 */
export const apiLogin = (
  mobile: string,
  msgCode: string,
): Promise<ResponseType> => {
  return businessRequest.post('login/signIn', { mobile, msgCode });
};
