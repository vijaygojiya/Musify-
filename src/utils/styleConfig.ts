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
  MONTSERRAT_LIGHT: 'Poppins-Light',
  MONTSERRAT_MEDIUM: 'Poppins-Medium',
  MONTSERRAT_BOLD: 'Poppins-Bold',
  MONTSERRAT_ITALIC: 'Poppins-Italic',
  MONTSERRAT_REGULAR: 'Poppins-Regular',
  MONTSERRAT_SEMIBOLD: 'Poppins-SemiBold',
  MONTSERRAT_BOLDITALIC: 'Poppins-BoldItalic',
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
  fontLight: APP_FONTS.MONTSERRAT_LIGHT,
  fontMedium: APP_FONTS.MONTSERRAT_MEDIUM,
  fontRegular: APP_FONTS.MONTSERRAT_REGULAR,
  fontBold: APP_FONTS.MONTSERRAT_BOLD,
  fontItalic: APP_FONTS.MONTSERRAT_ITALIC,
  fontSemiBold: APP_FONTS.MONTSERRAT_SEMIBOLD,
  fontBoldItalic: APP_FONTS.MONTSERRAT_BOLDITALIC,
  width,
  height,
  isIphone,
  isAndroid,
};
