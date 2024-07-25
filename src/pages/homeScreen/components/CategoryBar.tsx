import { useCallback, useContext, useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';
import { HomeScreenContext } from '../utils/context';
import { FlatList } from 'react-native';
import { appGlobalConfigsStore } from '@/store';
import { useRecoilValue } from 'recoil';

function CategoryBar() {
  const { homeQuickSearchBar } = useRecoilValue(appGlobalConfigsStore);
  const {
    newsListContainerRef,
    categoryBarRef,
    sharedScrollY,
    allTypeListRef,
  } = useContext(HomeScreenContext);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const changeActiveTab = useCallback(
    (index: number) => {
      if (index !== 0 && sharedScrollY.value < 90) {
        allTypeListRef?.current?.scrollToOffset?.({
          offset: 90,
          animated: true,
        });
      }
      newsListContainerRef?.current?.setActiveIndex?.(index);
      setActiveTabIndex(index);
      categoryBarRef?.current?.scrollToIndex?.({
        index,
        animated: true,
        viewPosition: 0.5,
      });
    },
    [allTypeListRef, categoryBarRef, newsListContainerRef, sharedScrollY],
  );
  useEffect(() => {
    categoryBarRef.current.changeActiveTab = changeActiveTab;
  }, [categoryBarRef, changeActiveTab]);
  return (
    <FlatList
      ref={ref => {
        categoryBarRef.current = ref;
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      removeClippedSubviews={true}
      data={homeQuickSearchBar}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => (
        <CategoryItem
          categoryInfo={item}
          changeActiveTab={changeActiveTab}
          selfIndex={index}
          activeTabIndex={activeTabIndex}
        />
      )}
    />
  );
}

export default CategoryBar;
