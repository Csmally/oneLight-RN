import { commonStyles } from '@/common/styles';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function BusinessInfoBar() {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#2a2a2a', '#080808', '#000000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.2, 0.7, 1]}>
      <View style={styles.item}>
        <Text style={styles.num}>8</Text>
        <Text style={styles.desc}>优惠券</Text>
      </View>
      <View style={[styles.item, styles.itemBorder]}>
        <Text style={styles.num}>258</Text>
        <Text style={styles.desc}>积分</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.num}>56</Text>
        <Text style={styles.desc}>余额</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 15,
    marginTop: commonStyles.pageBorderGap,
    marginHorizontal: commonStyles.pageBorderGap,
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  itemBorder: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#2D2D2D',
  },
  num: {
    color: commonStyles.white,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 5,
  },
  desc: {
    color: '#D4D4D4',
    fontWeight: '400',
  },
});

export default BusinessInfoBar;
