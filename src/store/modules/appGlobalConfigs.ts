import { atom } from 'recoil';
import { AppGlobalConfigsType } from '../interfaces';
import storeKeys from '../storeKeys';

const defaultData: AppGlobalConfigsType = {
  launchScreenImgs: [],
  homeQuickSearchBar: [],
};

const appGlobalConfigsStore = atom({
  key: storeKeys.APP_GLOBALCONFIGS,
  default: defaultData,
});

export default appGlobalConfigsStore;
