import requests from './request';

const requestConfigObObj: any = {};

Object.defineProperties(requestConfigObObj, {
  // 设置request的header携带Ol-DeviceId
  deviceId: {
    set(deviceId) {
      for (const key in requests) {
        if (Object.prototype.hasOwnProperty.call(requests, key)) {
          const element = requests[key as keyof typeof requests];
          element.defaults.headers.common['Ol-DeviceId'] = deviceId;
        }
      }
    },
  },
  // 设置request的header携带Authorization
  authorization: {
    set(token) {
      for (const key in requests) {
        if (Object.prototype.hasOwnProperty.call(requests, key)) {
          const element = requests[key as keyof typeof requests];
          element.defaults.headers.common.Authorization = token;
        }
      }
    },
  },
  // 设置request的header携带Ol-Uid
  uid: {
    set(uid) {
      for (const key in requests) {
        if (Object.prototype.hasOwnProperty.call(requests, key)) {
          const element = requests[key as keyof typeof requests];
          element.defaults.headers.common['Ol-Uid'] = uid;
        }
      }
    },
  },
});

export { requestConfigObObj };
