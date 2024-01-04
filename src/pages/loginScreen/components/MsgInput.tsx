import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { TextField } from 'react-native-ui-lib';
import CodeSender from './CodeSender';
import { StyleSheet } from 'react-native';
import { commonStyles } from '@/common/styles';
import { memo } from 'react';

type MsgInputProps = {
  msgCode: string;
  // eslint-disable-next-line no-unused-vars
  setMsgCode: (msg: string) => void;
  mobile: string;
};

function MsgInput({ msgCode, setMsgCode, mobile }: MsgInputProps) {
  return (
    <Animated.View entering={FadeIn.duration(300)} exiting={FadeOut.duration(300)}>
      <TextField
        value={msgCode}
        style={styles.textInput}
        containerStyle={[styles.textContainer, styles.viewMargin]}
        floatingPlaceholderStyle={styles.placeholder}
        placeholder={'密码'}
        floatingPlaceholder
        onChangeText={setMsgCode}
        trailingAccessory={<CodeSender mobile={mobile} />}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    maxWidth: 150,
  },
  textContainer: {
    paddingBottom: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: commonStyles.grey_placeholder,
  },
  viewMargin: {
    marginBottom: 30,
  },
  placeholder: {
    fontSize: 18,
  },
});

export default memo(MsgInput);
