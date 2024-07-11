import { PATH } from '@/interfaces/commonEnum';
import { commonStyles, getCommonShadowStyle } from '@/common/styles';
import OlFastImage from '@/components/OlFastImage';
import { useScreenNavigation } from '@/utils/hooks';
import { login } from '@/utils/login';
import { memo } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Animated, { Layout } from 'react-native-reanimated';

type HandlerbarProps = {
  isShowPassCode: boolean;
  mobile: string;
  msgCode: string;
};

function Handlerbar({ isShowPassCode, mobile, msgCode }: HandlerbarProps) {
  const navigation = useScreenNavigation();
  const loginHandle = async () => {
    // if (!isShowPassCode || !msgCode) {
    //   Toast.show(`请输入${!isShowPassCode ? '手机号码' : '验证码'}`);
    //   return;
    // }
    // const isLogin = await login(mobile, msgCode);
    // if (!isLogin) return;
    navigation.reset({ index: 0, routes: [{ name: PATH.MAIN_SCREEN }] });
  };
  return (
    <Animated.View layout={Layout.duration(300)} style={styles.btnContainer}>
      <Text style={[styles.or, styles.viewMargin]}>或</Text>
      <View style={[styles.loginMethods, styles.viewMargin]}>
        <OlFastImage
          style={styles.loginMethod}
          source={require('@/static/icons/wechat.png')}
          onPress={loginHandle}
        />
        <OlFastImage
          style={styles.loginMethod}
          source={require('@/static/icons/alipay.png')}
          onPress={loginHandle}
        />
      </View>
      <TouchableOpacity onPress={loginHandle} style={styles.loginBtn}>
        <Text style={styles.loginText}>登录</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  or: {
    textAlign: 'center',
    color: commonStyles.grey_placeholder,
  },
  viewMargin: {
    marginBottom: 30,
  },
  loginMethods: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginMethod: {
    marginHorizontal: 25,
    width: 30,
    height: 30,
  },
  loginText: {
    color: commonStyles.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginBtn: {
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    backgroundColor: commonStyles.black,
    ...getCommonShadowStyle(),
  },
});

export default memo(Handlerbar);
