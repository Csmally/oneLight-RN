import BlurBox from '@/components/BluerBox/index';
import AddNewsScreen from '@/pages/addNewsScreen';
import { memo, useState } from 'react';
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import FastImage from 'react-native-fast-image';

type PublishToolProps = {
  navigation: any;
};
function PublishTool({ navigation }: PublishToolProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  return (
    <>
      <Modal
        animationType='fade'
        hardwareAccelerated
        visible={modalVisible}
        transparent
        statusBarTranslucent>
        <AddNewsScreen setModalVisible={setModalVisible} navigation={navigation} />
      </Modal>
      <TouchableWithoutFeedback onPress={openModal}>
        <View style={styles.container}>
          <View style={styles.tool}>
            <View style={styles.blurContainer}>
              <BlurBox />
            </View>
            <FastImage source={require('../static/publish.png')} style={styles.submitBtn} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
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
