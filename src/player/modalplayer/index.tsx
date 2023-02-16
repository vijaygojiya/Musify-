import Slider from '@react-native-community/slider';
import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

import TrackPlayer, {
  State,
  Track,
  useProgress,
} from 'react-native-track-player';

import AppImages from '../../assets/images';
import colors from '../../utils/colors';
import GS from '../../utils/styles';
import AppPlayer from '../AppPlayer';
import styles from './styles';

const ModalPlayer = ({
  isModalOpen,
  isPlaying,
  songDetail,
  onNextPrevPress,
  onCloseModal,
}: {
  isModalOpen: boolean;
  isPlaying: boolean;
  songDetail: Track;
  onNextPrevPress: () => void;
  onCloseModal: () => void;
}) => {
  const progress = useProgress();

  useEffect(() => {
    TrackPlayer.add(songDetail);
    TrackPlayer.play();
  }, [songDetail]);

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
  const handleOnSliding = (time: number) => {
    TrackPlayer.seekTo(time);
  };
  console.log('===>',songDetail);
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalOpen}
      onRequestClose={onCloseModal}>
      <SafeAreaView style={styles.centeredView}>
        <ImageBackground
          style={styles.iBgAlbum}
          source={{uri: songDetail?.artwork}}
          blurRadius={44}>
          <LinearGradient
            colors={[colors.transparent,colors.extraDarkGrey]}
            style={[styles.gradientContainer]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1.5}}
            >
            <Pressable style={styles.pCloseContainer} onPress={onCloseModal}>
              <Image source={AppImages.ic_back_arrow} style={styles.iClose} />
            </Pressable>

            <Image style={styles.iAlbum} source={{uri: songDetail?.artwork}} />

            <View style={styles.vProgrsBarSection}>
              <Text style={[GS.text_white_regular, styles.tTime]}>
                {AppPlayer.secondsToHHMMSS(Math.floor(progress.position || 0))}
              </Text>
              <Slider
                style={{width: '70%', height: 40}}
                minimumValue={0}
                onSlidingComplete={handleOnSliding}
                maximumValue={parseInt(songDetail?.duration)}
                minimumTrackTintColor={colors.navy_purple}
                maximumTrackTintColor={colors.navy_purple}
                thumbTintColor={colors.navy_purple}
                value={progress.position}
              />
              <Text style={[GS.text_white_regular, styles.tTime]}>
                {AppPlayer.secondsToHHMMSS(songDetail?.duration || 0)}
              </Text>
            </View>
            <View style={styles.vTitleContainer}>
              <Text style={[GS.text_white_medium, styles.tSongTitle]}>
                {songDetail?.title}
              </Text>
              <Text
                numberOfLines={1}
                style={[GS.text_white_regular, styles.tSongArtist]}>
                {songDetail?.artist}
              </Text>
            </View>
            <View style={styles.vFunctionContainer}>
              <View style={styles.vControlContainer}>
                <Pressable
                  style={styles.pNextPreviousContainer}
                  onPress={() => onNextPrevPress('prev')}>
                  <Image
                    source={AppImages.ic_backward}
                    style={styles.iNextPrevious}
                  />
                </Pressable>
                <Pressable onPress={onPlayPausePress}>
                  <Image
                    style={styles.iPlayPause}
                    source={isPlaying ? AppImages.ic_play : AppImages.ic_pause}
                  />
                </Pressable>

                <Pressable
                  style={styles.pNextPreviousContainer}
                  onPress={() => onNextPrevPress('next')}>
                  <Image
                    source={AppImages.ic_forward}
                    style={styles.iNextPrevious}
                  />
                </Pressable>
              </View>
            </View>
          </LinearGradient>
          {/* <AudioPlayer track={songDetail} /> */}
        </ImageBackground>
      </SafeAreaView>
    </Modal>
  );
};
export default ModalPlayer;
