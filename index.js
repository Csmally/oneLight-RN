/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { RecoilRoot } from 'recoil';
import { useState } from 'react';
import AppWaitingScreen from '@/pages/appWaitingScreen';

const AppRoot = function () {
  const [endInit, setEndInit] = useState(false);
  return (
    <RecoilRoot>
      {endInit ? <App /> : <AppWaitingScreen setEndInit={setEndInit} />}
    </RecoilRoot>
  );
};

AppRegistry.registerComponent(appName, () => AppRoot);
