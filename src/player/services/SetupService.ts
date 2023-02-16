import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
} from 'react-native-track-player';

export const SetupService = async (): Promise<boolean> => {
  let isSetup = false;
  try {
    // this method will only reject if player has not been setup yet
    await TrackPlayer.getActiveTrackIndex();
    isSetup = true;
  } catch {
    await TrackPlayer.setupPlayer({
      autoHandleInterruptions: true,
    });
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      // This flag is now deprecated. Please use the above to define playback mode.
      // stoppingAppPausesPlayback: true,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
      progressUpdateEventInterval: 2,
    });
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
    isSetup = true;
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return isSetup;
  }
};
