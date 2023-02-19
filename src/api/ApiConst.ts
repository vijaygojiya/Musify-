const baseUrl = 'www.jiosaavn.com';
const apiStr = '/api.php?_format=json&_marker=0&api_version=4&ctx=web6dot0';

const apiEndPoints = {
  homeData: '__call=webapi.getLaunchData',
  topSearches: '__call=content.getTopSearches',
  fromToken: '__call=webapi.get',
  featuredRadio: '__call=webradio.createFeaturedStation',
  artistRadio: '__call=webradio.createArtistStation',
  entityRadio: '__call=webradio.createEntityStation',
  radioSongs: '__call=webradio.getSong',
  songDetails: '__call=song.getDetails',
  playlistDetails: '__call=playlist.getDetails',
  albumDetails: '__call=content.getAlbumDetails',
  getResults: '__call=search.getResults',
  albumResults: '__call=search.getAlbumResults',
  artistResults: '__call=search.getArtistResults',
  playlistResults: '__call=search.getPlaylistResults',
  getReco: '__call=reco.getreco',
  getAlbumReco: '__call=reco.getAlbumReco', // still not used
  artistOtherTopSongs: '__call=search.artistOtherTopSongs', // still not used
};

export { baseUrl, apiStr, apiEndPoints };
