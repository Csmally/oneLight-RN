import { STORAGE_KEYS } from '@/interfaces/commonEnum';
import { apiLogin } from '@/services/loginService';
import Storage from '@/storage';
import { businessRequest } from './request';

/**
 * 登录方法
 */
const login = async (mobile: string, msgCode: string) => {
  const res = await apiLogin(mobile, msgCode);
  if (!res.success) return false;
  const { Authorization, uid, isCodeRight, message } = res.data;
  if (!isCodeRight) {
    Toast.show(message);
    return false;
  }
  Storage.set(STORAGE_KEYS.TOKEN, Authorization);
  Storage.set(STORAGE_KEYS.UID, uid);
  Storage.set(STORAGE_KEYS.LOGIN_STATUS, true);
  businessRequest.defaults.headers.common = { Authorization, uid };
  const isLoadedApp = Storage.getBoolean(STORAGE_KEYS.IS_LOADEDAPP) ?? false;
  if (!isLoadedApp) {
    Storage.set(STORAGE_KEYS.IS_LOADEDAPP, !isLoadedApp);
  }
  return true;
};

/**
 * 退出登录方法
 */
const logout = () => {
  console.log('9898退出登录');
  Storage.set(STORAGE_KEYS.LOGIN_STATUS, false);
  Storage.set(STORAGE_KEYS.IS_LOADEDAPP, false);
  businessRequest.defaults.headers.common = {};
};

export { login, logout };
