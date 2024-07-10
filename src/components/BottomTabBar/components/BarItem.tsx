import { memo, useEffect } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import OlFastImage from '@/components/OlFastImage';

type BarItemProps = {
  currentIndex: number;
  selfIndex: number;
  route: any;
  navigation: any;
};

const AnimatedOlFastImage = Animated.createAnimatedComponent(OlFastImage);

function BarItem({ currentIndex, selfIndex, route, navigation }: BarItemProps) {
  const isFocus = currentIndex === selfIndex;
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  // 当isFocus改变时触发动画
  useEffect(() => {
    scale.value = withSequence(
      withTiming(0.8, { duration: 100 }),
      withTiming(1.2, { duration: 100 }),
      withTiming(1, { duration: 100 }),
    );
  }, [isFocus, scale]);

  const selectTab = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocus && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={selectTab}>
      <View style={styles.container}>
        {isFocus ? (
          <AnimatedOlFastImage
            source={getImgSource(selfIndex, isFocus)}
            style={[styles.img, animatedStyle]}
          />
        ) : (
          <OlFastImage
            source={getImgSource(selfIndex, isFocus)}
            style={styles.img}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: 25,
    aspectRatio: 1,
  },
});

const getImgSource = (selfIndex: number, isFocus: boolean) => {
  let source;
  switch (selfIndex) {
    case 0:
      source = isFocus
        ? require('../static/homeSelect.png')
        : require('../static/home.png');
      break;
    case 1:
      source = isFocus
        ? require('../static/marketSelect.png')
        : require('../static/market.png');
      break;
    case 2:
      source = isFocus
        ? require('../static/circleSelect.png')
        : require('../static/circle.png');
      break;
    case 3:
      source = isFocus
        ? require('../static/mineSelect.png')
        : require('../static/mine.png');
      break;
    default:
      source = isFocus
        ? require('../static/homeSelect.png')
        : require('../static/home.png');
      break;
  }
  return source;
};

export default memo(BarItem, (prevProps, nextProps) => {
  return (
    prevProps.currentIndex !== nextProps.selfIndex &&
    nextProps.currentIndex !== nextProps.selfIndex
  );
});
