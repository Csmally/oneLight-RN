import { useEffect } from 'react';
import OlText from '@/components/OneLightText';
import RootView from '@/components/RootView';

function ErrorScreen() {
  useEffect(() => {
    console.log('9898有用--错误组件刷新了');
  }, []);
  return (
    <RootView>
      <OlText>出错啦！</OlText>
    </RootView>
  );
}

export default ErrorScreen;
