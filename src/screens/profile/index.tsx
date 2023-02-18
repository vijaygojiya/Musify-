import {StyleSheet, Text } from 'react-native';
import React from 'react';
import GS from '../../utils/styles';
import CommonGradientBg from '../../component/custom/commonGradientBg';

const ProfileScreen = () => {
 
  return (
    <CommonGradientBg>
      <Text style={[GS.text_white_regular]}>Profile Screen</Text>
    </CommonGradientBg>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
