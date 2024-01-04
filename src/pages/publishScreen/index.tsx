import OlText from '@/components/OneLightText';
import RootView from '@/components/RootView';
import { useScreenHeaderHeight, useScreenNavigation } from '@/utils/hooks';

function PublishScreen() {
  const navigation = useScreenNavigation();
  const headerHeight = useScreenHeaderHeight();
  const tt = () => {
    console.log('9898sssaaa');
    navigation.navigate('Test');
  };
  return (
    <RootView style={{ paddingTop: headerHeight }}>
      <OlText>我是发布页1</OlText>
      <OlText>我是发布页</OlText>
      <OlText>我是发布页</OlText>
      <OlText>我是发布页</OlText>
      <OlText>我是发布页</OlText>
      <OlText onPress={tt}>我是路由测试页----点击1122</OlText>
    </RootView>
  );
}

export default PublishScreen;
