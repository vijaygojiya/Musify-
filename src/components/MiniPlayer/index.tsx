import React, {memo} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import TrackPlayer, {
  State,
  useActiveTrack,
  usePlaybackState,
  usePlayWhenReady,
  useProgress,
} from 'react-native-track-player';

import colors from '../../utils/colors';

import styles from './styles';
import MarqueeText from '../MarqueeText';
import IconButton from '../IconButton';
import {Images} from '../../theme';
import ProgressBar from '../ProgressBar';
import {useDebouncedValue} from '../../hooks';
import {screenWidth} from '../../theme/Variables';
import FastImage from 'react-native-fast-image';

const MiniPlayer = () => {
  const track = useActiveTrack();

  if (!track) {
    return null;
  }

  const {title, artist, artwork} = track;

  return (
    <View style={[styles.container]}>
      <View style={styles.infoRowContainer}>
        <FastImage
          source={{uri: artwork}}
          style={styles.artworkImage}
          resizeMode="contain"
        />
        <View style={styles.songDetailContainer}>
          <MarqueeText
            style={[styles.titleTextStyle]}
            speed={1}
            marqueeOnStart={true}
            loop={true}
            delay={1000}>
            {title}
          </MarqueeText>
          <Text numberOfLines={1} style={[styles.songArtist]}>
            {artist}
          </Text>
        </View>
        <PlayPauseUi />
      </View>
      <ProgressUi />
    </View>
  );
};
export default memo(MiniPlayer);

const PlayPauseUi = memo(() => {
  const {state} = usePlaybackState();
  const playWhenReady = usePlayWhenReady();
  const isLoading = useDebouncedValue(
    state === State.Loading || state === State.Buffering,
    250,
  );
  const isErrored = state === State.Error;
  const isEnded = state === State.Ended;

  const showPause = playWhenReady && !(isErrored || isEnded);
  const showBuffering = playWhenReady && isLoading;

  return (
    <>
      {showBuffering ? (
        <ActivityIndicator size="small" color={colors.tertiary} />
      ) : showPause ? (
        <IconButton
          iconSource={Images.ic_pause_mini}
          onIconClick={TrackPlayer.pause}
        />
      ) : (
        <IconButton
          iconSource={Images.ic_play_mini}
          onIconClick={TrackPlayer.play}
        />
      )}
    </>
  );
});

const ProgressUi = memo(() => {
  const {position, duration, buffered} = useProgress();

  return (
    <ProgressBar
      height={2}
      style={{alignSelf: 'center'}}
      unfilledColor={colors.white50}
      color={colors.white}
      borderWidth={0}
      progress={duration !== 0 ? position / duration : 0}
      width={screenWidth}
      useNativeDriver={true}
      animationType="timing"
      borderRadius={8}
    />
  );
});
