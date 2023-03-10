import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import styleConfig from '../../utils/styleConfig';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.dark_blue,
  },

  greetingTextStyle: {
    fontSize: styleConfig.countPixelRatio(26),
    paddingHorizontal: styleConfig.smartWidthScale(20),
    fontFamily: styleConfig.headingFontBold,
  },

  flMain: {
    paddingTop: styleConfig.smartScale(24),
  },
  flContainer: {
    paddingBottom: styleConfig.smartScale(50),
  },
});

export default styles;
