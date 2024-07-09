import { BlurView } from '@react-native-community/blur';
import { memo } from 'react';
import { StyleSheet } from 'react-native';

function BlurBox() {
  return <BlurView style={styles.blur} blurType='xlight' blurAmount={50} />;
}

const styles = StyleSheet.create({
  blur: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default memo(BlurBox);
