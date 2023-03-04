import { BlurView } from '@react-native-community/blur';
import React, { memo } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import TrackPlayer, {
  State,
  useActiveTrack,
  usePlaybackState,
  usePlayWhenReady,
  useProgress,
} from 'react-native-track-player';
import AppImages from '../../assets/images';
import PressableIcon from '../../component/custom/pressableIcon';
import ProgressBar from '../../component/ProgressBar';

import { useDebouncedValue } from '../../hooks/useDebouncedValue';
import colors from '../../utils/colors';

import styleConfig from '../../utils/styleConfig';
import GS from '../../utils/styles';
import styles from './styles';

const MiniPlayer = () => {
  const track = useActiveTrack();
  const { state } = usePlaybackState();
  const playWhenReady = usePlayWhenReady();
  const isLoading = useDebouncedValue(state === State.Loading || state === State.Buffering, 250);

  const { position, duration, buffered } = useProgress();

  if (!track) {
    return null;
  }
  const { title, artwork } = track;

  const isErrored = state === State.Error;
  const isEnded = state === State.Ended;
  const showPause = playWhenReady && !(isErrored || isEnded);
  const showBuffering = playWhenReady && isLoading;

  return (
    <Animated.View style={[styles.container]} entering={FadeInDown}>
      <BlurView
        style={{ borderRadius: styleConfig.countPixelRatio(8) }}
        overlayColor={colors.transparent}
        blurAmount={10}
        blurRadius={7}
      >
        <LinearGradient
          style={{ borderRadius: styleConfig.countPixelRatio(8) }}
          colors={['rgba(0, 0, 0, 0.85)', '#5E5C60', colors.transparent]}
          locations={[0.2, 0.6, 1.56]}
          useAngle={true}
          angle={90}
        >
          <View style={styles.infoRowContainer}>
            <Image source={{ uri: artwork?.toString() }} style={styles.artworkImage} />
            <View style={styles.songDetailContainer}>
              <Text numberOfLines={1} style={[GS.text_white_medium, styles.titleTextStyle]}>
                {title}
              </Text>
              <Text numberOfLines={1} style={[GS.text_white_regular, styles.songArtist]}>
                {track?.artist}
              </Text>
            </View>
            {showBuffering ? (
              <ActivityIndicator size="small" color={colors.tertiary} />
            ) : (
              <PressableIcon
                iconSource={showPause ? AppImages.ic_pause_mini : AppImages.ic_play_mini}
                onIconClick={showPause ? TrackPlayer.pause : TrackPlayer.play}
              />
            )}
          </View>
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
        </LinearGradient>
      </BlurView>
    </Animated.View>
  );
};
export default memo(MiniPlayer);
