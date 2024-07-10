import OlFastImage from '@/components/OlFastImage';
import { View, StyleSheet, Text } from 'react-native';

type NewsProps = {
  news: NewsItem;
};

function PublisherInfo({ news }: NewsProps) {
  return (
    <View style={styles.container}>
      <OlFastImage
        source={{ uri: news.avatar }}
        style={styles.avatar}
        resizeMode="cover"
      />
      <Text style={styles.publisherName}>{news.publisherName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  publisherName: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
});

export default PublisherInfo;
