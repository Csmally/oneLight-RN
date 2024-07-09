import { StyleSheet, View } from 'react-native';
import PageCounter from './components/PageCounter';
import { useState, useEffect } from 'react';
import OpacitySwiper from './components/OpacitySwiper';
import SloganTab from './components/SloganTab';
import RootView from '@/components/RootView';
import BlurBox from '@/components/BluerBox';

const imgUrls = [
  'https://tuchuangs.com/imgs/2023/04/23/945f7dee14fb39f4.jpeg',
  'https://tuchuangs.com/imgs/2023/04/23/d12921d23883b1d7.jpeg',
  'https://tuchuangs.com/imgs/2023/04/23/1bc98cb602be8e78.jpeg',
];
function WelcomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeIndex === imgUrls.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [activeIndex]);
  return (
    <RootView>
      <OpacitySwiper activeIndex={activeIndex} imgUrls={imgUrls} />
      <View style={styles.container}>
        <BlurBox />
        <PageCounter total={imgUrls.length} activeIndex={activeIndex} />
        <SloganTab />
      </View>
    </RootView>
  );
}

const styles = StyleSheet.create({
  swiperImg: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: '60%',
  },
});

export default WelcomeScreen;
