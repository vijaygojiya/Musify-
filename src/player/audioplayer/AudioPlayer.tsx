import Slider from '@react-native-community/slider';
import React, { useEffect, useState } from 'react';
import { DynamicColorIOS, Image, Text, TouchableOpacity, View } from 'react-native';
import TrackPlayer, { State, useProgress } from 'react-native-track-player';

import AppImages from '../../assets/images';
import colors from '../../utils/colors';
import string from '../../utils/string';

import AppPlayer from '../AppPlayer';
import styles from './styles';

const AudioPlayer = ({ track, onNextPrevPress }) => {
  const {
    playerMaxView,
    topSection,
    buttonsSection,
    progrsBarSection,
    buttonsCol,
    trackArtBox,
    trackArt,
    trackDesc,
    trackTitle,
    trackSubtitle,
  } = styles;

  const progress = useProgress();
  const [isPlaying, setPlaying] = useState(true);

  useEffect(() => {
    setPlaying(true);
    TrackPlayer.add(track);
    TrackPlayer.play();
  }, [track]);

  const onPlayPausePress = async () => {
    const state = await TrackPlayer.getState();

    if (state === State.Playing) {
      TrackPlayer.pause();
      setPlaying(false);
    }

    if (state === State.Paused) {
      TrackPlayer.play();
      setPlaying(true);
    }
  };

  const artImg = track.artwork || `${string.picsum_url}${Math.random()}`;

  return (
    <View style={playerMaxView}>
      <View style={topSection}>
        <View style={trackArtBox}>
          <Image style={trackArt} source={{ uri: artImg }} />
        </View>
        <View style={trackDesc}>
          <View>
            <Text style={trackTitle}>{track.title}</Text>
          </View>
          <View>
            <Text style={trackSubtitle}>{track.artist || track.album || 'unknown'}</Text>
          </View>
        </View>
      </View>
      <View style={progrsBarSection}>
        <Text>{AppPlayer.secondsToHHMMSS(Math.floor(progress.position || 0))}</Text>
        <Slider
          style={styles.sliderContainer}
          minimumValue={0}
          maximumValue={track.duration}
          minimumTrackTintColor={colors.navy_purple}
          maximumTrackTintColor={colors.navy_purple}
          thumbTintColor={DynamicColorIOS.navy_purple}
          value={progress.position}
        />
        <Text>{AppPlayer.secondsToHHMMSS(track.duration || 0)}</Text>
      </View>
      <View style={buttonsSection}>
        <View style={[buttonsCol, { alignItems: 'flex-end' }]}>
          <TouchableOpacity onPress={() => onNextPrevPress('prev')}>
            <Image source={AppImages.ic_previous_track} style={styles.iPrevious} />
          </TouchableOpacity>
        </View>
        <View style={buttonsCol}>
          <TouchableOpacity onPress={onPlayPausePress}>
            {isPlaying ? (
              <Image source={AppImages.ic_pause} style={styles.iPlayPause} />
            ) : (
              <Image source={AppImages.ic_play} style={styles.iPlayPause} />
            )}
          </TouchableOpacity>
        </View>
        <View style={[buttonsCol, { alignItems: 'flex-start' }]}>
          <TouchableOpacity onPress={() => onNextPrevPress('next')}>
            <Image source={AppImages.ic_next_track} style={styles.iNext} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default AudioPlayer;
