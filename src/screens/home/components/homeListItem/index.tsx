import { FlatList, ListRenderItem, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import styleConfig from '../../../../utils/styleConfig';
import GS from '../../../../utils/styles';
import colors from '../../../../utils/colors';
import PlayListItem from '../playlistitem';
import { styles } from './styles';
import { mediaType } from '../../../../api';

interface Props {
  playListData: {
    image: string;
    type: mediaType;
  }[];
  title: string;
}

const HomeListItem: FC<Props> = ({ playListData, title }) => {
  const renderSubItem: ListRenderItem<{
    image: string;
    type: mediaType;
  }> = ({ item }) => {
    return <PlayListItem {...item} />;
  };

  return (
    <Pressable style={{ marginVertical: styleConfig.smartScale(10) }}>
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
        contentContainerStyle={styles.flContainerStyle}
      />
    </Pressable>
  );
};

export default HomeListItem;
