import { StyleSheet, View } from 'react-native';
import PageCounter from './components/PageCounter';
import { useState, useEffect } from 'react';
import OpacitySwiper from './components/OpacitySwiper';
import SloganTab from './components/SloganTab';
import RootView from '@/components/RootView';
import BlurBox from '@/components/BluerBox';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Storage from '@/storage';
import { STORAGE_KEYS } from '@/interfaces/commonEnum';
import { IP } from '@/mock/hostConfig';

const imgUrls = [
  `http://${IP}:7002/public/imgs/big/1.jpg`,
  `http://${IP}:7002/public/imgs/big/2.jpg`,
  `http://${IP}:7002/public/imgs/big/9.jpg`,
];
function WelcomeScreen() {
  const { bottom } = useSafeAreaInsets();
  Storage.set(STORAGE_KEYS.BOTTOM_SAFEAREA, bottom);
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
        <SloganTab bottomSafeArea={bottom} />
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
