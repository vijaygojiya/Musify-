import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
const isIphone = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const widthPer = width / 100;
const heightPer = height / 100;
const deviceType = width < 480 ? 'phone' : 'tablet';
const iPhoneX = Platform.OS === 'ios' && (height === 812 || height === 896);
const ratioCount = Math.sqrt(height * height + width * width) / 1000;

const APP_FONTS = {
  LATO_LIGHT: 'Lato-Light',
  LATO_BOLD: 'Lato-Bold',
  LATO_REGULAR: 'Lato-Regular',
  RALEWAY_LIGHT: 'Raleway-Light',
  RALEWAY_BOLD: 'Raleway-Bold',
  RALEWAY_REGULAR: 'Raleway-Regular',
  RALEWAY_MEDIUM: 'Raleway-Medium',
  RALEWAY_SEMIBOLD: 'Raleway-SemiBold',
};
export default {
  countPixelRatio: (size: number) => size * ratioCount,
  responsiveHeight: (size: number) => size * heightPer,
  responsiveWidth: (size: number) => size * widthPer,
  smartScale: (value: number) => {
    const tempHeight =
      Platform.OS === 'ios' ? (iPhoneX ? height - 78 : height) : height - 24;
    if (deviceType === 'phone') {
      return (value * tempHeight) / 667;
    }
    return (value * tempHeight) / 667;
  },
  smartWidthScale: (value: number) => {
    const tempWidth = width;
    if (deviceType === 'phone') {
      return (value * tempWidth) / 375;
    }
    return (value * tempWidth) / 375;
  },
  fontLight: APP_FONTS.RALEWAY_LIGHT,
  fontMedium: APP_FONTS.RALEWAY_MEDIUM,
  fontRegular: APP_FONTS.RALEWAY_REGULAR,
  fontBold: APP_FONTS.RALEWAY_BOLD,
  fontSemiBold: APP_FONTS.RALEWAY_SEMIBOLD,
  width,
  height,
  isIphone,
  isAndroid,
};
