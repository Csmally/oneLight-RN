import { StyleSheet } from 'react-native';
import TopBar from './TopBar';
import { memo, useContext } from 'react';
import { MineScreenContext } from '../utils/context';
import Animated, {
  Extrapolation,
  interpolate,
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import BlurBox from '@/components/BluerBox';

function AnimatedHeader() {
  const { sharedScrollY } = useContext(MineScreenContext);
  // hearder的ref
  const animatedHeaderRef = useAnimatedRef();
  const animatedHeaderHeight = useSharedValue(0);
  const getHeaderLayout = () => {
    runOnUI(() => {
      const headerMeasurement = measure(animatedHeaderRef);
      animatedHeaderHeight.value = headerMeasurement?.height || 50;
    })();
  };
  // 映射头部组件高斯模糊透明度动画样式
  const blurAnimatedStyle = useAnimatedStyle(() => {
    // topbar背景透明度动画
    const opacity = interpolate(
      sharedScrollY.value,
      [0, animatedHeaderHeight.value],
      [0, 1],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    );
    return { opacity };
  });
  return (
    <Animated.View ref={animatedHeaderRef} onLayout={getHeaderLayout}>
      <Animated.View style={[styles.blurContainer, blurAnimatedStyle]}>
        <BlurBox />
      </Animated.View>
      <TopBar />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  blurContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default memo(AnimatedHeader);
