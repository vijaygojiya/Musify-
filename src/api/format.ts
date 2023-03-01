import { SongType } from '.';
import { capitalizeString } from '../utils/helper';
import { getImageUrl } from '../utils/helpers';
import { fetchSongDetails } from './fetchSongDetails';
import CryptoJS from 'crypto-js';

function decode(input: string) {
  const key = '38346591';
  const encrypted = CryptoJS.enc.Base64.parse(input);
  const decrypted = CryptoJS.DES.decrypt({ ciphertext: encrypted }, CryptoJS.enc.Utf8.parse(key), {
    mode: CryptoJS.mode.ECB,
  }).toString(CryptoJS.enc.Utf8);
  const decoded = decrypted.replace(/\.mp4.*/, '.mp4').replace(/\.m4a.*/, '.m4a');
  return decoded.replace('http:', 'https:');
}

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
      image: getImageUrl(response.image),
      url: decode(more_info['encrypted_media_url'].toString()),
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

export async function formatHomePageData(data) {
  try {
    const keys = Object.keys(data);
    const listKeys = keys.filter((key) => Array.isArray(data[key]));
    const listPromoKeys = listKeys.filter((key) => key.startsWith('promo'));
    const listNonPromoKeys = listKeys.filter((key) => !key.startsWith('promo'));
    await Promise.all(
      listPromoKeys.map(async (promoKey) => {
        if (data[promoKey][0]['type'] === 'song' && data[promoKey][0]['mini_obj'] === true) {
          return;
        }
        data[promoKey] = await formatSongsInList(data[promoKey]);
      })
    );
    await Promise.all(
      listNonPromoKeys.map(async (key) => {
        data[key] = await formatSongsInList(data[key]);
      })
    );

    return {
      ...data,
      collections: [
        'new_trending',
        'charts',
        'new_albums',
        'tag_mixes',
        'top_playlists',
        'radio',
        'city_mod',
        'artist_recos',
        ...listPromoKeys,
      ],
      collections_temp: listPromoKeys.filter(
        (promoKey) => data[promoKey][0]['type'] === 'song' && data[promoKey][0]['mini_obj'] === true
      ),
    };
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
