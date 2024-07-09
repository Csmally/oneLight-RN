import { PATH } from '@/common/consts';
import { commonStyles } from '@/common/styles';
import { useScreenNavigation } from '@/utils/hooks';
import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';

type AddTypeItemProps = {
  typeInfo: {
    bgColor: string;
    title: string;
    desc: string;
    descImg: string;
    id: string;
  };
};

function AddTypeItem({ typeInfo }: AddTypeItemProps) {
  const navigation = useScreenNavigation();
  const { bgColor = 'pink', title = '标题', desc = '描述内容', descImg = '' } = typeInfo;
  const goPublish = () => {
    navigation.navigate(PATH.PUBLISH_SCREEN);
  };
  return (
    <TouchableWithoutFeedback onPress={goPublish}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <FastImage source={{ uri: descImg }} style={styles.descImg} />
        <View style={styles.mainInfo}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.desc} numberOfLines={1}>
            {desc}
          </Text>
        </View>
        <Icon
          name='chevron-forward-outline'
          size={20}
          style={styles.rightIcon}
          color={commonStyles.grey_text}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: commonStyles.pageBorderGap,
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  descImg: {
    width: 50,
    aspectRatio: 1,
  },
  mainInfo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: commonStyles.pageBorderGap,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  desc: {
    color: commonStyles.grey_text,
  },
  rightIcon: {
    alignSelf: 'center',
  },
});

export default AddTypeItem;
