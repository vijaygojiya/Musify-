import { SongType } from '.';
import { capitalizeString } from '../utils/helper';
import { fetchSongDetails } from './fetchSongDetails';

const formatArtistNames = (artistMap: any) => {
  const primaryArtists = artistMap?.primary_artists?.map((artist) => artist.name) || [];
  const featuredArtists = artistMap?.featured_artists?.map((artist) => artist.name) || [];
  const artists = artistMap?.artists?.map((artist) => artist.id?.[0]?.name) || [];
  return [...primaryArtists, ...featuredArtists, ...artists].join(', ') || 'Unknown';
};

export const formatSingleSongResponse = async (response: SongType) => {
  try {
    const { more_info, ...updateData } = response;
    return {
      ...updateData,
      ...more_info,
      artist: formatArtistNames(more_info.artistMap),
      album_artist: more_info.music || response.music,
      language: capitalizeString(response.language),
      genre: capitalizeString(response.language),
    };
  } catch (error) {
    console.error(`Error inside formatSingleSongResponse: ${error}`);
    return { Error: error };
  }
};

/**
 * formate song type item from the list
 */

const formatSongsInList = async (list: any[]) => {
  if (list.length > 0) {
    try {
      const tempData = await Promise.all(
        list.map(async (item) => {
          if (item.type === 'song') {
            if (item.mini_obj) {
              return fetchSongDetails(item.id.toString());
            }
            return formatSingleSongResponse(item);
          }
          return item;
        })
      );
      return tempData;
    } catch (error) {
      console.error('Error processing songs:', error);
    }
  }
  return [];
};

export const formatHomePageData = async (data: { [x: string]: any[] }) => {
  try {
    const keysToFormat = ['new_trending', 'new_albums', 'city_mod'];
    const modules = data.modules || {};

    const promoList = Object.keys(modules)
      .filter((key) => key.startsWith('promo'))
      .reduce(
        (list, key) => {
          const firstItem = data[key][0];
          if (firstItem?.type === 'song' && firstItem?.mini_obj) {
            list.temp.push(key);
          } else {
            list.items.push(key);
          }
          return list;
        },
        { items: [], temp: [] }
      );

    const promoListFormatted = await Promise.all(
      promoList.items.map((item) => formatSongsInList(data[item]))
    );

    promoList.items.forEach((key, index) => {
      data[key] = promoListFormatted[index];
    });

    data.collections = [
      ...keysToFormat,
      'charts',
      'tag_mixes',
      'top_playlists',
      'radio',
      'artist_recos',
      ...promoList.items,
    ];

    data.collections_temp = promoList.temp;
    keysToFormat.forEach(
      async (key) => data[key] && (data[key] = await formatSongsInList(data[key]))
    );
  } catch (error) {
    console.error('Error inside formatHomePageData:', error);
  }
  return data;
};
