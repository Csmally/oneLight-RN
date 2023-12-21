import OlText from '@/components/OneLightText';
import RootView from '@/components/RootView';

function TestScreen() {
  const tt = () => {
    console.log('9898sssaaa');
  };
  return (
    <RootView>
      <OlText>我是路由测试页</OlText>
      <OlText>我是路由测试页</OlText>
      <OlText>我是路由测试页</OlText>
      <OlText>我是路由测试页</OlText>
      <OlText>我是路由测试页</OlText>
      <OlText onPress={tt}>我是路由测试页----点击</OlText>
    </RootView>
  );
}

export default TestScreen;
