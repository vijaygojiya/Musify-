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
import TrackPlayer from 'react-native-track-player';
import { SetupService } from '../../player/services';
import SafeAreaView from 'react-native-safe-area-view';
import styleConfig from '../../utils/styleConfig';

const ITEM_HEIGHT =
  styleConfig.smartScale(20) +
  styleConfig.countPixelRatio(18) +
  styleConfig.countPixelRatio(175) +
  styleConfig.countPixelRatio(12) +
  styleConfig.countPixelRatio(10);

const HomeScreen = () => {
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
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

  const fetchData = useCallback(async () => {
    try {
      const data = await getResponse(apiEndPoints.homeData);
      if (data.data) {
        const formattedData = await formatHomePageData(data.data);
        setData(formattedData);
      }
    } catch (error) {
      showToast(`${error?.response?.data?.message}`);
    }
  }, []);

  const renderItem = useCallback(
    ({ item }) => {
      const { modules } = data;
      return <HomeListItem playListData={data[`${item}`]} title={modules[`${item}`]?.title} />;
    },
    [data]
  );

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

  const getKey = (_, index): string => index.toString();

  const getItemLayout = (data, index) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * data.length,
      index,
    };
  };

  return (
    <CommonGradientBg>
      <CommonToolbar title="Home" containerStyle={styles.appBar} />
      <FlatList
        data={data.collections}
        renderItem={renderItem}
        keyExtractor={getKey}
        showsVerticalScrollIndicator={false}
        style={styles.flMain}
        bounces={false}
        overScrollMode="never"
        ListHeaderComponent={renderListHeader}
        contentContainerStyle={styles.flContainer}
        initialNumToRender={3}
        updateCellsBatchingPeriod={1000}
        maxToRenderPerBatch={5}
        getItemLayout={getItemLayout}
      />
    </CommonGradientBg>
  );
};

export default HomeScreen;
