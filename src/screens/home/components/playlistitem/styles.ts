import { StyleSheet } from 'react-native';
import colors from '../../../../utils/colors';
import styleConfig from '../../../../utils/styleConfig';

export const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: styleConfig.smartWidthScale(4),
    width: styleConfig.countPixelRatio(175),
  },
  artwrokImage: {
    height: styleConfig.countPixelRatio(175),
    backgroundColor: colors.darkblue,
    width: styleConfig.countPixelRatio(175),
  },
  titleText: {
    fontSize: styleConfig.countPixelRatio(14),
    marginVertical: styleConfig.smartScale(4),
  },
  subTitleText: {
    fontSize: styleConfig.countPixelRatio(12),
    opacity: 0.7,
  },
});
