/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import TrackPlayer from 'react-native-track-player';

module.exports = async function () {
  const time = await TrackPlayer.getDuration();
  // This service needs to be registered for the module to work
  // but it will be used later in the "Receiving Events" section
  TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
  TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());
  TrackPlayer.addEventListener('remote-jump-forward', async () => {
    TrackPlayer.seekTo((await TrackPlayer.getPosition()) + 15);
  });
  TrackPlayer.addEventListener('remote-jump-backward', async () => {
    TrackPlayer.seekTo((await TrackPlayer.getPosition()) - 15);
  });
};
