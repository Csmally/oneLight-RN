/**
 * APP全局配置信息
 */
import { atom } from 'recoil';
import { UserInfoType } from '../interfaces';
import storeKeys from '../storeKeys';

const defaultData: UserInfoType = {
  
};

const userInfoStore = atom({
  key: storeKeys.USER_INFO,
  default: defaultData,
});

export default userInfoStore;
