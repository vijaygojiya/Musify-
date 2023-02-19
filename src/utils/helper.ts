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
