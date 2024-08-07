import { commonStyles, getCommonShadowStyle } from '@/common/styles';
import { memo } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { PATH } from '@/interfaces/commonEnum';
import { useScreenNavigation } from '@/utils/hooks';

function SloganTab({ bottomSafeArea }: { bottomSafeArea: number }) {
  const navigation = useScreenNavigation();
  const joinUs = () => {
    console.log('9898加入我们！！！');
  };
  const loginHandler = () => {
    navigation.navigate(PATH.LOGIN_SCREEN);
  };
  return (
    <View style={[styles.container, { paddingBottom: bottomSafeArea }]}>
      <View>
        <Text style={[styles.fontStyle, styles.title]}>
          Welcome Use OneLight
        </Text>
        <Text style={[styles.fontStyle, styles.title]}>
          这是一个专属年轻人的App
        </Text>
      </View>
      <View>
        <Text style={[styles.fontStyle, styles.content]}>在这里，你可以</Text>
        <Text style={[styles.fontStyle, styles.content]}>
          分享美食，社交，数码，时尚
        </Text>
        <Text style={[styles.fontStyle, styles.content]}>
          或者
          <Text
            style={[styles.fontStyle, styles.content, styles.joinUs]}
            onPress={joinUs}>
            加入我们
          </Text>
          的团队
        </Text>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={loginHandler}>
        <Text style={styles.loginText}>注册/登录</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fontStyle: {
    textAlign: 'center',
    marginVertical: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    fontSize: 15,
    color: '#999999',
  },
  joinUs: {
    color: '#4597f7',
  },
  loginBtn: {
    width: 150,
    height: 46,
    borderRadius: 25,
    backgroundColor: commonStyles.black,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...getCommonShadowStyle(),
  },
  loginText: {
    color: commonStyles.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default memo(SloganTab);
