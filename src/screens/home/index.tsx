import { ActivityIndicator, FlatList, Text } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import GS from '../../utils/styles';
import CommonGradientBg from '../../component/custom/commonGradientBg';

import { apiEndPoints } from '../../api/ApiConst';
import { getResponse } from '../../api/getResponse';
import { formatHomePageData } from '../../api/format';
import CommonToolbar from '../../component/custom/commontoolbar';
import HomeListItem from './components/homeListItem';
import styles from './styles';
import { showToast } from '../../utils/tost';
import TrackPlayer, { useActiveTrack } from 'react-native-track-player';
import { SetupService, QueueInitialTracksService } from '../../player/services';
import SafeAreaView from 'react-native-safe-area-view';

const HomeScreen = () => {
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    let unmounted = false;
    (async () => {
      try {
        const isSetup = await SetupService();
        if (unmounted) return;
        setIsPlayerReady(isSetup);
        const queue = await TrackPlayer.getQueue();
        if (unmounted) return;
        if (isSetup && queue.length <= 0) {
          // await QueueInitialTracksService();
        }
      } catch (error) {
        showToast(`${error.message}`);
      }
    })();
    return () => {
      unmounted = true;
    };
  }, []);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getResponse(apiEndPoints.homeData);
      const formatedeData = await formatHomePageData(data.data);
      setData(formatedeData);
    } catch (error) {
      showToast(`${error?.response?.data?.message}`);
    }
  };

  const renderItem = ({ item }) => {
    const { modules } = data;

    const handlePlaySong = (item) => {
      TrackPlayer.reset();
      TrackPlayer.add([{ ...item, artwork: item.image }]);
      TrackPlayer.play();
    };
    return (
      <HomeListItem
        playListData={data[`${item}`]}
        title={modules[`${item}`]?.title}
        handlerItemClick={handlePlaySong}
      />
    );
  };

  const renderListHeader = useCallback(() => {
    return <Text style={[GS.text_white_regular, styles.greetingTextStyle]}>{data.greeting}</Text>;
  }, [data.greeting]);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  return (
    <CommonGradientBg>
      <CommonToolbar title="Home" containerStyle={styles.appBar} />
      <FlatList
        data={data.collections}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.flMain}
        bounces={false}
        overScrollMode="never"
        ListHeaderComponent={renderListHeader}
        contentContainerStyle={styles.flContainer}
        initialNumToRender={3}
      />
    </CommonGradientBg>
  );
};

export default HomeScreen;
