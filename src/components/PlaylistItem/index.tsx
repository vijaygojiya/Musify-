import {Animated, Pressable, Text} from 'react-native';
import React, {FC, memo, useCallback, useMemo, useRef} from 'react';
import {styles} from './styles';
import {getSubTitle} from '../../utils/helper';
import {getImageUrl} from '../../utils/helpers';
import FastImage from 'react-native-fast-image';
import {PlayListItemType} from '../../redux/dashboard/dashboardSlice';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const PlayListItem: FC<PlayListItemType> = item => {
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
  }, [opacity, scale]);

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
  }, [opacity, scale]);

  const itemClickHandler = useCallback(() => {
    // if (type === 'song') {
    //   TrackPlayer.reset();
    //   TrackPlayer.add([{...item, artwork: image}]);
    //   TrackPlayer.play();
    // }
  }, []);

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
      <FastImage
        source={{uri: imageUrl}}
        // eslint-disable-next-line react-native/no-inline-styles
        style={[styles.artwrokImage, {borderRadius: type === 'song' ? 100 : 0}]}
        resizeMode="contain"
      />
      <Text numberOfLines={1} style={[styles.titleText]}>
        {title}
      </Text>
      <Text numberOfLines={1} style={[styles.subTitleText]}>
        {subTitle}
      </Text>
    </AnimatedPressable>
  );
};

export default memo(PlayListItem);
