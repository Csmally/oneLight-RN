import { StyleSheet } from 'react-native';
import OlText from '@/components/OneLightText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootView from '@/components/RootView';

function TestScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const tt = () => {
    console.log('9898sssaaa');
    navigation.navigate('Test2');
  };
  return (
    <RootView style={styles.page}>
      <OlText>我是路由测试页</OlText>
      <OlText>我是路由测试页</OlText>
      <OlText>我是路由测试页</OlText>
      <OlText onPress={tt}>我是路由测试页----点击1122</OlText>
      <OlText>我是路由测试页</OlText>
      <OlText>我是路由测试页</OlText>
    </RootView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'pink',
  },
});

export default TestScreen;
