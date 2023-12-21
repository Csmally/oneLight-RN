import { StyleSheet } from 'react-native';
import OlText from '@/components/OneLightText';
import RootView from '@/components/RootView';
import { useScreenNavigation } from '@/utils/hooks';

function PublishScreen() {
  const navigation = useScreenNavigation();
  const tt = () => {
    console.log('9898sssaaa');
    navigation.navigate('Test2');
  };
  return (
    <RootView style={styles.page}>
      <OlText>我是发布页</OlText>
      <OlText>我是发布页</OlText>
      <OlText>我是发布页</OlText>
      <OlText>我是发布页</OlText>
      <OlText>我是发布页</OlText>
      <OlText onPress={tt}>我是路由测试页----点击1122</OlText>
    </RootView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'pink',
  },
});

export default PublishScreen;
