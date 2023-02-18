import React, { memo, useCallback, useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../../../utils/colors';
import GS from '../../../utils/styles';
import PressableIcon from '../pressableIcon';
import AppImages from '../../../assets/images';
import styleConfig from '../../../utils/styleConfig';

type SongItemProps = {
  title: string;
  index: number;
  selectedIndex: number;
  onSongPress: (i: number) => void;
  onIconPress: (i: number) => void;
};

const SongListItme: React.FC<SongItemProps> = ({
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
      android_ripple={{ color: colors.darkGrey }}
      onPress={handleOnSongItemClick}
      style={styles.container}
    >
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={[
          GS.text_white_regular,
          { flex: 1, flexWrap: 'wrap' },
          { color: isSelected ? colors.white : colors.darkGrey },
        ]}
      >
        {title}
      </Text>
      <PressableIcon
        containerProps={{
          android_ripple: {
            color: colors.darkGrey,
            foreground: true,
            borderless: true,
          },
        }}
        iconSource={AppImages.ic_more}
        onIconClick={handleOnSongItemClick}
        containerStyle={styles.moreIconContainerStyle}
        iconStyle={styles.moreIconStyle}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: styleConfig.smartWidthScale(10),
    paddingVertical: styleConfig.smartScale(5),
    paddingHorizontal: styleConfig.smartWidthScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moreIconContainerStyle: {
    paddingHorizontal: styleConfig.smartWidthScale(10),
  },
  moreIconStyle: {
    height: styleConfig.countPixelRatio(24),
    width: styleConfig.countPixelRatio(24),
    resizeMode: 'contain',
    tintColor: colors.white,
    transform: [{ rotate: '90deg' }],
  },
});

export default memo(SongListItme);
