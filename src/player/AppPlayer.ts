/* eslint-disable no-undef */
/* eslint-disable no-console */
import TrackPlayer, {Capability} from 'react-native-track-player';

import AppImages from '../assets/images';

class AppPlayer {
  static selectedTrack: TrackPlayer.Track | null;

  static initializePlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      TrackPlayer.updateOptions({
        stopWithApp: false, // false=> music continues in background even when app is closed
        // Media controls capabilities
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SeekTo,
          Capability.JumpForward,
          Capability.JumpBackward,
        ],
        // Capabilities that will show up when the notification is in the compact form on Android
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SeekTo,
          Capability.JumpForward,
          Capability.JumpBackward,
        ],
        forwardJumpInterval: 15,
        backwardJumpInterval: 15,
        playIcon: AppImages.ic_play_mini,
        pauseIcon: AppImages.ic_pause_mini,
        previousIcon: AppImages.ic_previous_track,
        nextIcon: AppImages.ic_next_track,
      });
    } catch (e) {
      console.log(e);
      // to-do handle error
    }
  };
  static secondsToHHMMSS = (seconds: number | string) => {
    // credits - https://stackoverflow.com/a/37096512
    seconds = Number(seconds);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);

    const hrs = h > 0 ? (h < 10 ? `0${h}:` : `${h}:`) : '';
    const mins = m > 0 ? (m < 10 ? `0${m}:` : `${m}:`) : '00:';
    const scnds = s > 0 ? (s < 10 ? `0${s}` : s) : '00';
    return `${hrs}${mins}${scnds}`;
  };
}

export default AppPlayer;
