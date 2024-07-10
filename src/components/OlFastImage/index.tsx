import { forwardRef } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';

type OlFastImageProps = FastImageProps & { onPress?: () => void };

const OlFastImage = forwardRef<OlFastImageProps, any>(
  ({ onPress, ...otherProps }, ref) => {
    return onPress ? (
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <FastImage ref={ref} {...otherProps} />
        </View>
      </TouchableWithoutFeedback>
    ) : (
      <FastImage ref={ref} {...otherProps} />
    );
  },
);

export default OlFastImage;
