import {Platform, StatusBar, StyleSheet, Text} from 'react-native';
import React, {ReactNode, useEffect, useState} from 'react';
import colors from '../../utils/colors';

import CommonGradientBg from '../../component/custom/commonGradientBg';
import GS from '../../utils/styles';
import {
  TabView,
  TabBar,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';
import styleConfig from '../../utils/styleConfig';
import CommonToolbar from '../../component/custom/commontoolbar';
import {checkLocationPermission} from '../../utils/permission';
import Songs from './songs';
import Artists from './artists';
import Albmus from './albmus';
import Folders from './folders';
import {Scene} from 'react-native-tab-view/lib/typescript/types';
import {RNAndroidAudioStore} from 'react-native-get-music-files';
import AppPlayer from '../../player/AppPlayer';
import TrackPlayer, {
  Event,
  State,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import MiniPlayer from '../../player/miniplayer';
import ModalPlayer from '../../player/modalplayer';
import SongList from '../../utils/dummydata/song';

const options = {
  title: true,
  artist: true,
  album: true,
  duration: true,
  cover: true,
  blured: true,
};
interface routeType {
  key: string;
  title: string;
}

const MyMusicScreen = () => {
  const [index, setIndex] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [songIndex, setSongIndex] = useState(-1);
  const [songs, setSongs] = useState([]);
  const [musicFolders, setMusicFolders] = useState([]);

  useEffect(() => {
    AppPlayer.initializePlayer();

    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colors.secondaryBg, true);
    }
    checkLocationPermission(fetchAllSongs);
  }, []);

  useTrackPlayerEvents([Event.PlaybackState], item => {
    switch (item.state) {
      // case State.Stopped:
      //   if (songDetail) {
      //     TrackPlayer.add(songDetail);
      //   }
      //   setPlaying(true);
      //   break;
      case State.Playing:
        setPlaying(false);
        break;
      case State.Paused:
        setPlaying(true);
        break;
    }
  });
  const routes = [
    {key: 'Songs', title: 'Songs'},
    {key: 'Artists', title: 'Artists'},
    {key: 'Albums', title: 'Albmus'},
    {key: 'Folders', title: 'Folders'},
  ];
  const handleIndexChange = (index: number) => {
    setIndex(index);
  };

  const fetchAllSongs = async () => {
    // const coverFolder = RNFetchBlob.fs.dirs.DocumentDir + '/.soundspice';
    try {
      setLoading(true);
      const tempFolders: string[] = [];
      const results = await RNAndroidAudioStore.getAll({options});
      setLoading(false);
      const data = results.map(i => {
        const subText = i.path.split('/');
        tempFolders.push(subText[subText.length - 2]);
        return {...i, url: i.path};
      });
      const uniq = [...new Set(tempFolders)];
      setMusicFolders(uniq);
      setSongs(data);
    } catch (error) {
      setLoading(false);
    }
  };

  const renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<routeType>;
    },
  ) => {
    return (
      <TabBar
        {...props}
        scrollEnabled={true}
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
        activeColor={colors.white}
        inactiveColor={colors.darkGrey}
      />
    );
  };

  const handleSongClick = (index: number) => {
    setSongIndex(index);
    TrackPlayer.reset();
    TrackPlayer.add(SongList[1]);
    TrackPlayer.play();
  };

  const renderScene = ({
    route,
  }: SceneRendererProps & {
    route: routeType;
  }): ReactNode => {
    switch (route.key) {
      case 'Songs':
        return (
          <Songs
            isLoading={isLoading}
            songsData={songs}
            selectedIndex={songIndex}
            handleSongClick={handleSongClick}
          />
        );
      case 'Artists':
        return <Artists />;
      case 'Albums':
        return <Albmus />;
      case 'Folders':
        return <Folders musicFolders={musicFolders} />;
      default:
        return null;
    }
  };
  return (
    <CommonGradientBg>
      <CommonToolbar title="MyMusic" />
      <TabView
        lazy={true}
        swipeEnabled={true}
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={handleIndexChange}
      />
    </CommonGradientBg>
  );
};

export default MyMusicScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBg,
  },
  tTabTitle: {
    color: colors.white,
    fontSize: styleConfig.countPixelRatio(16),
  },
  tabbar: {
    backgroundColor: colors.transparent,
  },
  tab: {
    width: styleConfig.width / 4,
  },
  indicator: {
    backgroundColor: colors.secondary,
    width: styleConfig.width / 4 - styleConfig.smartWidthScale(40),
    marginStart: styleConfig.smartWidthScale(20),
  },
  label: {
    color: colors.white,
    fontSize: styleConfig.countPixelRatio(16),
    textTransform: 'none',
  },
});
