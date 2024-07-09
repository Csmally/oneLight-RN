import { commonStyles } from '@/common/styles';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tabs = [
  {
    icon: 'people-outline',
    title: '个人资料',
  },
  {
    icon: 'location-outline',
    title: '常用地址',
  },
  {
    icon: 'card-outline',
    title: '我的资产',
  },
  {
    icon: 'heart-outline',
    title: '我的收藏',
  },
  {
    icon: 'heart-circle-outline',
    title: '我的圈子',
  },
  {
    icon: 'people-outline',
    title: '客服帮助',
  },
];

function ToolsBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>常用工具</Text>
      {Tabs.map((item, index) => (
        <View style={styles.item} key={index}>
          <View style={styles.label}>
            <Icon name={item.icon} size={20} color='black' style={styles.labelicon} />
            <Text style={styles.labeltext}>{item.title}</Text>
          </View>
          <Icon name='chevron-forward-outline' size={18} color={commonStyles.grey_placeholder} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: commonStyles.pageBorderGap,
    borderRadius: commonStyles.pageBorderGap,
    backgroundColor: commonStyles.white,
    marginTop: commonStyles.pageBorderGap,
    marginHorizontal: commonStyles.pageBorderGap,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelicon: {
    marginRight: 10,
  },
  labeltext: {
    fontWeight: '500',
  },
});

export default ToolsBar;
