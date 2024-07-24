import createRequest from './createRequest';

const businessRequest = createRequest({ baseURL: 'http://192.168.110.6:7002' });
const appConfigRequest = createRequest({
  baseURL: 'http://192.168.110.6:7001',
});
const trackRequest = createRequest({ baseURL: 'http://192.168.110.6:7003' });

export { businessRequest, appConfigRequest, trackRequest };
