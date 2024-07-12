import { commonStyles } from '@/common/styles';
import OlFastImage from '@/components/OlFastImage';
import { StyleSheet, View, Text } from 'react-native';
import { IP } from '@/mock/hostConfig';

function FeedBackBar() {
  return (
    <View style={styles.container}>
      <View style={[styles.singleTag, styles.tagBg1]}>
        <View style={styles.tagContent}>
          <Text style={[styles.tagTitle, styles.titleColor1]}>加入我们</Text>
          <Text style={styles.tagDesc}>加入团队</Text>
        </View>
        <OlFastImage
          style={styles.icon}
          source={{
            uri: `http://${IP}:7002/public/appAssets/icons/joinus.png`,
          }}
        />
      </View>
      <View style={[styles.singleTag, styles.tagBg2]}>
        <View style={styles.tagContent}>
          <Text style={[styles.tagTitle, styles.titleColor2]}>调查问卷</Text>
          <Text style={styles.tagDesc}>问答有礼</Text>
        </View>
        <OlFastImage
          style={styles.icon}
          source={{ uri: `http://${IP}:7002/public/appAssets/icons/qa.png` }}
        />
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
    gap: 20,
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
  titleColor1: {
    color: '#4cdba2',
  },
  titleColor2: {
    color: '#4420A2',
  },
  tagDesc: {
    fontWeight: '500',
    color: commonStyles.grey_placeholder,
  },
  icon: {
    width: 35,
    aspectRatio: 1,
  },
});

export default FeedBackBar;
