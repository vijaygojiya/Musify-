import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import GS from '../../../utils/styles';
import colors from '../../../utils/colors';
import styleConfig from '../../../utils/styleConfig';
import AppImages from '../../../assets/images';
import PressableIcon from '../../../component/custom/pressableIcon';

const Songs: React.FC<{
  isLoading: boolean;
  songsData: {fileName: string};
  selectedIndex: number;
  handleSongClick: (i: number) => void;
}> = ({songsData, handleSongClick, isLoading, selectedIndex}) => {
  const renderSongItem = ({item, index}) => {
    const {title} = item;
    return (
      <Pressable
        android_ripple={{color: colors.darkGrey}}
        onPress={() => {
          handleSongClick(index);
        }}
        style={styles.container}>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={[
            GS.text_white_regular,
            {flex: 1, flexWrap: 'wrap'},
            index === selectedIndex
              ? {color: colors.white}
              : {color: colors.darkGrey},
          ]}>
          {title}
        </Text>
        <PressableIcon
          containerProps={{
            android_ripple: {color: colors.darkGrey, foreground: true,borderless: true},
          }}
          iconSource={AppImages.ic_more}
          onIconClick={() => console.log('clicked')}
          containerStyle={styles.moreIconContainerStyle}
          iconStyle={styles.moreIconStyle}
        />
      </Pressable>
    );
  };

  const renderLoader = () => {
    if (isLoading) {
      return (
        <ActivityIndicator
          style={styles.loader}
          color={colors.secondary}
          size={'large'}
        />
      );
    }
    return null;
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={songsData}
        contentContainerStyle={styles.flContainerStyle}
        renderItem={renderSongItem}
        ListEmptyComponent={renderLoader}
      />
    </View>
  );
};

export default Songs;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    marginStart: styleConfig.smartWidthScale(10),
    paddingVertical: styleConfig.smartScale(5),
    paddingHorizontal: styleConfig.smartWidthScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loader: {
    marginTop: styleConfig.smartScale(100),
  },
  moreIconContainerStyle: {
    paddingHorizontal: styleConfig.smartWidthScale(10),
  },
  moreIconStyle: {
    height: styleConfig.countPixelRatio(24),
    width: styleConfig.countPixelRatio(24),
    resizeMode: 'contain',
    tintColor: colors.white,
    transform: [{rotate: '90deg'}],
  },
  flContainerStyle: {
    paddingBottom: styleConfig.smartScale(50),
  },
});
