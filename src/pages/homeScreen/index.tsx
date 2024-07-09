import { useRef } from 'react';
import AnimatedHeader from './components/AnimatedHeader';
import { useSharedValue } from 'react-native-reanimated';
import NewsListContainer from './components/NewsListContainer';
import { HomeScreenContext } from './utils/context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RootView from '@/components/RootView';

function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const initTopbarHeight = top + 170;
  // 动画共享滑动距离
  const sharedScrollY = useSharedValue(0);
  // 最外层所有list列表容器ref
  const newsListContainerRef = useRef(null);
  // 首页‘全部->all’类型列表ref
  const allTypeListRef = useRef(null);
  // 分类栏容器ref
  const categoryBarRef = useRef(null);
  const providerValue = {
    initTopbarHeight, // 顶部动画组件的高度
    newsListContainerRef, // 最外层所有list列表容器ref
    categoryBarRef, // 分类栏容器ref
    sharedScrollY, // 动画共享滑动距离
    allTypeListRef, // 首页‘全部->all’类型列表ref
  };
  return (
    <HomeScreenContext.Provider value={providerValue}>
      <RootView>
        <NewsListContainer ref={newsListContainerRef} />
        {/* 涉及blur组件需要放在下方 */}
        <AnimatedHeader />
      </RootView>
    </HomeScreenContext.Provider>
  );
}

export default HomeScreen;
