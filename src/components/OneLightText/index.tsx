import { commonStyles } from '@/common/styles';
import { StyleSheet, Text, TextProps } from 'react-native';

function OlText(props: TextProps) {
  return <Text {...props} style={[styles.defaultStyle, props.style]} />;
}

const styles = StyleSheet.create({
  defaultStyle: {
    color: commonStyles.black,
    fontFamily: 'System',
    fontSize: 14,
  },
});

export default OlText;
