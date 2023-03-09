import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
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
  OPENSANS_BOLD: 'OpenSans-Bold',
  OPENSANS_REGULAR: 'OpenSans-Regular',
  OPENSANS_MEDIUM: 'OpenSans-Medium',
  OPENSANS_SEMIBOLD: 'OpenSans-SemiBold',
  OPENSANS_LIGHT: 'OpenSans-Light',
  OPENSANS_ITALIC: 'OpenSans-Italic',
};
export default {
  countPixelRatio: (size: number) => size * ratioCount,
  responsiveHeight: (size: number) => size * heightPer,
  responsiveWidth: (size: number) => size * widthPer,
  smartScale: (value: number) => {
    const tempHeight = Platform.OS === 'ios' ? (iPhoneX ? height - 78 : height) : height - 24;
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
  fontLight: APP_FONTS.OPENSANS_LIGHT,
  fontMedium: APP_FONTS.OPENSANS_MEDIUM,
  fontRegular: APP_FONTS.OPENSANS_REGULAR,
  fontBold: APP_FONTS.OPENSANS_BOLD,
  fontSemiBold: APP_FONTS.OPENSANS_SEMIBOLD,
  fontItalic: APP_FONTS.OPENSANS_ITALIC,
  headingFontBold: APP_FONTS.LATO_BOLD,
  headingFontRegular: APP_FONTS.LATO_REGULAR,
  headingFontLight: APP_FONTS.LATO_LIGHT,
  width,
  height,
  isIphone,
  isAndroid,
};
