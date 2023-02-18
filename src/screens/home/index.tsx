import {StyleSheet, Text} from 'react-native';
import React from 'react';
import GS from '../../utils/styles';
import CommonGradientBg from '../../component/custom/commonGradientBg';

const HomeScreen = () => {
  return (
    <CommonGradientBg>
      <Text style={[GS.text_white_regular]}>Home Screen</Text>
    </CommonGradientBg>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
