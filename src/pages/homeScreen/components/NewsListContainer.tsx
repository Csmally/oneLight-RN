import TypeNewsList from "./TypeNewsList";
import { forwardRef, useContext, useImperativeHandle, useState } from "react";
import { TabView, SceneMap } from 'react-native-tab-view';
import { HomeScreenContext } from "../utils/context";
import { Dimensions } from "react-native";

const tabs = [
    {
        title: '全部',
        key: 'all'
    },
    {
        title: '美食',
        key: 'food'
    },
    {
        title: '快递',
        key: 'express'
    },
    {
        title: 'Replace',
        key: 'replace'
    },
    {
        title: '兼职',
        key: 'job'
    },
];


const NewsListContainer = forwardRef((props, ref) => {
    const renderScene = SceneMap({
        all: TypeNewsList,
        food: TypeNewsList,
        express: TypeNewsList,
        replace: TypeNewsList,
        job: TypeNewsList,
    });
    const { categoryBarRef } = useContext(HomeScreenContext);
    const [activeIndex, setActiveIndex] = useState(0);
    useImperativeHandle(ref, () => ({
        setActiveIndex
    }));
    const handleScroll = (index: number) => {
        categoryBarRef?.current?.changeActiveTab?.(index);
    };
    return (
        <TabView
            lazy={true}
            navigationState={{ index: activeIndex, routes: tabs }}
            renderScene={renderScene}
            onIndexChange={handleScroll}
            initialLayout={{ width: Dimensions.get('window').width }}
            renderTabBar={() => null}
        />
    );
});

NewsListContainer.displayName = 'NewsListContainer';

export default NewsListContainer;