import createRequest from './createRequest';

const businessRequest = createRequest({ baseURL: 'http://192.168.110.6:7002' });
const appConfigRequest = createRequest({
  baseURL: 'http://192.168.110.6:7001',
});
const trackRequest = createRequest({ baseURL: 'http://192.168.110.6:7003' });

export { businessRequest, appConfigRequest, trackRequest };

/**
 * 警告：
 * 每创建一个request实例，“必须” export default导出！！！
 * 不允许只export导出！！！
 */
export default { businessRequest, appConfigRequest, trackRequest };
