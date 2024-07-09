import { STORAGE_KEYS } from '@/interfaces/commonEnum';
import Storage from '@/storage';
import { makeAutoObservable } from 'mobx';

class RouterTypetore {
  isShowMainRouter = true;

  constructor() {
    makeAutoObservable(this);
    const isLoadedApp = Storage.getBoolean(STORAGE_KEYS.IS_LOADEDAPP) ?? false;
    this.isShowMainRouter = isLoadedApp;
  }
  setLoadedApp() {
    const isLoadedApp = Storage.getBoolean(STORAGE_KEYS.IS_LOADEDAPP) ?? false;
    if (isLoadedApp) return;
    Storage.set(STORAGE_KEYS.IS_LOADEDAPP, !isLoadedApp);
    this.isShowMainRouter = !isLoadedApp;
  }
}

export default new RouterTypetore();
