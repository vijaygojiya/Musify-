import { PhotoIdentifier } from '@react-native-camera-roll/camera-roll';
import React from 'react';
import { Text, Pressable, Image, StyleSheet, View } from 'react-native';
import AppImages from '../../../assets/images';
import colors from '../../../utils/colors';
import Method from '../../../utils/method';
import styleConfig from '../../../utils/styleConfig';
import GS from '../../../utils/styles';

interface videoDetailPros extends PhotoIdentifier {
  onVideoItemPress: () => void;
  onMoreIconClick: () => void;
}

const VideoDetailListItem: React.FC<videoDetailPros> = (props) => {
  const { filename, playableDuration, uri } = props.node.image;
  const { onVideoItemPress, onMoreIconClick } = props;

  return (
    <Pressable
      android_ripple={{ color: colors.grey }}
      onPress={onVideoItemPress}
      style={styles.rowContainer}
    >
      <Image resizeMode="cover" source={{ uri: uri }} style={styles.folderIconStyle} />
      <View style={styles.titleContainer}>
        <Text
          numberOfLines={2}
          ellipsizeMode={'tail'}
          style={[GS.text_black_medium, styles.titleTextStyle]}
        >
          {filename}
        </Text>
        <Text numberOfLines={1} style={styles.countTextStyle}>
          {Method.getDurationTime(playableDuration)}
        </Text>
      </View>
      <Pressable onPress={onMoreIconClick} hitSlop={5} style={styles.moreIconContainer}>
        <Image source={AppImages.ic_more} style={styles.moreIconStyle} />
      </Pressable>
    </Pressable>
  );
};

export default VideoDetailListItem;

const styles = StyleSheet.create({
  folderIconStyle: {
    height: styleConfig.countPixelRatio(65),
    width: (16 / 8) * styleConfig.countPixelRatio(50),
    marginEnd: styleConfig.smartWidthScale(10),
    borderRadius: styleConfig.countPixelRatio(10),
  },
  rowContainer: {
    flexDirection: 'row',
    paddingVertical: styleConfig.smartScale(5),
    paddingHorizontal: styleConfig.smartWidthScale(10),
    marginVertical: styleConfig.smartScale(3),
    borderRadius: styleConfig.countPixelRatio(18),
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  titleTextStyle: {
    fontSize: styleConfig.countPixelRatio(16),
    color: colors.lightGreyBlue,
  },
  countTextStyle: {
    color: colors.lightGreyBlue,
    fontSize: styleConfig.countPixelRatio(13),
    opacity: 0.5,
  },
  moreIconContainer: {
    justifyContent: 'center',
    paddingHorizontal: styleConfig.smartWidthScale(5),
  },
  moreIconStyle: {
    width: styleConfig.countPixelRatio(25),
    height: styleConfig.countPixelRatio(25),
    resizeMode: 'contain',
    tintColor: colors.black,
    transform: [{ rotate: '90deg' }],
  },
});
