/**
 * 设备信息
 */
import { atom } from 'recoil';
import { DeviceInfoType } from '../interfaces';
import storeKeys from '../storeKeys';

const defaultData: DeviceInfoType = {
  safeTop: 0,
  safeBottom: 0,
  safeLeft: 0,
  safeRight: 0,
  screenWidth: 0,
  screenHeight: 0,
  screenFontScale: 0,
  screenScale: 0,
  windowWidth: 0,
  windowHeight: 0,
  windowFontScale: 0,
  windowScale: 0,
};

const deviceInfoStore = atom({
  key: storeKeys.APP_DEVICEINFO,
  default: defaultData,
});

export default deviceInfoStore;
