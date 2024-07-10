import Storage from '@/storage';
import { STORAGE_KEYS } from '@/interfaces/commonEnum';
import https from './https';

//设置全局工具方法、变量
export const setGlobalTools = () => {
  // 全局Toast工具
  Toast = {
    show: message => {
      console.log('提示框', message);
    },
  };
};

//初始化storage数据
export const initStorageData = () => {
  // 初始化登录状态
  const loginStatus = Storage.getBoolean(STORAGE_KEYS.LOGIN_STATUS);
  if (loginStatus) {
    const Authorization = Storage.getString(STORAGE_KEYS.TOKEN);
    const uid = Storage.getString(STORAGE_KEYS.UID);
    https.defaults.headers.common = { Authorization, uid };
    Storage.set(STORAGE_KEYS.LOGIN_STATUS, true);
  } else {
    Storage.set(STORAGE_KEYS.LOGIN_STATUS, false);
  }
  // 是否是第一次加载APP主路由
  const isLoadedApp = Storage.getBoolean(STORAGE_KEYS.IS_LOADEDAPP);
  if (!isLoadedApp) {
    Storage.set(STORAGE_KEYS.IS_LOADEDAPP, false);
  } else {
    Storage.set(STORAGE_KEYS.IS_LOADEDAPP, true);
  }
};
