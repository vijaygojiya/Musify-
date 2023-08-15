import React, {memo, useCallback, useMemo} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import colors from '../../utils/colors';
import IconButton from '../IconButton';
import {Fonts, Images, Layout} from '../../theme';

type SongListItemProps = {
  title: string;
  index: number;
  selectedIndex: number;
  onSongPress: (i: number) => void;
  onIconPress: (i: number) => void;
};

const SongListItem: React.FC<SongListItemProps> = ({
  title,
  selectedIndex,
  onSongPress,
  onIconPress,
  index,
}) => {
  const isSelected = useMemo(() => {
    return index === selectedIndex;
  }, [index, selectedIndex]);

  const handleOnSongItemClick = useCallback(() => {
    onSongPress(index);
  }, [index]);
  return (
    <Pressable
      android_ripple={{color: colors.darkGrey}}
      onPress={handleOnSongItemClick}
      style={styles.container}>
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={[
          Layout.fill,
          {color: isSelected ? colors.white : colors.darkGrey},
          Fonts.textFontRegular,
        ]}>
        {title}
      </Text>
      <IconButton
        containerProps={{
          android_ripple: {
            color: colors.darkGrey,
            foreground: true,
            borderless: true,
          },
        }}
        iconSource={Images.ic_more}
        onIconClick={handleOnSongItemClick}
        containerStyle={styles.moreIconContainerStyle}
        iconStyle={styles.moreIconStyle}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moreIconContainerStyle: {
    paddingHorizontal: 10,
  },
  moreIconStyle: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    tintColor: colors.white,
    transform: [{rotate: '90deg'}],
  },
});

export default memo(SongListItem);
