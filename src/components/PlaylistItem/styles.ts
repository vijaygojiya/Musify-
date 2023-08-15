import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Variables';

export const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 4,
    width: 175,
  },
  artwrokImage: {
    height: 175,
    backgroundColor: Colors.darkblue,
    width: 175,
  },
  titleText: {
    color: 'white',
    fontSize: 14,
    marginVertical: 4,
  },
  subTitleText: {
    fontSize: 12,
    color: 'white',
    opacity: 0.7,
  },
});
