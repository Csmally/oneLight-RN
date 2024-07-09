import { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

function Slogan() {
  return (
    <>
      <FastImage style={[styles.viewMargin, styles.logo]} source={require('@/static/icons/appLogo.png')} />
      <Text style={[styles.title, styles.viewMargin]}>
        嗨<Text style={styles.appName}>, oneLight</Text>
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  viewMargin: {
    marginBottom: 30,
  },
  logo: {
    width: 65,
    height: 65,
  },
  title: {
    fontSize: 38,
    fontWeight: '500',
    textAlign: 'center',
  },
  appName: {
    fontSize: 25,
    fontWeight: '400',
  },
});

export default memo(Slogan);
