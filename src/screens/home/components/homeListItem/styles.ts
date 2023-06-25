import {StyleSheet} from 'react-native';
import colors from '../../../../utils/colors';
import styleConfig from '../../../../utils/styleConfig';

export const styles = StyleSheet.create({
  container: {marginVertical: styleConfig.smartScale(10)},
  playlistTitle: {
    fontSize: styleConfig.countPixelRatio(18),
    fontFamily: styleConfig.headingFontBold,
    paddingHorizontal: styleConfig.smartWidthScale(20),
    color: colors.tertiary,
  },
  flContainerStyle: {
    paddingHorizontal: styleConfig.smartWidthScale(20),
    paddingTop: styleConfig.smartScale(10),
  },
});
