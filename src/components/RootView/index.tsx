import { commonStyles } from '@/common/styles';
import { StyleSheet, View, ViewProps } from 'react-native';

function RootView(props: ViewProps) {
  return <View {...props} style={[styles.defaultStyle, props.style]} />;
}

const styles = StyleSheet.create({
  defaultStyle: {
    flex: 1,
    backgroundColor: commonStyles.pageBgColor,
  },
});
export default RootView;
