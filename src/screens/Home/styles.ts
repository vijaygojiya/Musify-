import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.dark_blue,
  },

  greetingTextStyle: {
    fontSize: 26,
    paddingHorizontal: 20,
    // fontFamily: ,
    color: 'white',
  },

  flMain: {
    paddingTop: 24,
  },
  flContainer: {
    flexGrow: 1,
    paddingBottom: 75,
  },
});

export default styles;
