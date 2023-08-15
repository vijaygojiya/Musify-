import {Text} from 'react-native';
import React, {FC, memo, useCallback, useMemo} from 'react';
import {styles} from './styles';
import {getSubTitle} from '../../utils/helper';
import {getImageUrl} from '../../utils/helpers';
import FastImage from 'react-native-fast-image';
import {PlayListItemType} from '../../redux/dashboard/dashboardSlice';
import TrackPlayer from 'react-native-track-player';
import AnimatedPressable from '../AnimatedPressable';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Fonts, Images} from '../../theme';

const PlayListItem: FC<PlayListItemType> = item => {
  const {image, type, title} = item;

  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const handlePressIn = useCallback(() => {
    scale.value = withSpring(0.95);
    opacity.value = withTiming(0.5, {duration: 100});
  }, [opacity, scale]);

  const handlePressOut = useCallback(() => {
    scale.value = withSpring(1);
    opacity.value = withTiming(1, {duration: 100});
  }, [opacity, scale]);

  const itemClickHandler = useCallback(() => {
    if (type === 'song') {
      TrackPlayer.add([
        {
          artwork: image,
          url: item.url,
          title: item.title,
          artist: item.artist,
        },
      ]);
      TrackPlayer.play();
    }
  }, [type]);

  const subTitle: string = useMemo(() => {
    return getSubTitle(item);
  }, [item]);

  const imageUrl = useMemo(() => {
    return getImageUrl(image);
  }, [image]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
      opacity: opacity.value,
    };
  });

  const imageStyle = useMemo(() => {
    return {borderRadius: type === 'song' ? 100 : 0};
  }, [type]);

  return (
    <AnimatedPressable
      onPressIn={handlePressIn}
      onPress={itemClickHandler}
      onPressOut={handlePressOut}
      style={[styles.itemContainer, animatedStyle]}>
      <FastImage
        source={{uri: imageUrl}}
        style={[styles.artwrokImage, imageStyle]}
        resizeMode="contain"
        defaultSource={Images.music}
      />
      <Text numberOfLines={1} style={[styles.titleText, Fonts.textFontMedium]}>
        {title}
      </Text>
      <Text
        numberOfLines={1}
        style={[styles.subTitleText, Fonts.textFontRegular]}>
        {subTitle}
      </Text>
    </AnimatedPressable>
  );
};

export default memo(PlayListItem);
