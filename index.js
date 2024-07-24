/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { RecoilRoot } from 'recoil';
import { useState } from 'react';
import WaitingInitScreen from './WaitingInitScreen';

const AppRoot = function () {
  const [initCompleted, setInitCompleted] = useState(false);
  return (
    <RecoilRoot>
      {initCompleted ? (
        <App />
      ) : (
        <WaitingInitScreen setInitCompleted={setInitCompleted} />
      )}
    </RecoilRoot>
  );
};

AppRegistry.registerComponent(appName, () => AppRoot);
