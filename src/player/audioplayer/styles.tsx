import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import styleConfig from '../../utils/styleConfig';

const flexStyles = {
  display: 'flex',
  flex: 1,
  justifyContent: 'space-around',
  alignItems: 'stretch',
};

const styles = StyleSheet.create({
  playerMaxView: {
    ...flexStyles,
    backgroundColor: colors.blue_grey,
    paddingHorizontal: styleConfig.smartWidthScale(5),
    height: styleConfig.smartScale(300),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    sliderContainer: {width: '70%', height: styleConfig.countPixelRatio(40)},
    shadowOpacity: 0.25,
    shadowRadius: styleConfig.countPixelRatio(4),
    elevation: 5,
    borderTopLeftRadius: styleConfig.countPixelRatio(20),
    borderTopRightRadius: styleConfig.countPixelRatio(20),
  },
  topSection: {
    ...flexStyles,
    flex: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: styleConfig.smartScale(10),
  },
  progrsBarSection: {
    ...flexStyles,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  buttonsSection: {
    ...flexStyles,
    flex: 2,
    flexDirection: 'row',
  },
  buttonsCol: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: styleConfig.countPixelRatio(10),
  },
  playPauseButton: {
    borderRadius: styleConfig.countPixelRatio(35),
    width: styleConfig.countPixelRatio(70),
    height: styleConfig.countPixelRatio(70),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: color.navy_purple,
  },
  playPauseIcon: {
    color: colors.white,
  },
  trackArtBox: {
    ...flexStyles,
    flex: 2,
    display: 'flex',
  },
  trackArt: {
    borderRadius: styleConfig.countPixelRatio(50),
    width: styleConfig.countPixelRatio(100),
    height: styleConfig.countPixelRatio(100),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  trackDesc: {
    ...flexStyles,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackTitle: {
    fontSize: styleConfig.countPixelRatio(20),
    fontWeight: 'bold',
    color: color.dark_purple,
  },
  trackSubtitle: {
    fontSize: styleConfig.countPixelRatio(16),
    fontWeight: 'bold',
    color: color.dark_purple,
  },
  iPrevious: {
    width: styleConfig.countPixelRatio(30),
    height: styleConfig.countPixelRatio(30),
    resizeMode: 'contain',
  },
  iNext: {
    width: styleConfig.countPixelRatio(30),
    height: styleConfig.countPixelRatio(30),
    resizeMode: 'contain',
  },
  iPlayPause: {
    width: styleConfig.countPixelRatio(80),
    height: styleConfig.countPixelRatio(80),
    resizeMode: 'contain',
  },
});

export default styles;
