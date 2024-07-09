import https from '@/utils/https';

/**
 * 获取验证码
 */
export const apiGetMsgCode = (mobile: string): Promise<ResponseType> => {
  return https.get('/login/msgCode', { params: { mobile } });
};

/**
 * 登录or注册
 */
export const apiLogin = (mobile: string, msgCode: string): Promise<ResponseType> => {
  return https.post('login/signIn', { mobile, msgCode });
};
