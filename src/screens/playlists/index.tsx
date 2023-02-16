import {StyleSheet, Text} from 'react-native';
import React from 'react';
import GS from '../../utils/styles';
import CommonGradientBg from '../../component/custom/commonGradientBg';

const PlayListsScreen = () => {
  return (
    <CommonGradientBg>
      <Text style={[GS.text_white_regular]}>Favourites Screen</Text>
    </CommonGradientBg>
  );
};

export default PlayListsScreen;

const styles = StyleSheet.create({});
