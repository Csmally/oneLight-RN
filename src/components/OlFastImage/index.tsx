import { forwardRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';

type OlFastImageProps = FastImageProps & { onPress?: () => void };

const OlFastImage = forwardRef<OlFastImageProps, any>(
  ({ onPress, ...otherProps }, ref) => {
    return onPress ? (
      <TouchableWithoutFeedback onPress={onPress}>
        <>
          <FastImage {...otherProps} ref={ref} />
        </>
      </TouchableWithoutFeedback>
    ) : (
      <FastImage ref={ref} {...otherProps} />
    );
  },
);

export default OlFastImage;
