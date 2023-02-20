export const unescapeString = (serializedJsonString: string) => {
  var deserializedJsonString = serializedJsonString
    .replace(/(\\n)/g, '')
    .replace(/(\\r)/g, '')
    .replace(/(\\t)/g, '')
    .replace(/(\\f)/g, '')
    .replace(/(\\b)/g, '')
    .replace(/(\")/g, '"')
    .replace(/("{)/g, '{')
    .replace(/(}")/g, '}')
    .replace(/(\\)/g, '')
    .replace(/(\/)/g, '/');
  return JSON.parse(deserializedJsonString);
};

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
