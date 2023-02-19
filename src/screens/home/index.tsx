import { StyleSheet, Text } from 'react-native';
import React, { useEffect } from 'react';
import GS from '../../utils/styles';
import CommonGradientBg from '../../component/custom/commonGradientBg';

import { apiEndPoints } from '../../api/ApiConst';
import { getResponse } from '../../api/getResponse';
import { formatHomePageData } from '../../api/format';

const HomeScreen = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getResponse(apiEndPoints.homeData);
      const formatedeData = await formatHomePageData(data.data);
    } catch (error) {
      console.log('eee', error);
    }
  };

  return (
    <CommonGradientBg>
      <Text style={[GS.text_white_regular]}>Home Screen</Text>
    </CommonGradientBg>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
