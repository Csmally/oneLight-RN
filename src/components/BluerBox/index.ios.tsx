import { BlurView } from '@react-native-community/blur';
import { StyleSheet } from 'react-native';

function BlurBox() {
  return <BlurView style={styles.blur} blurType='xlight' blurAmount={50} />;
}

const styles = StyleSheet.create({
  blur: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
});

export default BlurBox;
