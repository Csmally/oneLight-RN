// storageStore
import Storage from '@/storage';
import { atom, AtomEffect } from 'recoil';
import storeKeys from '../storeKeys';
import { STORAGE_KEYS } from '@/interfaces/commonEnum';
import { StorageAppInfoType } from '../interfaces';

const defaultData: StorageAppInfoType = { appIsLoaded: false };

const mmkvEffect: (key: string) => AtomEffect<StorageAppInfoType> =
  key =>
  ({ setSelf, onSet }: { setSelf: any; onSet: any }) => {
    setSelf(() => {
      let data = Storage.getString(key);
      if (data) {
        return JSON.parse(data);
      } else {
        Storage.set(key, JSON.stringify(defaultData));
        return defaultData;
      }
    });

    onSet(
      (
        newValue: StorageAppInfoType,
        oldValue: StorageAppInfoType,
        isReset: boolean,
      ) => {
        if (isReset) {
          Storage.delete(key);
        } else {
          Storage.set(key, JSON.stringify(newValue));
        }
      },
    );
  };

const storageAppInfoStore = atom({
  key: storeKeys.STORAGE_APPINFO,
  default: defaultData,
  effects: [mmkvEffect(STORAGE_KEYS.APP_INFO)],
});

export default storageAppInfoStore;
