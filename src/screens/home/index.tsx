import { FlatList, Image, Pressable, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import GS from '../../utils/styles';
import CommonGradientBg from '../../component/custom/commonGradientBg';

import { apiEndPoints } from '../../api/ApiConst';
import { getResponse } from '../../api/getResponse';
import { formatHomePageData } from '../../api/format';
import CommonToolbar from '../../component/custom/commontoolbar';
import styleConfig from '../../utils/styleConfig';
import { getImageUrl } from '../../utils/helpers';
import colors from '../../utils/colors';

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
      console.log('=====~~~~~>', formatedeData);
    } catch (error) {
      console.log('eee', error);
    }
  };

  const renderSubItem = ({ item, index }) => {
    return <Image source={{ uri: getImageUrl(item?.image) }} style={styles.artwrokImage} />;
  };

  const renderItem = ({ item, index }) => {
    // cosnt data =   data['modules']
    const { modules } = data;
    console.log('===>?');

    return (
      <Pressable style={{ marginVertical: styleConfig.smartScale(10) }}>
        {/* <Text>{data['modules'][`${item}`]}</Text> */}
        <Text style={[GS.text_white_medium, styles.playlistTitle]}>
          {modules[`${item}`]?.title}
        </Text>
        <FlatList
          data={data[`${item}`]}
          renderItem={renderSubItem}
          horizontal={true}
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          overScrollMode="never"
          initialNumToRender={3}
          contentContainerStyle={{
            paddingHorizontal: styleConfig.smartWidthScale(20),
            paddingTop: styleConfig.smartScale(10),
          }}
        />
      </Pressable>
    );
  };

  return (
    <CommonGradientBg>
      <CommonToolbar title="Home" />
      <Text style={[GS.text_white_regular, styles.greetingTextStyle]}>{data.greeting}</Text>
      <FlatList
        data={data.collections}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.flMain}
        bounces={false}
        overScrollMode="never"
        contentContainerStyle={styles.flContainer}
      />
    </CommonGradientBg>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  greetingTextStyle: {
    fontSize: 32,
    fontFamily: styleConfig.headingFontBold,
  },
  artwrokImage: {
    height: 150,
    width: 150,
    borderRadius: 18,
    marginHorizontal: 4,
    backgroundColor: colors.darkblue,
  },
  playlistTitle: {
    fontSize: 18,
    fontFamily: styleConfig.headingFontBold,
    paddingHorizontal: styleConfig.smartWidthScale(20),
    color: colors.tertiary,
  },
  flMain: {
    marginVertical: 10,
  },
  flContainer: {
    paddingBottom: styleConfig.smartScale(50),
  },
});
