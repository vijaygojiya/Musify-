export function unescapeString(str: string): string {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

export const capitalizeString = (str: string) => {
  if (!str) {
    return;
  }
  return str
    .split(' ')
    .map(function (word: string) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
};

export const secondsToHHMMSS = (seconds: number) => {
  // credits - https://stackoverflow.com/a/37096512
  seconds = Number(seconds);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  const hrs = h > 0 ? (h < 10 ? `0${h}:` : `${h}:`) : '';
  const mins = m > 0 ? (m < 10 ? `0${m}:` : `${m}:`) : '00:';
  const scnds = s > 0 ? (s < 10 ? `0${s}` : s) : '00';
  return `${hrs}${mins}${scnds}`;
};

export function getSubTitle(item: {[key: string]: any}): string {
  const type = item['type'];
  switch (type) {
    case 'charts':
      return '';
    case 'radio_station':
      return `Radio • ${
        (item['subtitle']?.toString() ?? '').isEmpty
          ? 'JioSaavn'
          : item['subtitle']?.toString()
      }`;
    case 'playlist':
      return `Playlist • ${
        (item['subtitle']?.toString() ?? '').isEmpty
          ? 'JioSaavn'
          : item['subtitle']?.toString()
      }`;
    case 'song':
      return `Single • ${item['artist']?.toString()}`;
    case 'mix':
      return `Mix • ${
        (item['subtitle']?.toString() ?? '').isEmpty
          ? 'JioSaavn'
          : item['subtitle']?.toString()
      }`;
    case 'show':
      return `Podcast • ${
        (item['subtitle']?.toString() ?? '').isEmpty
          ? 'JioSaavn'
          : item['subtitle']?.toString()
      }`;
    case 'album':
      const artists = item['more_info']?.['artistMap']?.['artists'].map(
        (artist: {[key: string]: any}) => artist['name'],
      );

      if (artists != null) {
        return `Album • ${artists?.join(', ')?.toString()}`;
      } else if (item['subtitle'] != null && item['subtitle'] != '') {
        return `Album • ${item['subtitle']?.toString()}`;
      }
      return 'Album';
    default:
      const _artists = item['more_info']?.['artistMap']?.['_artists'].map(
        (artist: {[key: string]: any}) => artist['name'],
      );

      return _artists?.join(', ')?.toString() ?? '_';
  }
}
