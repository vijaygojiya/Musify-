import {FlatList, ListRenderItem, Pressable, Text} from 'react-native';
import React, {FC, memo, useCallback} from 'react';

import {styles} from './styles';
import PlaylistItem from '../PlaylistItem';
import {PlayListItemType} from '../../redux/dashboard/dashboardSlice';
const ITEM_WIDTH = 8 + 175;

interface Props {
  playListData: PlayListItemType[];
  title: string;
}

const HomeListItem: FC<Props> = ({playListData, title}) => {
  const renderSubItem: ListRenderItem<PlayListItemType> = useCallback(
    ({item}) => {
      return <PlaylistItem {...item} />;
    },
    [],
  );

  const getItemLayout = useCallback(
    (data: ArrayLike<PlayListItemType> | null | undefined, index: any) => {
      const _data = data ?? [];
      return {
        length: ITEM_WIDTH,
        offset: ITEM_WIDTH * _data.length,
        index,
      };
    },
    [],
  );
  return (
    <Pressable style={styles.container}>
      <Text style={[styles.playlistTitle]}>{title}</Text>
      <FlatList
        data={playListData}
        renderItem={renderSubItem}
        horizontal={true}
        keyExtractor={(_, index) => index.toString()}
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
