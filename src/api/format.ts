import {SongType} from '.';
import {capitalizeString, unescapeString} from '../utils/helper';
import {getImageUrl} from '../utils/helpers';
import {fetchSongDetails} from './fetchSongDetails';
import CryptoJS from 'crypto-js';
function decode(input: string) {
  const key = '38346591';
  const encrypted = CryptoJS.enc.Base64.parse(input);
  const decrypted = CryptoJS.DES.decrypt(
    {ciphertext: encrypted},
    CryptoJS.enc.Utf8.parse(key),
    {
      mode: CryptoJS.mode.ECB,
    },
  ).toString(CryptoJS.enc.Utf8);
  const decoded = decrypted
    .replace(/\.mp4.*/, '.mp4')
    .replace(/\.m4a.*/, '.m4a');
  return decoded.replace('http:', 'https:');
}

const formatArtistNames = (artistMap: any) => {
  const allArtists = [];

  for (const key in artistMap) {
    if (Array.isArray(artistMap[key])) {
      allArtists.push(...artistMap[key]);
    }
  }

  const artistNames = allArtists.map(artist => artist.name);
  return artistNames.join(', ') ?? 'Unknown';
};

export const formatSingleSongResponse = async (response: SongType) => {
  try {
    const {more_info, ...updateData} = response;
    return {
      ...updateData,
      ...more_info,
      title: unescapeString(response.title.toString()),
      artist: formatArtistNames(more_info.artistMap),
      subtitle: unescapeString(
        response.description || response.subtitle.toString(),
      ),
      album_artist: more_info.music || response.music,
      count:
        response.more_info?.song_pids == null
          ? 0
          : response.more_info.song_pids.toString().split(', ').length,
      language: capitalizeString(response.language),
      genre: capitalizeString(response.language),
      image: getImageUrl(response.image),
      url: decode(more_info.encrypted_media_url.toString()),
    };
  } catch (error) {
    console.error(`Error inside formatSingleSongResponse: ${error}`);
    return {Error: error};
  }
};

/**
 * formate song type item from the list
 */

const formatSongsInList = async (list: any[]) => {
  if (list.length > 0) {
    try {
      const tempData = await Promise.all(
        list
          .filter(item => Boolean(item))
          .map(async item => {
            if (item.type === 'song') {
              if (item.mini_obj) {
                return fetchSongDetails(item.id.toString());
              }
              return formatSingleSongResponse(item);
            }
            return item;
          }),
      );
      return tempData;
    } catch (error) {
      console.error('Error processing songs:', error);
    }
  }
  return [];
};
export async function formatHomePageData(res) {
  try {
    const data = res;
    const collections = Object.keys(data.modules);
    const tempPlaylist = ['new_trending', 'new_albums', 'city_mod'];
    await Promise.all(
      collections
        .filter(key => {
          return tempPlaylist.includes(key) || key.startsWith('promo');
        })
        .map(async promoKey => {
          data[promoKey] = await formatSongsInList(data[promoKey]);
        }),
    );

    return collections.map(key => ({
      data: data[key],
      title: data.modules[key].title,
    }));
  } catch (error) {
    console.error(`Error inside formatHomePageData: ${error}`);
  }
}

export async function formatPromoLists(data) {
  try {
    const promoList = data.collections_temp;
    for (let i = 0; i < promoList.length; i++) {
      data[promoList[i]] = await formatSongsInList(data[promoList[i]]);
    }
    data.collections.push(...promoList);
    data.collections_temp = [];
  } catch (e) {
    console.error(`Error inside formatPromoLists: ${e}`);
  }
  return data;
}
