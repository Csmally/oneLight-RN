import { commonStyles } from '@/common/styles';
import { useContext } from 'react';
import {
  Text,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { MineScreenContext } from '../utils/context';
import Animated, {
  useAnimatedReaction,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function TopBar() {
  const { top: statusBarHeight } = useSafeAreaInsets();
  const { sharedScrollY, userInfoBarHeight } = useContext(MineScreenContext);
  const sharedWidth = useSharedValue(20);
  const sharedScale = useSharedValue(0);
  const iconWidth = 20;
  const endSpaceBoxWidth =
    Dimensions.get('window').width -
    2 * (commonStyles.pageBorderGap + iconWidth);
  // 头部布局更改动画
  useAnimatedReaction(
    () => {
      return sharedScrollY.value;
    },
    (cur, pre) => {
      if (pre < userInfoBarHeight.value && cur >= userInfoBarHeight.value) {
        sharedWidth.value = withTiming(endSpaceBoxWidth, {
          duration: 300,
        });
        sharedScale.value = withTiming(1, {
          duration: 300,
        });
      }
      if (pre >= userInfoBarHeight.value && cur < userInfoBarHeight.value) {
        sharedWidth.value = withTiming(20, {
          duration: 300,
        });
        sharedScale.value = withTiming(0, {
          duration: 0,
        });
      }
    },
  );
  const aa = () => {
    console.log('9898我是设置按钮');
  };
  const bb = () => {
    console.log('9898我是信息按钮');
  };
  return (
    <Animated.View style={[styles.container, { paddingTop: statusBarHeight }]}>
      <TouchableWithoutFeedback onPress={bb}>
        <Image
          style={[{ width: iconWidth }, styles.icon]}
          source={require('@/common/static/message.png')}
          resizeMode="cover"
        />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          styles.spaceBox,
          { width: sharedWidth, transform: [{ scale: sharedScale }] },
        ]}>
        <Image
          style={styles.avatarStyle}
          source={{
            uri: 'https://tuchuangs.com/imgs/2023/09/18/44d99b5d075ce313.jpg',
          }}
          resizeMode="cover"
        />
        <Text style={styles.userName} numberOfLines={1} ellipsizeMode="middle">
          CYXI
        </Text>
      </Animated.View>
      <TouchableWithoutFeedback onPress={aa}>
        <Image
          style={[{ width: iconWidth }, styles.icon]}
          source={require('@/common/static/setting.png')}
          resizeMode="cover"
        />
      </TouchableWithoutFeedback>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: commonStyles.pageBorderGap,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    aspectRatio: 1,
  },
  spaceBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  userName: {
    fontSize: 18,
    fontWeight: '500',
    maxWidth: 100,
  },
});

export default TopBar;
