import RootView from '@/components/RootView';
import { deviceInfoStore } from '@/store';
import { initStorageData, setGlobalTools } from '@/utils/loadAppTools';
import { useEffect, useLayoutEffect } from 'react';
import { Dimensions, Text } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { useSetRecoilState } from 'recoil';

interface WaitingInitScreenProps {
  setInitCompleted: (flag: boolean) => void;
}

function MainView({ setInitCompleted }: WaitingInitScreenProps) {
  const {
    top: safeTop,
    bottom: safeBottom,
    left: safeLeft,
    right: safeRight,
  } = useSafeAreaInsets();
  const setDeviceInfo = useSetRecoilState(deviceInfoStore);
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
      deviceId: '',
    }));
  }, [safeBottom, safeLeft, safeRight, safeTop, setDeviceInfo]);
  useEffect(() => {
    // 设置全局方法
    setGlobalTools();
    // 初始化本地storage
    initStorageData();
    // 关闭初始化屏幕
    setInitCompleted(true);
    SplashScreen.hide();
  }, [setInitCompleted]);
  return (
    <RootView style={{ height: 891.42, backgroundColor: 'pink' }}>
      <Text>黄金时代可根据第三方库接口立刻叫孤苦伶仃南方那边</Text>
    </RootView>
  );
}

function WaitingInitScreen({ setInitCompleted }: WaitingInitScreenProps) {
  return (
    <SafeAreaProvider>
      <MainView setInitCompleted={setInitCompleted} />
    </SafeAreaProvider>
  );
}

export default WaitingInitScreen;
