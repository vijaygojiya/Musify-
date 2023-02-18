import { StyleSheet, Text } from 'react-native';
import React from 'react';
import GS from '../../utils/styles';
import CommonGradientBg from '../../component/custom/commonGradientBg';

const SearchScreen = () => {
  return (
    <CommonGradientBg>
      <Text style={[GS.text_white_regular]}>Search Screen</Text>
    </CommonGradientBg>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
