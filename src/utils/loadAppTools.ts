import Storage from '@/storage';
import { STORAGE_KEYS } from '@/interfaces/commonEnum';
import { getUniqueId } from 'react-native-device-info';
import { requestConfigObObj } from './observeObjs';

// 初始化基础配置信息
export const initBaseConfigs = async () => {
  // 设置获取设备ID：deviceId
  let deviceId;
  try {
    deviceId = await getUniqueId();
  } catch (error) {
    deviceId = UnknownValue;
  }
  requestConfigObObj.deviceId = deviceId;
  // 设置Authorization & Uid
  const loginStatus = Storage.getBoolean(STORAGE_KEYS.LOGIN_STATUS);
  const Authorization = Storage.getString(STORAGE_KEYS.TOKEN) || UnknownValue;
  const uid = Storage.getString(STORAGE_KEYS.UID) || UnknownValue;
  requestConfigObObj.authorization = Authorization;
  requestConfigObObj.uid = uid;
  Storage.set(STORAGE_KEYS.LOGIN_STATUS, !!loginStatus);
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
