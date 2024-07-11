import { BlurView } from '@react-native-community/blur';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

function BlurBox() {
  return (
    <View style={styles.container}>
      <BlurView style={styles.blur} blurType="xlight" blurAmount={50} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default memo(BlurBox);
