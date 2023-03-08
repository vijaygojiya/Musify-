import { FlatList, ListRenderItem, Pressable, Text } from 'react-native';
import React, { FC, memo, useCallback } from 'react';
import GS from '../../../../utils/styles';
import PlayListItem from '../playlistitem';
import { styles } from './styles';
import { mediaType } from '../../../../api';
import styleConfig from '../../../../utils/styleConfig';
const ITEM_WIDTH = styleConfig.smartWidthScale(8) + styleConfig.countPixelRatio(175);

interface Props {
  handlerItemClick: (i: object) => void;
  playListData: {
    image: string;
    type: mediaType;
  }[];
  title: string;
}

const HomeListItem: FC<Props> = ({ playListData, title, handlerItemClick }) => {
  const renderSubItem: ListRenderItem<{
    image: string;
    type: mediaType;
    title: string;
  }> = useCallback(({ item, index }) => {
    const itemClickHandler = () => {
      handlerItemClick(item);
    };
    return <PlayListItem {...item} index={index} handlerItemClick={itemClickHandler} />;
  }, []);

  const getItemLayout = (data, index) => {
    return {
      length: ITEM_WIDTH,
      offset: ITEM_WIDTH * data.length,
      index,
    };
  };
  return (
    <Pressable style={styles.container}>
      <Text style={[GS.text_white_medium, styles.playlistTitle]}>{title}</Text>
      <FlatList
        data={playListData}
        renderItem={renderSubItem}
        horizontal={true}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        initialNumToRender={3}
        maxToRenderPerBatch={5}
        contentContainerStyle={styles.flContainerStyle}
        getItemLayout={getItemLayout}
      />
    </Pressable>
  );
};

export default memo(HomeListItem);
