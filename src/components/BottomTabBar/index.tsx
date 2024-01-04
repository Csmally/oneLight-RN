import { StyleSheet, View } from 'react-native';
import BarItem from './components/BarItem';
import PublishTool from './components/PublishTool';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import BlurBox from '@/components/BluerBox';

function BottomTabBar(props: BottomTabBarProps) {
  const { state, navigation } = props;
  return (
    <View style={[styles.container]}>
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
    paddingBottom: 50,
  },
});

export default BottomTabBar;
