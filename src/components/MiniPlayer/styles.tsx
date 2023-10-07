import {StyleSheet} from 'react-native';
import {Colors, screenWidth} from '../../theme/Variables';

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    width: screenWidth,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 15,
    marginBottom: 43,
    backgroundColor: Colors.darkGrey,
    // ...GS.shadowEffect,
  },
  infoRowContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 12,
  },
  artworkImage: {
    height: 48,
    width: 48,
    borderRadius: 5,
    backgroundColor: Colors.darkGrey,
  },
  songDetailContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  titleTextStyle: {
    fontSize: 12,
  },
  songArtist: {
    opacity: 0.7,
    fontSize: 12,
  },
  // borderStyle: { borderRadius: (8) },
  progressBarContainer: {alignSelf: 'center'},
});

export default styles;
