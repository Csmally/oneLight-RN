import { useCallback, useContext, useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';
import { HomeScreenContext } from '../utils/context';
import { FlatList } from 'react-native';

const homeTabs = [
  {
    title: '全部',
    img: 'http://10.193.235.32:7002/public/appAssets/homePageTabs/all.png',
    keyWord: '全部',
    id: '0',
  },
  {
    title: '美食',
    img: 'http://10.193.235.32:7002/public/appAssets/homePageTabs/food.png',
    keyWord: '美食',
    id: '1',
  },
  {
    title: '快递',
    img: 'http://10.193.235.32:7002/public/appAssets/homePageTabs/express.png',
    keyWord: '快递',
    id: '2',
  },
  {
    title: 'Replace',
    img: 'http://10.193.235.32:7002/public/appAssets/homePageTabs/class.png',
    keyWord: '代课',
    id: '3',
  },
  {
    title: '兼职',
    img: 'http://10.193.235.32:7002/public/appAssets/homePageTabs/job.png',
    keyWord: '兼职',
    id: '4',
  },
];
function CategoryBar() {
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
      data={homeTabs}
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

CategoryBar.displayName = 'CategoryBar';

export default CategoryBar;
