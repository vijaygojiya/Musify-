import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import GS from '../../utils/styles';
import colors from '../../utils/colors';

const SearchScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={[GS.text_white_regular]}>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark_blue,
  },
});
