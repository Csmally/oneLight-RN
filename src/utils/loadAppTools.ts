import Storage from '@/storage';
import { STORAGE_KEYS } from '@/interfaces/commonEnum';
import { getUniqueId } from 'react-native-device-info';
import { requestConfigObObj } from './observeObjs';
import { StorageLoginStatusType } from '@/store/interfaces';
import { defaultStorageLoginStatus } from '@/store/modules/storageLoginStatus';

// 初始化基础配置信息
export const initBaseConfigs = async () => {
  const loginStatus: StorageLoginStatusType = Storage.getObject(STORAGE_KEYS.LOGIN_STATUS) || defaultStorageLoginStatus;
  const { isLogin, uid, authorization, deviceId } = loginStatus;
  requestConfigObObj.uid = uid;
  requestConfigObObj.authorization = authorization;
  let reDeviceId;
  if (isLogin) {
    reDeviceId = deviceId;
  } else {
    // 获取并设置设备ID：deviceId
    try {
      reDeviceId = await getUniqueId();
    } catch (error) {
      reDeviceId = UnknownValue;
    }
  }
  requestConfigObObj.deviceId = reDeviceId;
  const resLoginStatus: StorageLoginStatusType = { ...defaultStorageLoginStatus, ...loginStatus, deviceId: reDeviceId };
  Storage.set(STORAGE_KEYS.LOGIN_STATUS, JSON.stringify(resLoginStatus));
  return { loginStatus: resLoginStatus };
};

// 初始化全局工具方法
export const initGlobalTools = () => {
  // 全局Toast工具
  global.Toast = {
    show: message => {
      console.log('提示框', message);
    },
  };
  global.UnknownValue = 'unknown';
};

// 初始化storage数据
export const initStorageData = () => {
  // 是否是第一次加载APP主路由
  const isLoadedApp = Storage.getBoolean(STORAGE_KEYS.IS_LOADEDAPP);
  Storage.set(STORAGE_KEYS.IS_LOADEDAPP, !!isLoadedApp);
};
