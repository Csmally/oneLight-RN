import { commonStyles } from '@/common/styles';
import RootView from '@/components/RootView';
import { apiGetGlobalConfigs } from '@/services/globalConfigService';
import { appGlobalConfigsStore, deviceInfoStore } from '@/store';
import {
  initStorageData,
  initGlobalTools,
  initBaseConfigs,
} from '@/utils/loadAppTools';
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { useSetRecoilState } from 'recoil';

interface WaitingInitScreenProps {
  setEndInit: (flag: boolean) => void;
}

interface AppWaitingScreenCtxType {
  setEndInit: (flag: boolean) => void;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  leave: {
    position: 'absolute',
    backgroundColor: commonStyles.maskColor,
    paddingHorizontal: commonStyles.pageBorderGap,
    paddingVertical: 5,
    borderRadius: 20,
  },
  timerTxt: {
    fontSize: 14,
    color: commonStyles.white,
  },
});

const defaultAppWaitingScreenCtx: AppWaitingScreenCtxType = {
  setEndInit: () => {},
};

const AppWaitingScreenCtx = createContext<AppWaitingScreenCtxType>(
  defaultAppWaitingScreenCtx,
);

function MainView() {
  const { setEndInit } = useContext(AppWaitingScreenCtx);

  // 初始化状态state
  const [second, setSecond] = useState(5);
  const [initCompleted, setInitCompleted] = useState(false);
  const [hideSplashScreen, setHideSplashScreen] = useState(false);

  // 获取设备尺寸相关信息
  const {
    top: safeTop,
    bottom: safeBottom,
    left: safeLeft,
    right: safeRight,
  } = useSafeAreaInsets();

  const setDeviceInfo = useSetRecoilState(deviceInfoStore);
  const setAppGlobalConfigs = useSetRecoilState(appGlobalConfigsStore);

  // 初始化设备信息
  useLayoutEffect(() => {
    const {
      width: screenWidth,
      height: screenHeight,
      fontScale: screenFontScale,
      scale: screenScale,
    } = Dimensions.get('screen');
    const {
      width: windowWidth,
      height: windowHeight,
      fontScale: windowFontScale,
      scale: windowScale,
    } = Dimensions.get('window');
    // 初始化设备信息
    setDeviceInfo(curVal => ({
      ...curVal,
      safeTop,
      safeBottom,
      safeLeft,
      safeRight,
      screenWidth,
      screenHeight,
      screenFontScale,
      screenScale,
      windowWidth,
      windowHeight,
      windowFontScale,
      windowScale,
    }));
  }, [safeBottom, safeLeft, safeRight, safeTop, setDeviceInfo]);

  // 初始化APP必要设置
  useEffect(() => {
    const init = async () => {
      // 初始化全局方法
      initGlobalTools();
      // 初始化本地storage
      initStorageData();
      /**
       * 初始化基础信息信息
       *
       * 警告：
       * initBaseConfigs方法 “必须” 在所有涉及网络请求方法之前调用！！！
       */
      await initBaseConfigs();
      const { data, success } = await apiGetGlobalConfigs();
      if (success) {
        setAppGlobalConfigs(data);
      }
      setInitCompleted(true);
    };
    init();
  }, [setAppGlobalConfigs]);

  // 关闭启动屏幕
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (initCompleted) {
      timer = setTimeout(() => {
        setHideSplashScreen(true);
        SplashScreen.hide();
      }, 1500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [initCompleted]);

  // 关闭初始化屏幕
  useEffect(() => {
    if (second === 0) {
      setEndInit(true);
    }
    let timer: string | number | NodeJS.Timeout | undefined;
    if (hideSplashScreen) {
      timer = setInterval(() => {
        setSecond(second - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [hideSplashScreen, second, setEndInit]);

  const leaveWaitScreen = () => {
    setEndInit(true);
  };
  return (
    <RootView style={styles.container}>
      <TouchableWithoutFeedback onPress={leaveWaitScreen}>
        <View
          style={[
            styles.leave,
            { top: safeTop, right: commonStyles.pageBorderGap },
          ]}>
          <Text style={styles.timerTxt}>
            {second}
            <Text> 跳过</Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <ActivityIndicator color={'#000000'} size={'large'} />
    </RootView>
  );
}

function AppWaitingScreen({ setEndInit }: WaitingInitScreenProps) {
  const waitingInitScreenCtxVal = { setEndInit };
  return (
    <SafeAreaProvider>
      <AppWaitingScreenCtx.Provider value={waitingInitScreenCtxVal}>
        <MainView />
      </AppWaitingScreenCtx.Provider>
    </SafeAreaProvider>
  );
}

export default AppWaitingScreen;
