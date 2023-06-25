import React, {memo} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';

import SongListItme from '../../../../component/custom/songlistitem';
import colors from '../../../../utils/colors';
import SongList from '../../../../utils/dummydata/song';
import styleConfig from '../../../../utils/styleConfig';

interface SongItem {
  title: string;
}

interface Props {
  isLoading: boolean;
  songsData: SongItem[];
  selectedIndex: number;
  handleSongClick: (index: number) => void;
}

const SongsTab: React.FC<Props> = ({
  songsData,
  handleSongClick,
  isLoading,
  selectedIndex,
}) => {
  const renderSongItem = ({item, index}: {item: SongItem; index: number}) => {
    return (
      <SongListItme
        index={index}
        selectedIndex={selectedIndex}
        {...item}
        onSongPress={handleSongClick}
        onIconPress={handleSongClick}
      />
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
        data={SongList}
        contentContainerStyle={styles.flContainerStyle}
        renderItem={renderSongItem}
        ListEmptyComponent={renderLoader}
      />
    </View>
  );
};

export default memo(SongsTab);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  loader: {
    marginTop: styleConfig.smartScale(100),
  },

  flContainerStyle: {
    paddingBottom: styleConfig.smartScale(50),
  },
});
