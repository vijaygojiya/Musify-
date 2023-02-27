import { StyleSheet } from 'react-native';
import styleConfig from '../../utils/styleConfig';

const styles = StyleSheet.create({
  appBar: {
    paddingHorizontal: styleConfig.smartWidthScale(20),
  },
  greetingTextStyle: {
    fontSize: styleConfig.countPixelRatio(26),
    paddingHorizontal: styleConfig.smartWidthScale(20),
    fontFamily: styleConfig.headingFontBold,
  },

  flMain: {
    marginVertical: styleConfig.smartScale(10),
  },
  flContainer: {
    paddingBottom: styleConfig.smartScale(50),
  },
});

export default styles;
