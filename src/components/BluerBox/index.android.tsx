import { commonStyles } from '@/common/styles';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

function BlurBox() {
  return <View style={styles.blur} />;
}

const styles = StyleSheet.create({
  blur: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: commonStyles.pageBgColor,
  },
});

export default memo(BlurBox);
