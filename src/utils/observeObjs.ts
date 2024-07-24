import requests from './request';

const requestConfigObObj: any = {};

Object.defineProperty(requestConfigObObj, 'deviceId', {
  set(deviceId) {
    for (const key in requests) {
      if (Object.prototype.hasOwnProperty.call(requests, key)) {
        const element = requests[key as keyof typeof requests];
        element.defaults.headers.common['Ol-DeviceId'] = deviceId;
      }
    }
  },
});
export { requestConfigObObj };
