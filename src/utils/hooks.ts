import { useHeaderHeight } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

/**
 * 获取路由导航器
 */
function useScreenNavigation() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return navigation;
}

/**
 * 获取屏幕顶部header高度
 */
function useScreenHeaderHeight() {
  const headerHeight = useHeaderHeight();
  return headerHeight;
}

export { useScreenNavigation, useScreenHeaderHeight };
