import { commonStyles } from '@/common/styles';
import { useContext } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutChangeEvent,
  Text,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { HomeScreenContext } from '../utils/context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import OlFastImage from '@/components/OlFastImage';

const AnimatedOlFastImage = Animated.createAnimatedComponent(OlFastImage);

function InfoBar() {
  const { sharedScrollY } = useContext(HomeScreenContext);
  // 热区宽度
  const hotAreaWidth = useSharedValue(0);
  const setHotAreaWidth = (e: LayoutChangeEvent) => {
    const width = e?.nativeEvent?.layout?.width - 60 || 0;
    hotAreaWidth.value = width;
  };
  // 映射信息栏头像动画样式
  const avatarAnimatedStyle = useAnimatedStyle(() => {
    // 头像：宽、高、半径
    const imgStyle = interpolate(sharedScrollY.value, [0, 90], [40, 30], {
      extrapolateLeft: Extrapolation.CLAMP,
      extrapolateRight: Extrapolation.CLAMP,
    });
    // 头像：右边距
    const marginRight = interpolate(sharedScrollY.value, [0, 90], [0, 10], {
      extrapolateLeft: Extrapolation.CLAMP,
      extrapolateRight: Extrapolation.CLAMP,
    });
    // 头像：透明度
    const opacity = interpolate(sharedScrollY.value, [0, 90], [1, 0.5], {
      extrapolateLeft: Extrapolation.CLAMP,
      extrapolateRight: Extrapolation.CLAMP,
    });
    return {
      width: imgStyle,
      height: imgStyle,
      borderRadius: imgStyle / 2,
      marginRight,
      opacity,
    };
  });
  // 映射信息栏头像动画样式
  const communityNameAnimatedStyle = useAnimatedStyle(() => {
    // 信息栏额外paddingTop
    const opacity = interpolate(sharedScrollY.value, [0, 90], [1, 0], {
      extrapolateLeft: Extrapolation.CLAMP,
      extrapolateRight: Extrapolation.CLAMP,
    });
    return { opacity };
  });
  // 热区动画
  const hotAreaAnimatedStyle = useAnimatedStyle(() => {
    // 热区宽度
    const width = interpolate(
      sharedScrollY.value,
      [0, 90],
      [0, hotAreaWidth.value],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    );
    return {
      width,
    };
  });
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top, zIndex: 2 }}>
      <Animated.View style={styles.container} onLayout={setHotAreaWidth}>
        <View style={styles.settings}>
          <Icon
            name="location-arrow"
            onPress={() => {
              console.log('9898我是定位位置');
            }}
            size={20}
            color={commonStyles.black}
          />
        </View>
        <Animated.View
          style={[styles.communityNameContainer, communityNameAnimatedStyle]}>
          <Text
            style={styles.communityName}
            ellipsizeMode="middle"
            numberOfLines={1}>
            清华大学光华学院
          </Text>
        </Animated.View>
        <View style={[styles.settings, styles.avatarSetting]}>
          <AnimatedOlFastImage
            style={avatarAnimatedStyle}
            source={{
              uri: 'https://ice.frostsky.com/2024/07/11/e9b6d932454231a7d21f15d3d95b0aa5.md.jpeg',
            }}
            resizeMode="cover"
            onPress={() => {
              console.log('9898我是个人信息');
            }}
          />
        </View>
        {/* 搜索框热区 */}
        <TouchableWithoutFeedback
          onPress={() => {
            console.log('9898我是热区跳转');
          }}>
          <Animated.View style={[styles.hotArea, hotAreaAnimatedStyle]} />
        </TouchableWithoutFeedback>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: commonStyles.pageBorderGap,
  },
  settings: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    zIndex: 3,
  },
  avatarSetting: {
    alignItems: 'flex-end',
  },
  communityNameContainer: {
    maxWidth: 150,
  },
  communityName: {
    color: commonStyles.black_333,
    textAlign: 'center',
    fontSize: commonStyles.topBarFontSize,
    fontWeight: 'bold',
  },
  hotArea: {
    height: '100%',
    position: 'absolute',
    bottom: 0,
    right: commonStyles.pageBorderGap,
    zIndex: 2,
  },
});

export default InfoBar;
