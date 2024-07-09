import { useContext, useState } from "react";
import { View, RefreshControl, StyleSheet } from "react-native";
import { HomeScreenContext } from "../utils/context";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";
import EmptyComponent from "@/components/EmptyComponent";
import News from "@/components/News";
import LoadMore from "@/components/LoadMore";
import newsDataMock from '@/mock/newsData';
import HomeHeaderActivity from "./HomeHeaderActivity";
import { FlashList } from "@shopify/flash-list";
import { commonStyles } from "@/common/styles";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const apifunc = async () => {
    return new Promise((res) => {
        setTimeout(() => {
            const data: NewsItem[] = newsDataMock.map((item, index) => ({
                ...item,
                id: index + '-' + (new Date()).getTime()
            }));
            res(data);
        }, 200);
    });
};

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList<NewsItem>);

type TypeNewsListProps = {
    route: {
        key: string,
        title: string
    }
}

const renderItem = ({ item }: { item: NewsItem }) => <News news={item} />;

function TypeNewsList({ route }: TypeNewsListProps) {
    const isAll = route.key === 'all';
    const { sharedScrollY, initTopbarHeight, allTypeListRef } = useContext(HomeScreenContext);
    const scrollHandler = useAnimatedScrollHandler((event) => {
        if (isAll) {
            sharedScrollY.value = event.contentOffset.y;
        }
    });
    const [loadingStatus, setLoadingStatus] = useState({ isRefreshing: false, isLoadingMore: false });
    const [newsData, setNewsData] = useState<NewsItem[]>([]);
    // 接口查询list数据源
    const getNewsData = async (type = 'loadmore') => {
        if (loadingStatus.isLoadingMore || loadingStatus.isRefreshing) return;
        setLoadingStatus({
            isRefreshing: type === 'init' ? true : false,
            isLoadingMore: type === 'loadmore' ? true : false,
        });
        const apiData: NewsItem[] = await apifunc() as NewsItem[];
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
    const BottomTabBarHeight = useBottomTabBarHeight();
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
                    paddingBottom: BottomTabBarHeight
                }}
                estimatedItemSize={110}
                keyExtractor={(item) => item.id}
                onScroll={scrollHandler}
                data={newsData}
                ListEmptyComponent={<EmptyComponent isShow={!loadingStatus.isLoadingMore && !loadingStatus.isRefreshing} />}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                ListHeaderComponent={<HomeHeaderActivity isAll={isAll} />}
                ListFooterComponent={<LoadMore isLoadingMore={loadingStatus.isLoadingMore} />}
                refreshControl={<RefreshControl refreshing={loadingStatus.isRefreshing} onRefresh={initRefresh} progressViewOffset={isAll ? initTopbarHeight : initTopbarHeight - 90}></RefreshControl>}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.8}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal: commonStyles.pageBorderGap
    }
});

export default TypeNewsList;