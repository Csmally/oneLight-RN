import { forwardRef } from 'react';
import { TouchableOpacity } from 'react-native';
import FastImage, {
  FastImageProps,
  FastImageStaticProperties,
} from 'react-native-fast-image';

type OlFastImageProps = FastImageProps & { onPress?: () => void };

const OlFastImage = forwardRef<
  React.ComponentType<FastImageProps> &
    FastImageStaticProperties &
    TouchableOpacity,
  OlFastImageProps
>(({ onPress, style, ...otherProps }, ref) => {
  return onPress ? (
    <TouchableOpacity
      onPress={onPress}
      ref={ref}
      style={[style, { overflow: 'hidden' }]}>
      <FastImage {...otherProps} style={{ flex: 1 }} />
    </TouchableOpacity>
  ) : (
    // @ts-ignore
    <FastImage ref={ref} {...otherProps} style={style} />
  );
});

export default OlFastImage;
