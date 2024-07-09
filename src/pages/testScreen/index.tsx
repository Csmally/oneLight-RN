import { Text } from 'react-native';
import RootView from '@/components/RootView';

function TestScreen() {
  const tt = () => {
    console.log('9898sssaaa');
  };
  return (
    <RootView>
      <Text>我是路由测试页</Text>
      <Text>我是路由测试页</Text>
      <Text>我是路由测试页</Text>
      <Text>我是路由测试页</Text>
      <Text>我是路由测试页</Text>
      <Text onPress={tt}>我是路由测试页----点击</Text>
    </RootView>
  );
}

export default TestScreen;
