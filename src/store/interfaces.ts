type HomeQuickSearchBarItem = {
  title: string;
  img: string;
  keyWord: string;
  id: string;
};
interface AppGlobalConfigsType {
  launchScreenImgs: string[];
  homeQuickSearchBar: HomeQuickSearchBarItem[];
}

interface DeviceInfoType {
  safeTop: number;
  safeBottom: number;
  safeLeft: number;
  safeRight: number;
  screenWidth: number;
  screenHeight: number;
  screenFontScale: number;
  screenScale: number;
  windowWidth: number;
  windowHeight: number;
  windowFontScale: number;
  windowScale: number;
}

interface StorageAppInfoType {
  appIsLoaded: boolean;
}

interface StorageLoginStatusType {
  isLogin: boolean;
  uid: string;
  authorization: string;
  deviceId: string;
}

export type { AppGlobalConfigsType, DeviceInfoType, StorageAppInfoType, StorageLoginStatusType };
