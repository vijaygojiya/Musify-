import { FlatList, Text } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import GS from '../../utils/styles';
import CommonGradientBg from '../../component/custom/commonGradientBg';

import { apiEndPoints } from '../../api/ApiConst';
import { getResponse } from '../../api/getResponse';
import { formatHomePageData } from '../../api/format';
import CommonToolbar from '../../component/custom/commontoolbar';
import HomeListItem from './components/homeListItem';
import styles from './styles';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getResponse(apiEndPoints.homeData);
      const formatedeData = await formatHomePageData(data.data);
      setData(formatedeData);
    } catch (error) {
      console.log('eee', error);
    }
  };

  const renderItem = ({ item, index }) => {
    const { modules } = data;

    return <HomeListItem playListData={data[`${item}`]} title={modules[`${item}`]?.title} />;
  };

  const renderListHeader = useCallback(() => {
    return <Text style={[GS.text_white_regular, styles.greetingTextStyle]}>{data.greeting}</Text>;
  }, [data.greeting]);
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
      />
    </CommonGradientBg>
  );
};

export default HomeScreen;
