import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

import Method from '../../utils/method';
import styleConfig from '../../utils/styleConfig';
import GS from '../../utils/styles';

const styles = StyleSheet.create({
  container: {
    borderRadius: styleConfig.countPixelRatio(8),
    // borderTopStartRadius: styleConfig.countPixelRatio(8),
    bottom: 0,
    width: styleConfig.width - styleConfig.smartWidthScale(16),
    alignSelf: 'center',
    position: 'absolute',
    marginTop: styleConfig.smartScale(15),
    marginBottom: styleConfig.smartScale(55),
    ...GS.shadowEffect,
  },
  infoRowContainer: {
    flexDirection: 'row',
    marginVertical: styleConfig.smartScale(5),
    marginHorizontal: styleConfig.smartWidthScale(5),
  },
  artworkImage: {
    height: styleConfig.countPixelRatio(45),
    width: styleConfig.countPixelRatio(45),
    borderRadius: styleConfig.countPixelRatio(8),
  },
  songDetailContainer: {
    flex: 1,
    marginHorizontal: styleConfig.smartWidthScale(10),
  },
  titleTextStyle: {
    fontSize: styleConfig.countPixelRatio(12),
  },
  songArtist: {
    opacity: 0.7,
    fontSize: styleConfig.countPixelRatio(12),
  },
});

export default styles;
