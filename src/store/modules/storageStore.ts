// storageStore
import Storage from '@/storage';
import { atom, AtomEffect } from 'recoil';

interface StorageStateType {
  test: string;
}

const defaultData: StorageStateType = { test: '初始值' };

const mmkvEffect: (key: string) => AtomEffect<StorageStateType> =
  key =>
  ({ setSelf, onSet }: { setSelf: any; onSet: any }) => {
    setSelf((): { test: string } => {
      let data = Storage.getString(key);
      if (data) {
        return JSON.parse(data);
      } else {
        Storage.set(key, JSON.stringify({ test: '初始值' }));
        return defaultData;
      }
    });

    onSet(
      (
        newValue: StorageStateType,
        oldValue: StorageStateType,
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

const storageStore = atom({
  key: 'mmkvtest',
  default: defaultData,
  effects: [mmkvEffect('cyyx')],
});

export default storageStore;
