import { commonStyles } from '@/common/styles';
import { useHeaderHeight } from '@react-navigation/elements';
import { StyleSheet, View, ViewProps } from 'react-native';

function RootView(props: ViewProps) {
  const headerHeight = useHeaderHeight();
  return (
    <View {...props} style={[{ paddingTop: headerHeight }, styles.defaultStyle, props.style]} />
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    flex: 1,
    backgroundColor: commonStyles.pageBgColor,
  },
});
export default RootView;
