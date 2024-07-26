/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { RecoilRoot } from 'recoil';
import { useState } from 'react';
import AppWaitingScreen from '@/pages/appWaitingScreen';
import { initGlobalTools } from '@/utils/loadAppTools';

const AppRoot = function () {
  const [endInit, setEndInit] = useState(false);
  return (
    <RecoilRoot>
      {endInit ? <App /> : <AppWaitingScreen setEndInit={setEndInit} />}
    </RecoilRoot>
  );
};

// 初始化全局方法、全局变量
initGlobalTools();

AppRegistry.registerComponent(appName, () => AppRoot);
