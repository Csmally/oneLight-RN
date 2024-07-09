import {MMKV} from 'react-native-mmkv';

class OlStorage extends MMKV {
  constructor() {
    super();
  }

  // 存储对象类型数据的方法
  setObject(key: string, value: object) {
    this.set(key, JSON.stringify(value));
  }
  getObject(key: string) {
    const res = this.getString(key);
    if (res) return JSON.parse(res);
    return undefined;
  }
}

const Storage = new OlStorage();

export default Storage;
