import { StyleSheet } from 'react-native';
import { useState } from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import MobileInput from './components/MobileInput';
import MsgInput from './components/MsgInput';
import Slogan from './components/Slogan';
import Handlerbar from './components/Handlerbar';
import RootView from '@/components/RootView';

function LoginScreen() {
  const [isShowPassCode, setIsShowPassCode] = useState(false);
  const [mobile, setMobile] = useState('');
  const [msgCode, setMsgCode] = useState('');
  return (
    <RootView>
      <Animated.View
        style={styles.container}
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(500)}>
        <Slogan />
        <MobileInput
          mobile={mobile}
          setMobile={setMobile}
          isShowPassCode={isShowPassCode}
          setIsShowPassCode={setIsShowPassCode}
          setMsgCode={setMsgCode}
        />
        {isShowPassCode ? (
          <MsgInput msgCode={msgCode} setMsgCode={setMsgCode} mobile={mobile} />
        ) : null}
        <Handlerbar
          isShowPassCode={isShowPassCode}
          mobile={mobile}
          msgCode={msgCode}
        />
      </Animated.View>
    </RootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default LoginScreen;
