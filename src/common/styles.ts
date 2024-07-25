import { Platform, StyleSheet } from 'react-native';

type CommonShadowParams = {
  shadowWidth?: number;
  shadowOpacity?: number;
  shadowRadius?: number;
  shadowColorForIos?: string;
  shadowColorForAndroid?: string;
};

const commonStyles = {
  pageBgColor: '#F6F8F9',
  white: '#FFFFFF',
  black: '#000000',
  black_333: '#333333',
  grey_text: '#8B8B8B',
  grey: '#cecece',
  grey_placeholder: '#a8a8a8',
  topBarFontSize: 18,
  pageBorderGap: 10,
  headerBgColor: '#F6F8F9',
  maskColor: 'rgba(0, 0, 0, 0.4)',
  transparentHeaderBg: {
    backgroundColor: Platform.OS === 'ios' ? 'transparent' : '#F6F8F9',
  },
};

const defaultShadowParam: CommonShadowParams = {
  shadowWidth: 10,
  shadowOpacity: 0.3,
  shadowRadius: 2,
  shadowColorForIos: '#cecece',
  shadowColorForAndroid: commonStyles.black,
};

const getCommonShadowStyle = (params?: CommonShadowParams) => {
  const shadowStyles: CommonShadowParams = { ...defaultShadowParam, ...params };
  const styles = StyleSheet.create({
    style: {
      ...Platform.select({
        ios: {
          shadowOffset: {
            width: 0,
            height: shadowStyles.shadowWidth,
          },
          shadowOpacity: shadowStyles.shadowOpacity,
          shadowRadius: shadowStyles.shadowRadius,
          shadowColor: shadowStyles.shadowColorForIos,
        },
        android: {
          shadowColor: shadowStyles.shadowColorForAndroid,
          elevation: shadowStyles.shadowWidth,
        },
      }),
    },
  });
  return styles.style;
};
export { commonStyles, getCommonShadowStyle };
