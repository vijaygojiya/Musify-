import {
  StyleSheet,
  Pressable,
  Image,
  ViewStyle,
  ImageStyle,
  ImageSourcePropType,
  PressableProps,
} from 'react-native';
import React, { FC, memo } from 'react';
import colors from '../../../utils/colors';
import styleConfig from '../../../utils/styleConfig';

const PressableIcon: FC<{
  containerProps?: PressableProps;
  iconSource: ImageSourcePropType;
  onIconClick: () => void;
  containerStyle?: ViewStyle;
  iconStyle?: ImageStyle;
}> = (props) => {
  const { iconSource, onIconClick, containerStyle, iconStyle, containerProps } = props;
  console.log('reodnasdasdfasd>>>>>');

  return (
    <Pressable
      {...containerProps}
      hitSlop={5}
      style={[styles.iconContainerStyle, containerStyle]}
      onPress={onIconClick}
    >
      <Image style={[styles.iconStyle, iconStyle]} source={iconSource} />
    </Pressable>
  );
};

export default memo(PressableIcon);

const styles = StyleSheet.create({
  iconStyle: {
    height: styleConfig.countPixelRatio(25),
    width: styleConfig.countPixelRatio(25),
    tintColor: colors.white,
  },
  iconContainerStyle: {
    paddingVertical: styleConfig.smartScale(10),
    paddingHorizontal: styleConfig.smartWidthScale(10),
  },
});
