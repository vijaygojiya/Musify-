import { StyleSheet } from 'react-native';
import colors from '../../../../utils/colors';
import styleConfig from '../../../../utils/styleConfig';

export const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: styleConfig.smartWidthScale(4),
    backgroundColor: colors.darkblue,
  },
  artwrokImage: {
    height: styleConfig.countPixelRatio(150),
    width: styleConfig.countPixelRatio(150),
  },
});
