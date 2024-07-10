import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import BusinessInfoBar from './components/BusinessInfoBar';
import OrdersBar from './components/OrdersBar';
import ToolsBar from './components/ToolsBar';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import AnimatedHeader from './components/AnimatedHeader';
import { MineScreenContext } from './utils/context';
import UserInfoBar from './components/UserInfoBar';
import { logout } from '@/utils/login';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import RootView from '@/components/RootView';
import FeedBackBar from './components/FeedBackBar';

function MineScreen() {
  const goPage = () => {
    console.log('9898下一页');
  };
  // 动画共享滑动距离
  const sharedScrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    sharedScrollY.value = event.contentOffset.y;
  });
  // 用户信息栏高度
  const userInfoBarHeight = useSharedValue(0);
  const providerValue = {
    sharedScrollY, // 动画共享滑动距离
    userInfoBarHeight, // 用户信息栏高度
  };
  // 底部导航栏高度
  const BottomTabBarHeight = useBottomTabBarHeight();
  return (
    <MineScreenContext.Provider value={providerValue}>
      <RootView>
        <Animated.ScrollView
          contentInsetAdjustmentBehavior="never"
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{
            paddingBottom: BottomTabBarHeight,
          }}
          stickyHeaderIndices={[0]}
          onScroll={scrollHandler}>
          <AnimatedHeader />
          <UserInfoBar />
          <BusinessInfoBar />
          <OrdersBar />
          <ToolsBar />
          <FeedBackBar />
          <Text onPress={logout}>退出登录</Text>
          <Text onPress={goPage}>跳转跳转跳转跳转跳转</Text>
          <View style={styles.aa} />
          <View style={styles.bb} />
          <View style={styles.aa} />
          <View style={styles.bb} />
          <View style={styles.aa} />
          <View style={styles.bb} />
        </Animated.ScrollView>
      </RootView>
    </MineScreenContext.Provider>
  );
}

const styles = StyleSheet.create({
  topbg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 250,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 500,
    borderBottomLeftRadius: 460,
    borderBottomRightRadius: 600,
  },
  aa: {
    height: 100,
    backgroundColor: 'red',
  },
  bb: {
    height: 100,
    backgroundColor: 'black',
  },
});

export default MineScreen;
