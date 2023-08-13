import {Dimensions} from 'react-native';

/**
 * Colors
 */
export const {width: screenWidth, height: screenHeight} =
  Dimensions.get('window');
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  //Typography
  textGray800: '#000000',
  textGray400: '#4D4D4D',
  textGray200: '#A1A1A1',
  success: '#28a745',
  error: '#dc3545',
  //ComponentColors
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
  black: '#000',
  primary: '#9c16ad',
  secondary: '#f638dc',
  tertiary: '#35e4ef',
  secondaryBg: '#170524',
  primaryBg: '#0b001e',
  extraDarkGrey: '#222427',
  grey: '#c8c8c8',
  darkGrey: '#a393ab',
  lightGrey: '#fdfbff',

  primarycolor: '#00205B',
  darkblue: '#0D001F',
  bluebackground: '#140131',

  //block
  // primarycolor: "#00205B",
  // darkblue: "#0D001F",
  drawerbackground: '#0b001e',
  loginblue: 'rgba(100,100,100,0.3)',
  light_black: '#545454',
  green: '#48FFAF',
  green_opacity: 'rgba(72, 255, 176,0.6)',
  white50: 'rgba(255,255,255,0.5)',
  bluebackground30: 'rgba(20, 1, 49,0.3)',
  white30: 'rgba(255,255,255,0.3)',
  white20: 'rgba(255,255,255,0.2)',
  placeholder: 'rgba(255,255,255,0.7)',
  inputblue: '#261e33',
  blackopacity: '#191A1E',
  white_light: '#F6F6F6',
  black30: 'rgba(0,0,0,0.5)',
  light_blue: '#191A1E',
  blue30: 'rgba(25, 26, 30,0.5)',
  purple: '#6F00FF',
  purple15: 'rgba(111, 0, 255,0.15)',
  borderblack: 'rgba(22, 0, 51, 0.5)',
  grey50: '#f4f4f4',
  grey30: '#f0f0f0',
  light_red: '#eb6565',
  dark_blue: '#160033',
  yellow: '#FFB800',
  light_grey: '#8A8099',
  red: '#FF0000',
  dark_blue_grey: '#666699',
  light_grey2: '#d1d1e0',
  platinum_grey: '#e0e0eb',
  navy_purple: '#52527a',
  blue_grey: '#a3a3c2',
  dark_purple: '#3d3d5c',
  light_black2: 'rgba(0,0,0,0.3)',
  pink: '#FA22D7',
};

/**
 * FontSize
 */
export const FontSize = {
  tiny: 14,
  small: 16,
  regular: 20,
  large: 40,
};

/**
 * Metrics Sizes
 */
const tiny = 10;
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const large = regular * 2; // 60
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export default {
  Colors,
  FontSize,
  MetricsSizes,
};
