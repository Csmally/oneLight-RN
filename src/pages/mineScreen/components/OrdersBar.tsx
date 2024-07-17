import { commonStyles, getCommonShadowStyle } from '@/common/styles';
import OlFastImage from '@/components/OlFastImage';
import { mineTabs } from 'mockData';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function OrdersBar() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.titleLabel}>我的订单</Text>
        <View style={styles.titleBar}>
          <Text style={styles.titleInfo}>全部订单</Text>
          <Icon
            name="chevron-forward-outline"
            size={12}
            color={commonStyles.grey_text}
          />
        </View>
      </View>
      <View style={styles.toolsBar}>
        {mineTabs.map((item, index) => (
          <View style={styles.item} key={index}>
            <OlFastImage
              source={{ uri: item.icon }}
              resizeMode="cover"
              style={styles.img}
            />
            <Text style={styles.toolDesc}>{item.desc}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: commonStyles.pageBorderGap,
    padding: commonStyles.pageBorderGap,
    backgroundColor: commonStyles.white,
    borderRadius: commonStyles.pageBorderGap,
    marginHorizontal: commonStyles.pageBorderGap,
    ...getCommonShadowStyle({
      shadowWidth: 5,
      shadowColorForIos: 'rgba(0, 0, 0, 0.05)',
      shadowColorForAndroid: 'rgba(0, 0, 0, 0.05)',
    }),
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleLabel: {
    fontSize: 16,
    fontWeight: '700',
  },
  titleInfo: {
    fontSize: 11,
    fontWeight: '400',
    color: commonStyles.grey_text,
    marginRight: 5,
  },
  toolsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  item: {
    alignItems: 'center',
  },
  img: {
    width: 20,
    aspectRatio: 1,
    marginBottom: 10,
  },
  toolDesc: {
    fontSize: 12,
    fontWeight: '400',
    color: commonStyles.grey_text,
  },
});

export default OrdersBar;
