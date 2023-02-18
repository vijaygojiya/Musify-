import { StyleSheet } from 'react-native';
import colors from '../utils/colors';
import styleConfig from '../utils/styleConfig';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    display: 'flex',
    backgroundColor: colors.black,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark_blue_gray,
  },
  headerTitle: {
    fontSize: styleConfig.countPixelRatio(22),
    fontWeight: 'bold',
    color: colors.light_grey2,
  },
  content: {
    flex: 8,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: colors.platinum_grey,
  },
  iPlayPause: {
    width: styleConfig.countPixelRatio(30),
    height: styleConfig.countPixelRatio(30),
    resizeMode: 'contain',
  },
  iPrevious: {
    width: styleConfig.countPixelRatio(25),
    height: styleConfig.countPixelRatio(25),
    resizeMode: 'contain',
  },
  iNext: {
    width: styleConfig.countPixelRatio(25),
    height: styleConfig.countPixelRatio(25),
    resizeMode: 'contain',
  },
});

export default styles;
