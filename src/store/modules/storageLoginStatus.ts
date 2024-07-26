// storageLoginStatus.ts
// storageStore
import Storage from '@/storage';
import { atom, AtomEffect } from 'recoil';
import storeKeys from '../storeKeys';
import { STORAGE_KEYS } from '@/interfaces/commonEnum';
import { StorageLoginStatusType } from '../interfaces';

export const defaultStorageLoginStatus: StorageLoginStatusType = {
    isLogin: false,
    uid: UnknownValue,
    authorization: UnknownValue,
    deviceId: UnknownValue,
};

const mmkvEffect: (key: string) => AtomEffect<StorageLoginStatusType> =
  key =>
  ({ setSelf, onSet }: { setSelf: any; onSet: any }) => {
    setSelf(() => {
      let data = Storage.getString(key);
      if (data) {
        return JSON.parse(data);
      } else {
        Storage.set(key, JSON.stringify(defaultStorageLoginStatus));
        return defaultStorageLoginStatus;
      }
    });

    onSet(
      (
        newValue: StorageLoginStatusType,
        oldValue: StorageLoginStatusType,
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

const storageLoginStatusStore = atom({
  key: storeKeys.STORAGE_LOGIN_STATUS,
  default: defaultStorageLoginStatus,
  effects: [mmkvEffect(STORAGE_KEYS.LOGIN_STATUS)],
});

export default storageLoginStatusStore;
