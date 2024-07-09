import { TouchableOpacity, View, Text } from 'react-native';
import https from '@/utils/https';
import React from 'react';
import RootView from '@/components/RootView';
import { useScreenNavigation } from '@/utils/hooks';

function MarketScreen() {
  const tt1 = async () => {
    const res = await https.get('/test/a?value=2');
    Toast.show(res.data.message);
  };
  const tt2 = async () => {
    const res = await https.get('/test/a?value=3');
    Toast.show(res.data.message);
  };
  const navigation = useScreenNavigation();
  const tt3 = () => {
    console.log('9898跳转');
    navigation.navigate('Test');
  };
  return (
    <RootView>
      <TouchableOpacity onPress={tt1}>
        <View style={{ width: 100, height: 100, backgroundColor: 'green' }}>
          <Text>接口测试1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={tt2}>
        <View style={{ width: 100, height: 100, backgroundColor: 'yellow' }}>
          <Text>接口测试2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={tt3}>
        <View style={{ width: 100, height: 100, backgroundColor: 'yellow' }}>
          <Text>跳转</Text>
        </View>
      </TouchableOpacity>
    </RootView>
  );
}

export default MarketScreen;
