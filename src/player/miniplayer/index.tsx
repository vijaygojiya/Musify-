import { BlurView } from '@react-native-community/blur';
import React, { memo } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TrackPlayer, {
  State,
  useActiveTrack,
  usePlaybackState,
  usePlayWhenReady,
  useProgress,
} from 'react-native-track-player';
import AppImages from '../../assets/images';
import PressableIcon from '../../component/custom/pressableIcon';
import MarqueeText from '../../component/MarqueeText';
import ProgressBar from '../../component/ProgressBar';

import { useDebouncedValue } from '../../hooks/useDebouncedValue';
import colors from '../../utils/colors';

import styleConfig from '../../utils/styleConfig';
import GS from '../../utils/styles';
import styles from './styles';

const MiniPlayer = () => {
  const track = useActiveTrack();

  if (!track) {
    return null;
  }

  const { title, artist, artwork } = track;

  return (
    <View style={[styles.container]}>
      <BlurView
        style={styles.borderStyle}
        overlayColor={colors.transparent}
        blurAmount={10}
        blurRadius={7}
      >
        <LinearGradient
          style={styles.borderStyle}
          colors={[colors.secondaryBg, colors.darkGrey, colors.transparent]}
          locations={[0.15, 0.6, 1.56]}
          useAngle={true}
          angle={90}
        >
          <View style={styles.infoRowContainer}>
            <Image source={{ uri: artwork }} style={styles.artworkImage} />
            <View style={styles.songDetailContainer}>
              <MarqueeText
                style={[GS.text_white_medium, styles.titleTextStyle]}
                speed={1}
                marqueeOnStart={true}
                loop={true}
                delay={1000}
              >
                {title}
              </MarqueeText>
              <Text numberOfLines={1} style={[GS.text_white_regular, styles.songArtist]}>
                {artist}
              </Text>
            </View>
            <PlayPauseUi />
          </View>
          <ProgressUi />
        </LinearGradient>
      </BlurView>
    </View>
  );
};
export default memo(MiniPlayer);

const PlayPauseUi = memo(() => {
  const { state } = usePlaybackState();
  const playWhenReady = usePlayWhenReady();
  const isLoading = useDebouncedValue(state === State.Loading || state === State.Buffering, 250);
  const isErrored = state === State.Error;
  const isEnded = state === State.Ended;

  const showPause = playWhenReady && !(isErrored || isEnded);
  const showBuffering = playWhenReady && isLoading;

  return (
    <>
      {showBuffering ? (
        <ActivityIndicator size="small" color={colors.tertiary} />
      ) : showPause ? (
        <PressableIcon iconSource={AppImages.ic_pause_mini} onIconClick={TrackPlayer.pause} />
      ) : (
        <PressableIcon iconSource={AppImages.ic_play_mini} onIconClick={TrackPlayer.play} />
      )}
    </>
  );
});

const ProgressUi = memo(() => {
  const { position, duration, buffered } = useProgress();

  return (
    <ProgressBar
      height={2}
      style={{ alignSelf: 'center' }}
      unfilledColor={colors.white50}
      color={colors.white}
      borderWidth={0}
      progress={duration !== 0 ? position / duration : 0}
      width={styleConfig.width - styleConfig.smartWidthScale(32)}
      useNativeDriver={true}
      animationType="timing"
      borderRadius={styleConfig.countPixelRatio(8)}
    />
  );
});
