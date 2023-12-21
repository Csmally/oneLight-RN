import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

/**
 * 获取路由导航器
 */
function useScreenNavigation() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return navigation;
}

export { useScreenNavigation };
