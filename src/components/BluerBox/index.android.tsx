import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

function BlurBox() {
  return <View style={styles.blur}></View>;
}

const styles = StyleSheet.create({
  blur: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(240, 242, 243, 0.98)',
  },
});

export default memo(BlurBox);
