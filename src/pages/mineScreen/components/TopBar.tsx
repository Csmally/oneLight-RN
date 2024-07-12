import { commonStyles } from '@/common/styles';
import { useContext } from 'react';
import { Text, Dimensions, StyleSheet } from 'react-native';
import { MineScreenContext } from '../utils/context';
import Animated, {
  useAnimatedReaction,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import OlFastImage from '@/components/OlFastImage';

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
      <OlFastImage
        style={[{ width: iconWidth }, styles.icon]}
        source={require('@/static/icons/message.png')}
        resizeMode="cover"
        onPress={bb}
      />
      <Animated.View
        style={[
          styles.spaceBox,
          { width: sharedWidth, transform: [{ scale: sharedScale }] },
        ]}>
        <OlFastImage
          style={styles.avatarStyle}
          source={{
            uri: 'https://ice.frostsky.com/2024/07/11/e9b6d932454231a7d21f15d3d95b0aa5.md.jpeg',
          }}
          resizeMode="cover"
        />
        <Text style={styles.userName} numberOfLines={1} ellipsizeMode="middle">
          CYXI
        </Text>
      </Animated.View>
      <OlFastImage
        style={[{ width: iconWidth }, styles.icon]}
        source={require('@/static/icons/setting.png')}
        resizeMode="cover"
        onPress={aa}
      />
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
