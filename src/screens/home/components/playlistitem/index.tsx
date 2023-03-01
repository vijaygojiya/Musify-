import { Animated, Image, ImageStyle, Pressable, StyleProp } from 'react-native';
import React, { FC, memo, useMemo, useRef } from 'react';
import { getImageUrl } from '../../../../utils/helpers';
import { styles } from './styles';
import colors from '../../../../utils/colors';
import styleConfig from '../../../../utils/styleConfig';
export type mediaType = 'charts' | 'radio_station' | 'playlist' | 'song' | 'mix' | 'show' | 'album';

interface Props {
  image: string;
  type: mediaType;
  handlerItemClick: () => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const PlayListItem: FC<Props> = ({ image, type, handlerItemClick }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
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
  };

  const handlePressOut = () => {
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
  };

  const songItemContainerStyle: StyleProp<ImageStyle> = useMemo(() => {
    if (type === 'song') {
      return {
        borderRadius: styleConfig.countPixelRatio(75),
      };
    }
    return {};
  }, [type]);
  return (
    <AnimatedPressable
      onPressIn={handlePressIn}
      onPress={handlerItemClick}
      onPressOut={handlePressOut}
      style={[
        styles.itemContainer,
        {
          transform: [{ scale }],
          opacity,
        },
      ]}
    >
      <Image
        source={{ uri: getImageUrl(image) }}
        style={[styles.artwrokImage, songItemContainerStyle]}
        resizeMode="contain"
      />
    </AnimatedPressable>
  );
};

export default memo(PlayListItem);
