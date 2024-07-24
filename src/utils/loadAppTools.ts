import Storage from '@/storage';
import { STORAGE_KEYS } from '@/interfaces/commonEnum';
import { businessRequest } from './request';
import { getUniqueId } from 'react-native-device-info';
import { requestConfigObObj } from './observeObjs';

// 初始化基础配置信息
export const initBaseConfigs = async () => {
  // 获取设备ID：deviceId
  let deviceId;
  try {
    deviceId = await getUniqueId();
  } catch (error) {
    deviceId = UnknownValue;
  }
  requestConfigObObj.deviceId = deviceId;
};

// 初始化全局工具方法
export const initGlobalTools = () => {
  // 全局Toast工具
  Toast = {
    show: message => {
      console.log('提示框', message);
    },
  };
};

// 初始化storage数据
export const initStorageData = async () => {
  // 获取设备ID：deviceId
  let deviceId;
  try {
    deviceId = await getUniqueId();
  } catch (error) {
    deviceId = UnknownValue;
  }
  Storage.set(STORAGE_KEYS.DEVICEID, deviceId);
  // 初始化登录状态
  const loginStatus = Storage.getBoolean(STORAGE_KEYS.LOGIN_STATUS);
  if (loginStatus) {
    const Authorization = Storage.getString(STORAGE_KEYS.TOKEN);
    const uid = Storage.getString(STORAGE_KEYS.UID);
    businessRequest.defaults.headers.common = { Authorization, uid };
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
