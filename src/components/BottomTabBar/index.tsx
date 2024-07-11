import { StyleSheet, View } from 'react-native';
import BarItem from './components/BarItem';
import PublishTool from './components/PublishTool';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import BlurBox from '@/components/BluerBox';
import Storage from '@/storage';
import { STORAGE_KEYS } from '@/interfaces/commonEnum';
import { DeviceInfo } from '@/common/consts';

function BottomTabBar(props: BottomTabBarProps) {
  const { state, navigation } = props;
  const bottomArea =
    Storage.getNumber(STORAGE_KEYS.BOTTOM_SAFEAREA) ??
    DeviceInfo.DEFAULT_BOTTOM_SAFEAREA;
  return (
    <View style={[styles.container, { paddingBottom: bottomArea + 20 }]}>
      <BlurBox />
      <BarItem
        currentIndex={state.index}
        route={state.routes[0]}
        selfIndex={0}
        navigation={navigation}
      />
      <BarItem
        currentIndex={state.index}
        route={state.routes[1]}
        selfIndex={1}
        navigation={navigation}
      />
      <PublishTool />
      <BarItem
        currentIndex={state.index}
        route={state.routes[2]}
        selfIndex={2}
        navigation={navigation}
      />
      <BarItem
        currentIndex={state.index}
        route={state.routes[3]}
        selfIndex={3}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    paddingTop: 10,
  },
});

export default BottomTabBar;
