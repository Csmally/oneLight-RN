import { commonStyles } from '@/common/styles';
import OlText from '@/components/OneLightText';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

function FeedBackBar() {
  return (
    <View style={styles.container}>
      <View style={[styles.singleTag, styles.tagBg1]}>
        <View style={styles.tagContent}>
          <OlText style={styles.tagTitle}>加入我们</OlText>
          <OlText style={styles.tagDesc}>加入团队</OlText>
        </View>
        <FastImage style={styles.icon} source={require('@/common/static/joinus.png')} />
      </View>
      <View style={styles.spaceBox} />
      <View style={[styles.singleTag, styles.tagBg2]}>
        <View style={styles.tagContent}>
          <OlText style={styles.tagTitle}>调查问卷</OlText>
          <OlText style={styles.tagDesc}>问答有礼</OlText>
        </View>
        <FastImage style={styles.icon} source={require('@/common/static/qa.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: commonStyles.pageBorderGap,
    marginHorizontal: commonStyles.pageBorderGap,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spaceBox: {
    flex: 0.1,
  },
  singleTag: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: commonStyles.pageBorderGap,
    padding: 15,
    alignItems: 'center',
  },
  tagBg1: {
    backgroundColor: '#E8FFFA',
  },
  tagBg2: {
    backgroundColor: '#EBECFE',
  },
  tagContent: {
    flex: 1,
  },
  tagTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: commonStyles.pageBorderGap,
    letterSpacing: 1,
  },
  tagDesc: {
    color: commonStyles.grey_text,
  },
  icon: {
    width: 35,
    aspectRatio: 1,
  },
});

export default FeedBackBar;
