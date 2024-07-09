import { commonStyles } from '@/common/styles';
import { memo } from 'react';
import { StyleSheet } from 'react-native';
import { TextField } from 'react-native-ui-lib';

type MobileInputProps = {
  mobile: string;
  isShowPassCode: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsShowPassCode: (flag: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  setMobile: (mobile: string) => void;
  // eslint-disable-next-line no-unused-vars
  setMsgCode: (msg: string) => void;
};

function MobileInput({
  mobile,
  setMobile,
  isShowPassCode,
  setIsShowPassCode,
  setMsgCode,
}: MobileInputProps) {
  const validateMobileNum = (val: string) => {
    const reg = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
    const isMobileNum = reg.test(val);
    if (isShowPassCode !== isMobileNum) {
      if (!isMobileNum) {
        setMsgCode('');
      }
      setIsShowPassCode(isMobileNum);
    }
    return reg.test(val);
  };
  return (
    <TextField
      value={mobile}
      style={styles.textInput}
      containerStyle={[styles.textContainer, styles.viewMargin]}
      floatingPlaceholderStyle={styles.placeholder}
      maxLength={11}
      keyboardType='phone-pad'
      placeholder={'输入手机号（新号码自动注册）'}
      floatingPlaceholder
      validate={validateMobileNum}
      validateOnChange
      onChangeText={setMobile}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
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

export default memo(MobileInput);
