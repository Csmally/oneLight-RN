/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { setGlobalTools, initStorageData } from '@/utils/loadAppTools';
import { RecoilRoot } from 'recoil';

const AppRoot = function () {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};

setGlobalTools();
initStorageData();
AppRegistry.registerComponent(appName, () => AppRoot);
