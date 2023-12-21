import { commonStyles, getCommonShadowStyle } from '@/common/styles';
import { memo } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import OlText from '@/components/OneLightText';
import { PATH } from '@/common/consts';
import { useScreenNavigation } from '@/utils/hooks';

function SloganTab() {
  const navigation = useScreenNavigation();
  const joinUs = () => {
    console.log('9898加入我们！！！');
  };
  const loginHandler = () => {
    navigation.navigate(PATH.LOGIN_SCREEN);
  };
  return (
    <View style={styles.container}>
      <View>
        <OlText style={[styles.fontStyle, styles.title]}>Welcome Use OneLight</OlText>
        <OlText style={[styles.fontStyle, styles.title]}>这是一个专属年轻人的App</OlText>
      </View>
      <View>
        <OlText style={[styles.fontStyle, styles.content]}>在这里，你可以</OlText>
        <OlText style={[styles.fontStyle, styles.content]}>分享美食，社交，数码，时尚</OlText>
        <OlText style={[styles.fontStyle, styles.content]}>
          或者
          <OlText style={[styles.fontStyle, styles.content, styles.joinUs]} onPress={joinUs}>
            加入我们
          </OlText>
          的团队
        </OlText>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={loginHandler}>
        <OlText style={styles.loginText}>注册/登录</OlText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 30,
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
