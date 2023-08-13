import {
  StyleSheet,
  Pressable,
  Image,
  ViewStyle,
  ImageStyle,
  ImageSourcePropType,
  PressableProps,
} from 'react-native';
import React, {FC, memo} from 'react';
import {Colors} from '../../theme/Variables';

interface IconButtonProps {
  containerProps?: PressableProps;
  iconSource: ImageSourcePropType;
  onIconClick: () => void;
  containerStyle?: ViewStyle;
  iconStyle?: ImageStyle;
}

const IconButton: FC<IconButtonProps> = props => {
  const {iconSource, onIconClick, containerStyle, iconStyle, containerProps} =
    props;
  return (
    <Pressable
      {...containerProps}
      hitSlop={5}
      style={[styles.iconContainerStyle, containerStyle]}
      onPress={onIconClick}>
      <Image style={[styles.iconStyle, iconStyle]} source={iconSource} />
    </Pressable>
  );
};

export default memo(IconButton);

const styles = StyleSheet.create({
  iconStyle: {
    height: 25,
    width: 25,
    tintColor: Colors.white,
  },
  iconContainerStyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
