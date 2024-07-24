import { useContext, useState } from 'react';
import { View, RefreshControl, StyleSheet } from 'react-native';
import { HomeScreenContext } from '../utils/context';
import Animated, { useAnimatedScrollHandler } from 'react-native-reanimated';
import EmptyComponent from '@/components/EmptyComponent';
import News from '@/components/News';
import LoadMore from '@/components/LoadMore';
import HomeHeaderActivity from './HomeHeaderActivity';
import { FlashList } from '@shopify/flash-list';
import { commonStyles } from '@/common/styles';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const homeNews: NewsItem[] = [
  {
    id: '1',
    publisherName: 'CYXI',
    avatar: 'http://192.168.110.6:7005/public/imgs/small/1.jpg',
    imgs: [
      'http://192.168.110.6:7005/public/imgs/big/1.jpg',
      'http://192.168.110.6:7005/public/imgs/big/4.jpg',
      'http://192.168.110.6:7005/public/imgs/small/2.jpg',
      'http://192.168.110.6:7005/public/imgs/big/4.jpg',
      'http://192.168.110.6:7005/public/imgs/small/4.jpg',
      'http://192.168.110.6:7005/public/imgs/big/6.jpg',
    ],
    description:
      '开头回家啊健身房公交卡是否更加快速的风景还能可贵飞机回家啊健身房公交卡是否更加快速的风景还能可贵飞机回家啊健身房公交卡是否更加快速的风景还能可贵飞机回家啊健身房公交卡是否更加快速的风景还能可贵飞机回家啊健身房公交卡是否更加快速的风景还能可贵飞机回家啊健身房公交卡是否更加快速的风景还能可贵飞机结尾',
    publishTime: '刚刚',
    tags: [1, 2],
  },
  {
    id: '2',
    publisherName: 'x1',
    avatar: 'http://192.168.110.6:7005/public/imgs/small/2.jpg',
    imgs: [
      'http://192.168.110.6:7005/public/imgs/big/2.jpg',
      'http://192.168.110.6:7005/public/imgs/small/4.jpg',
      'http://192.168.110.6:7005/public/imgs/small/9.jpg',
    ],
    description: '减肥黄金时代放假开始就',
    publishTime: '15分钟前',
  },
  {
    id: '3',
    publisherName: '盖世英雄',
    avatar: 'http://192.168.110.6:7005/public/imgs/small/3.jpg',
    imgs: [
      'http://192.168.110.6:7005/public/imgs/big/2.jpg',
      'http://192.168.110.6:7005/public/imgs/small/5.jpg',
      'http://192.168.110.6:7005/public/imgs/small/1.jpg',
      'http://192.168.110.6:7005/public/imgs/big/10.jpg',
    ],
    description: '减肥黄金时代放假开始就',
    publishTime: '1小时前',
    tags: [4],
  },
  {
    id: '4',
    publisherName: 'Alibaba',
    avatar: 'http://192.168.110.6:7005/public/imgs/small/4.jpg',
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 13:12:00',
    tags: [3],
    imgs: ['http://192.168.110.6:7005/public/imgs/big/3.jpg'],
  },
  {
    id: '5',
    publisherName: 'ByteDance',
    avatar: 'http://192.168.110.6:7005/public/imgs/small/5.jpg',
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 18:36:28',
  },
  {
    id: '6',
    publisherName: '呆头鹅&豆',
    avatar: 'http://192.168.110.6:7005/public/imgs/small/6.jpg',
    description: '减肥黄金时代放假开始就aa$#@',
    publishTime: '2023-09-23 13:12:00',
    tags: [3],
    imgs: [
      'http://192.168.110.6:7005/public/imgs/big/6.jpg',
      'http://192.168.110.6:7005/public/imgs/big/1.jpg',
    ],
  },
  {
    id: '7',
    publisherName: '我™️',
    avatar: 'http://192.168.110.6:7005/public/imgs/small/7.jpg',
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 18:36:28',
  },
  {
    id: '8',
    publisherName: 'hai霸天',
    avatar: 'http://192.168.110.6:7005/public/imgs/small/8.jpg',
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 13:12:00',
    tags: [3],
    imgs: ['http://192.168.110.6:7005/public/imgs/small/9.jpg'],
  },
  {
    id: '9',
    publisherName: '胡*图图',
    avatar: 'http://192.168.110.6:7005/public/imgs/small/9.jpg',
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 18:36:28',
  },
  {
    id: '10',
    publisherName: '渔夫#',
    avatar: 'http://192.168.110.6:7005/public/imgs/small/10.jpg',
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 13:12:00',
    tags: [3],
    imgs: ['http://192.168.110.6:7005/public/imgs/big/6.jpg'],
  },
];
const apifunc = async () => {
  return new Promise(res => {
    setTimeout(() => {
      const data: NewsItem[] = homeNews.map((item, index) => ({
        ...item,
        id: index + '-' + new Date().getTime(),
      }));
      res(data);
    }, 200);
  });
};

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList<NewsItem>);

type TypeNewsListProps = {
  route: {
    key: string;
    title: string;
  };
};

const renderItem = ({ item }: { item: NewsItem }) => <News news={item} />;

function TypeNewsList({ route }: TypeNewsListProps) {
  const isAll = route.key === 'all';
  const { sharedScrollY, initTopbarHeight, allTypeListRef } =
    useContext(HomeScreenContext);
  const scrollHandler = useAnimatedScrollHandler(event => {
    if (isAll) {
      sharedScrollY.value = event.contentOffset.y;
    }
  });
  const [loadingStatus, setLoadingStatus] = useState({
    isRefreshing: false,
    isLoadingMore: false,
  });
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  // 接口查询list数据源
  const getNewsData = async (type = 'loadmore') => {
    if (loadingStatus.isLoadingMore || loadingStatus.isRefreshing) return;
    setLoadingStatus({
      isRefreshing: type === 'init' ? true : false,
      isLoadingMore: type === 'loadmore' ? true : false,
    });
    const apiData: NewsItem[] = (await apifunc()) as NewsItem[];
    setNewsData(type === 'loadmore' ? [...newsData, ...apiData] : apiData);
    setLoadingStatus({
      isRefreshing: false,
      isLoadingMore: false,
    });
  };
  // 下拉刷新
  const initRefresh = () => {
    getNewsData('init');
  };
  // 上滑加载
  const loadMoreData = () => {
    getNewsData('loadmore');
  };
  // 底部导航栏高度
  const BottomTabBarHeight = useBottomTabBarHeight() + 20;
  return (
    <View style={styles.page}>
      <AnimatedFlashList
        ref={ref => {
          if (isAll) {
            allTypeListRef.current = ref;
          }
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: BottomTabBarHeight,
        }}
        estimatedItemSize={110}
        keyExtractor={item => item.id}
        onScroll={scrollHandler}
        data={newsData}
        ListEmptyComponent={
          <EmptyComponent
            isShow={!loadingStatus.isLoadingMore && !loadingStatus.isRefreshing}
          />
        }
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListHeaderComponent={<HomeHeaderActivity isAll={isAll} />}
        ListFooterComponent={
          <LoadMore isLoadingMore={loadingStatus.isLoadingMore} />
        }
        refreshControl={
          <RefreshControl
            refreshing={loadingStatus.isRefreshing}
            onRefresh={initRefresh}
            progressViewOffset={
              isAll ? initTopbarHeight : initTopbarHeight - 90
            }
          />
        }
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: commonStyles.pageBorderGap,
  },
});

export default TypeNewsList;
