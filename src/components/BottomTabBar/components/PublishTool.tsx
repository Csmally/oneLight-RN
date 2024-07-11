import { PATH } from '@/interfaces/commonEnum';
import BlurBox from '@/components/BluerBox';
import OlFastImage from '@/components/OlFastImage';
import { useScreenNavigation } from '@/utils/hooks';
import { memo } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

function PublishTool() {
  const navigation = useScreenNavigation();
  const openModal = () => {
    navigation.navigate(PATH.NEWS_TYPE_CHOOSE_SCREEN);
  };
  return (
    <TouchableWithoutFeedback onPress={openModal}>
      <View style={styles.container}>
        <View style={styles.tool}>
          <View style={styles.blurContainer}>
            <BlurBox />
          </View>
          <OlFastImage
            source={require('../static/publish.png')}
            style={styles.submitBtn}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  tool: {
    position: 'absolute',
    top: -25,
    width: 70,
    aspectRatio: 1,
    borderRadius: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  blurContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 15,
  },
  submitBtn: {
    width: 55,
    aspectRatio: 1,
  },
});

export default memo(PublishTool);
