import { StyleSheet, View } from 'react-native';

function BlurBox() {
  return <View style={styles.blur}></View>;
}

const styles = StyleSheet.create({
  blur: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'rgba(240, 242, 243, 0.98)',
  },
});

export default BlurBox;
