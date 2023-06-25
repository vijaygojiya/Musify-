import {
  Animated,
  Image,
  ImageStyle,
  Pressable,
  StyleProp,
  Text,
} from 'react-native';
import React, {FC, memo, useCallback, useMemo, useRef} from 'react';
import {getImageUrl} from '../../../../utils/helpers';
import {styles} from './styles';
import styleConfig from '../../../../utils/styleConfig';
import GS from '../../../../utils/styles';
import {getSubTitle} from '../../../../utils/helper';
import TrackPlayer from 'react-native-track-player';
export type mediaType =
  | 'charts'
  | 'radio_station'
  | 'playlist'
  | 'song'
  | 'mix'
  | 'show'
  | 'album';

interface Props {
  image: string;
  title: string;
  type: mediaType;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const PlayListItem: FC<Props> = item => {
  const {image, type, title} = item;

  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const handlePressIn = useCallback(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 0.95,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0.5,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handlePressOut = useCallback(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const itemClickHandler = useCallback(() => {
    if (type === 'song') {
      TrackPlayer.reset();
      TrackPlayer.add([{...item, artwork: image}]);
      TrackPlayer.play();
    }
  }, []);

  const songItemContainerStyle: StyleProp<ImageStyle> = useMemo(() => {
    if (type === 'song') {
      return {
        borderRadius: styleConfig.countPixelRatio(100),
      };
    }
    return {};
  }, [type]);

  const subTitle: string = useMemo(() => {
    return getSubTitle(item);
  }, [item]);

  const imageUrl = useMemo(() => {
    return getImageUrl(image);
  }, [image]);

  return (
    <AnimatedPressable
      onPressIn={handlePressIn}
      onPress={itemClickHandler}
      onPressOut={handlePressOut}
      style={[
        styles.itemContainer,
        {
          transform: [{scale}],
          opacity,
        },
      ]}>
      <Image
        source={{uri: imageUrl}}
        style={[styles.artwrokImage, songItemContainerStyle]}
        resizeMode="contain"
      />
      <Text numberOfLines={1} style={[GS.text_white_medium, styles.titleText]}>
        {title}
      </Text>
      <Text
        numberOfLines={1}
        style={[GS.text_white_regular, styles.subTitleText]}>
        {subTitle}
      </Text>
    </AnimatedPressable>
  );
};

export default memo(PlayListItem);
