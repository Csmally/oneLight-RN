import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from '@/components/BottomTabBar';
import { AppPaths, RootMainPaths } from '@/pages/screensMap';
import { PATH } from '@/interfaces/commonEnum';
import { commonStyles } from '@/common/styles';
import { useRecoilValue } from 'recoil';
import { storageAppInfoStore } from '@/store';
import { useLayoutEffect, useState } from 'react';

// 顶级根路由栈
const Stack = createNativeStackNavigator();
// 底部导航栈
const BottomTabNavigator = createBottomTabNavigator();

function App() {
  const [loadedApp, setLoadedApp] = useState(false); // 是否启动并登陆过APP
  const { appIsLoaded } = useRecoilValue(storageAppInfoStore);
  useLayoutEffect(() => {
    setLoadedApp(appIsLoaded);
  }, [appIsLoaded]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={loadedApp ? PATH.MAIN_SCREEN : PATH.WELCOME_SCREEN}
        screenOptions={{
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
          statusBarStyle: 'dark',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTitleStyle: {
            color: commonStyles.black,
            fontWeight: 'bold',
          },
          headerBlurEffect: 'light',
        }}>
        <Stack.Screen
          name={PATH.MAIN_SCREEN}
          component={RootMainRoutes}
          options={{ headerShown: false, title: '', animation: 'fade' }}
        />
        {AppPaths.map(route => (
          <Stack.Screen
            name={route.path}
            component={route.component}
            options={{
              title: route.title,
              presentation: route.presentation ?? 'card',
              animation: route.animation ?? 'default',
              headerShown: route.headerShown ?? true,
              headerTransparent: route.headerTransparent ?? false,
              headerStyle: route.headerStyle ?? {
                backgroundColor: commonStyles.headerBgColor,
              },
            }}
            key={route.path}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function RootMainRoutes() {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={BottomTabBar}>
      {RootMainPaths.map(route => (
        <BottomTabNavigator.Screen
          name={route.path}
          component={route.component}
          key={route.path}
        />
      ))}
    </BottomTabNavigator.Navigator>
  );
}

export default App;
