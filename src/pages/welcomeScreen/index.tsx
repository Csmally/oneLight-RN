import { StyleSheet, View } from 'react-native';
import PageCounter from './components/PageCounter';
import { useState, useEffect } from 'react';
import OpacitySwiper from './components/OpacitySwiper';
import SloganTab from './components/SloganTab';
import RootView from '@/components/RootView';
import BlurBox from '@/components/BluerBox';

const imgUrls = [
  'https://ice.frostsky.com/2024/07/11/d6c223fbdbdd6389e6fed43678b58e38.jpeg',
  'https://ice.frostsky.com/2024/07/11/e540200219e55fd05efcf5a5d377ed82.jpeg',
  'https://ice.frostsky.com/2024/07/11/40dc0f4b7303ff272fa4b7f42b532874.jpeg',
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
