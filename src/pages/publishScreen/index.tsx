import { Text } from 'react-native';
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
      <Text>我是发布页1</Text>
      <Text>我是发布页</Text>
      <Text>我是发布页</Text>
      <Text>我是发布页</Text>
      <Text>我是发布页</Text>
      <Text onPress={tt}>我是路由测试页----点击1122</Text>
    </RootView>
  );
}

export default PublishScreen;
