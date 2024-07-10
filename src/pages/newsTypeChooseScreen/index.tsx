import { commonStyles } from '@/common/styles';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import AddTypeItem from './components/AddTypeItem';
import Animated, {
  BounceInDown,
  BounceOutDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import RootView from '@/components/RootView';
import BlurBox from '@/components/BluerBox';
import { useScreenNavigation } from '@/utils/hooks';

const Types = [
  {
    bgColor: '#FDF2E4',
    title: '跑腿',
    desc: '就是你接口方式就能放假我能减肥',
    descImg:
      'https://pub.ddimg.mobi/develop/f6de89d315e046c2be405554bfb83853.png',
    id: '000',
  },
  {
    bgColor: '#FEF2EE',
    title: '兼职',
    desc: '卡手机看了凤凰国际你接口是你的法拉利快乐',
    descImg:
      'https://pub.ddimg.mobi/develop/884ad433210740f584a22432bc6c170c.png',
    id: '001',
  },
  {
    bgColor: '#FFF4DC',
    title: '交易',
    desc: '就是你接口方，啊啊啊啊喂服务式就大法能放假。我能减肥',
    descImg:
      'https://pub.ddimg.mobi/develop/7d10d2266ff94b39a3af56fe13141628.png',
    id: '002',
  },
  {
    bgColor: '#FEE60F',
    title: 'Replace',
    desc: '就是你接口方式就能放进肌肤的认同感假我能减肥',
    descImg:
      'https://pub.ddimg.mobi/develop/b0e8be5d789146c49fabe2995c337e22.png',
    id: '003',
  },
];

function NewsTypeChooseScreen() {
  const navigation = useScreenNavigation();
  // 关闭按钮旋转动画
  const rotation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });
  const startAnimation = () => {
    rotation.value = withSpring(-45, {
      damping: 10,
      stiffness: 100,
      mass: 1,
    });
  };
  useEffect(() => {
    startAnimation();
  }, []);
  const cancelChoose = () => {
    navigation.goBack();
  };
  return (
    <RootView>
      <BlurBox />
      <View style={styles.container}>
        <Animated.View
          style={styles.main}
          entering={BounceInDown.duration(800)}
          exiting={BounceOutDown.duration(800)}>
          {Types.map(item => (
            <AddTypeItem key={item.id} typeInfo={item} />
          ))}
        </Animated.View>
        <TouchableWithoutFeedback onPress={cancelChoose}>
          <Animated.Image
            source={require('./static/publish.png')}
            style={[styles.close, animatedStyle]}
          />
        </TouchableWithoutFeedback>
      </View>
    </RootView>
  );
}

const styles = StyleSheet.create({
  blur: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: commonStyles.pageBorderGap * 2,
  },
  main: {
    width: '100%',
  },
  closeBox: {},
  close: {
    width: 50,
    aspectRatio: 1,
  },
});
export default NewsTypeChooseScreen;
