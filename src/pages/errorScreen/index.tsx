import { Text } from 'react-native';
import { useEffect } from 'react';
import RootView from '@/components/RootView';

function ErrorScreen() {
  useEffect(() => {
    console.log('9898有用--错误组件刷新了');
  }, []);
  return (
    <RootView>
      <Text>出错啦！</Text>
    </RootView>
  );
}

export default ErrorScreen;
