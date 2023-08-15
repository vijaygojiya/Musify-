import {FlatList, ListRenderItem, Pressable, Text} from 'react-native';
import React, {FC, memo} from 'react';

import {styles} from './styles';
import PlaylistItem from '../PlaylistItem';
import {PlayListItemType} from '../../redux/dashboard/dashboardSlice';
import {Fonts} from '../../theme';
const ITEM_WIDTH = 8 + 175;

const renderSubItem: ListRenderItem<PlayListItemType> = ({item}) => {
  return <PlaylistItem {...item} />;
};

const getItemLayout = (
  data: ArrayLike<PlayListItemType> | null | undefined,
  index: any,
) => {
  const _data = data ?? [];
  return {
    length: ITEM_WIDTH,
    offset: ITEM_WIDTH * _data.length,
    index,
  };
};

const getKey = (_item: PlayListItemType, index: number): string =>
  `playlistItem-${index}`;

interface Props {
  playListData: PlayListItemType[];
  title: string;
}

const HomeListItem: FC<Props> = ({playListData, title}) => {
  return (
    <Pressable style={styles.container}>
      <Text style={[styles.playlistTitle, Fonts.textFontMedium]}>{title}</Text>
      <FlatList
        data={playListData}
        renderItem={renderSubItem}
        horizontal={true}
        keyExtractor={getKey}
        showsHorizontalScrollIndicator={false}
        // bounces={false}
        // overScrollMode="never"
        initialNumToRender={3}
        maxToRenderPerBatch={5}
        contentContainerStyle={styles.flContainerStyle}
        getItemLayout={getItemLayout}
      />
    </Pressable>
  );
};

export default memo(HomeListItem);
