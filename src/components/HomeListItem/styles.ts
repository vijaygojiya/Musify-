import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Variables';

export const styles = StyleSheet.create({
  container: {marginVertical: 10},
  playlistTitle: {
    fontSize: 18,
    // fontFamily: styleConfig.headingFontBold,
    paddingHorizontal: 20,
    color: Colors.tertiary,
  },
  flContainerStyle: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
