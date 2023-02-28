import { Image, Pressable } from 'react-native';
import React, { FC } from 'react';
import { getImageUrl } from '../../../../utils/helpers';
import { styles } from './styles';
export type mediaType = 'charts' | 'radio_station' | 'playlist' | 'song' | 'mix' | 'show' | 'album';

interface Props {
  image: string;
  type: mediaType;
}

const PlayListItem: FC<Props> = ({ image, type }) => {
  console.log('typetypetypetype', type === 'song');

  return (
    <Pressable style={styles.itemContainer}>
      <Image
        source={{ uri: getImageUrl(image) }}
        style={styles.artwrokImage}
        resizeMode="contain"
      />
    </Pressable>
  );
};

export default PlayListItem;
