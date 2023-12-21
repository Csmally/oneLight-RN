import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function useScreenNavigation() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return navigation;
}

export { useScreenNavigation };
