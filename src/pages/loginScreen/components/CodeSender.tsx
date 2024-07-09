import { memo, useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, ActivityIndicator, TouchableWithoutFeedback, View, Text } from 'react-native';
import { commonStyles } from '@/common/styles';
import { apiGetMsgCode } from '@/services/login';

type CodeSenderProps = {
  mobile: string;
};

function CodeSender({ mobile }: CodeSenderProps) {
  const [status, setStatus] = useState(true);
  const [second, setSecond] = useState(60);
  const secondRef = useRef(60);
  const timerRef = useRef<any>(null);
  const reGetCode = () => {
    if (!status) {
      Toast.show('操作过于频繁');
    }
  };
  const sendCode = async () => {
    setStatus(false);
    interval(() => {
      setSecond(second => second - 1);
    }, 1000);
    const res = await apiGetMsgCode(mobile);
    if (res.success) {
      Toast.show(res.data.message);
    }
  };
  const interval = (fn: () => void, time: number) => {
    if (secondRef.current === 0) {
      setStatus(true);
      setSecond(60);
      clearTimeout(timerRef.current);
      return;
    }
    timerRef.current = setTimeout(() => {
      fn();
      interval(fn, time);
    }, time);
  };

  useEffect(() => {
    secondRef.current = second;
  });
  return status ? (
    <TouchableWithoutFeedback onPress={sendCode}>
      <View style={styles.container}>
        <Text style={styles.strText}>获取验证码</Text>
        <Icon name='paper-plane' size={18} />
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback onPress={reGetCode}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.disabledText}>重新获取</Text>
        </View>
        <View style={styles.secondBox}>
          <Text style={styles.disabledText}>({second}秒)</Text>
        </View>
        <ActivityIndicator />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  strText: {
    fontSize: 18,
    marginRight: 6,
  },
  disabledText: {
    fontSize: 18,
    color: commonStyles.grey_placeholder,
  },
  secondBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
  },
  clearIcon: {
    marginRight: 20,
  },
});

export default memo(CodeSender);
