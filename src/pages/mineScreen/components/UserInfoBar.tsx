import { commonStyles, getCommonShadowStyle } from '@/common/styles';
import { View, StyleSheet, Text } from 'react-native';
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
} from 'react-native-reanimated';
import { memo, useContext } from 'react';
import { MineScreenContext } from '../utils/context';
import OlFastImage from '@/components/OlFastImage';

function UserInfoBar() {
  const { userInfoBarHeight } = useContext(MineScreenContext);
  // 获取UserInfoBar布局信息
  const animatedUserInfoBarRef = useAnimatedRef();
  const getUserInfoBarLayout = () => {
    runOnUI(() => {
      const userInfoBarMeasurement = measure(animatedUserInfoBarRef);
      userInfoBarHeight.value = userInfoBarMeasurement?.height || 50;
    })();
  };
  return (
    <Animated.View
      style={styles.container}
      onLayout={getUserInfoBarLayout}
      ref={animatedUserInfoBarRef}>
      <Text style={styles.userName}>CYXI</Text>
      <View style={styles.userDesc}>
        <View style={styles.descItem}>
          <Text style={styles.label}>关注</Text>
          <Text style={styles.descInfo}>123</Text>
        </View>
        <View style={[styles.descItem, styles.border]}>
          <Text style={styles.label}>点赞</Text>
          <Text style={styles.descInfo}>456</Text>
        </View>
        <View style={styles.descItem}>
          <Text style={styles.label}>徽章</Text>
          <Text style={styles.descInfo}>789</Text>
        </View>
      </View>
      <View style={styles.avatarContainer}>
        <View style={[styles.avatarBox, styles.avatar]}>
          <OlFastImage
            style={styles.avatar}
            source={{
              uri: 'https://ice.frostsky.com/2024/07/11/e9b6d932454231a7d21f15d3d95b0aa5.md.jpeg',
            }}
            resizeMode="cover"
          />
        </View>
        <OlFastImage
          style={styles.genderIcon}
          source={require('@/common/static/male.png')}
          resizeMode="cover"
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: commonStyles.pageBorderGap,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 22,
    fontWeight: '500',
    marginRight: 5,
  },
  userDesc: {
    flexDirection: 'row',
    marginTop: 8,
  },
  descItem: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  border: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: commonStyles.black,
  },
  label: {
    fontSize: 12,
    color: commonStyles.grey_text,
    marginRight: 2,
  },
  descInfo: {
    fontSize: 12,
  },
  avatarContainer: {
    marginTop: 20,
    position: 'relative',
  },
  avatarBox: {
    backgroundColor: commonStyles.pageBgColor,
    ...getCommonShadowStyle(),
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  genderIcon: {
    width: 28,
    aspectRatio: 1,
    position: 'absolute',
    top: 0,
    right: 2,
  },
});

export default memo(UserInfoBar);
