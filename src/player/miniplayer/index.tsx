import Slider from '@react-native-community/slider';
import React, { useEffect } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp, SlideInLeft, SlideInRight } from 'react-native-reanimated';
import TrackPlayer, { State, useProgress } from 'react-native-track-player';

import AppImages from '../../assets/images';
import colors from '../../utils/colors';
import GS from '../../utils/styles';
import styles from './styles';

const MiniPlayer = ({ songDetail, isPlaying, onPlayerClick }) => {
  const progress = useProgress();
  useEffect(() => {
    onPlayPausePress();
  }, []);
  const onPlayPausePress = async () => {
    const state = await TrackPlayer.getState();
    if (state === State.Playing) {
      TrackPlayer.pause();
    }
    if (state === State.Paused) {
      TrackPlayer.play();
    }
    if (state === State.Stopped) {
      TrackPlayer.play();
    }
  };
  const handleOnSliding = (time) => {
    TrackPlayer.seekTo(time);
  };
  return (
    <Animated.View entering={SlideInRight} exiting={SlideInLeft}>
      <Pressable style={styles.pContainer} onPress={onPlayerClick}>
        <View style={styles.vContainer}>
          <Image style={styles.iCover} source={{ uri: songDetail?.artwork }} />
          <View style={styles.vSongDetailContainer}>
            <Text style={[GS.text_white_medium, styles.tSongTitle]}>{songDetail?.title}</Text>
            <Text numberOfLines={1} style={[GS.text_white_regular, styles.tSongArtist]}>
              {songDetail?.artist}
            </Text>
          </View>
          <Pressable style={styles.pPlayPauseContainer} onPress={onPlayPausePress}>
            <Image
              style={styles.iPlayPause}
              source={isPlaying ? AppImages.ic_play_mini : AppImages.ic_pause_mini}
            />
          </Pressable>
        </View>
        <Slider
          onSlidingComplete={handleOnSliding}
          minimumValue={0}
          maximumValue={parseInt(songDetail?.duration)}
          minimumTrackTintColor={colors.white}
          maximumTrackTintColor={colors.white}
          thumbTintColor={colors.bluebackground}
          value={progress.position}
        />
      </Pressable>
    </Animated.View>
  );
};
export default MiniPlayer;
