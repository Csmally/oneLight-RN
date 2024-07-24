import { apiGetGlobalConfigs } from '@/services/globalConfigService';
import { appGlobalConfigsStore } from '@/store';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

/**
 * 设置全局配置信息
 */
const useSetAppGlobalConfigs = () => {
  const [loading, setLoading] = useState(true);
  const setAppGlobalConfigs = useSetRecoilState(appGlobalConfigsStore);
  useEffect(() => {
    const fetchAppGlobalConfigs = async () => {
      const { data, success } = await apiGetGlobalConfigs();
      if (success) {
        setAppGlobalConfigs(data);
        setLoading(false);
      }
    };
    fetchAppGlobalConfigs();
  }, [setAppGlobalConfigs]);
  return { loading };
};

export { useSetAppGlobalConfigs };
