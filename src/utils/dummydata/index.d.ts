export interface Album {
  id: string;
  name: string;
  year: string;
  type: string;
  playCount: string;
  language: string;
  explicitContent: string;
  url: string;
  primaryArtists: Artist[];
  featuredArtists: Artist[];
  artists: Artist[];
  image: Image[];
  songs: Song[];
}

export interface Artist {
  id: string;
  name: string;
  url: string;
  image: Image | false;
  type: string;
  role: string;
}

export interface Image {
  quality: string;
  link: string;
}

export interface Song {
  id: string;
  name: string;
  url: string;
  albumId: string;
  primaryArtists: Artist[];
  featuredArtists: Artist[];
  artists: Artist[];
  image: Image[];
  length: string;
  explicitContent: string;
  language: string;
}

export interface Playlist {
  id: string;
  userId: string;
  title: string;
  subtitle: string;
  type: 'playlist';
  image: Image[];
  url: string;
  songCount: string;
  firstname: string;
  followerCount: string;
  lastUpdated: string;
  explicitContent: '0' | '1';
}

export interface PlaylistsData {
  playlistsData: Playlist[];
}

export interface Chart {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  image: Image[];
  url: string;
  firstname: string;
  explicitContent: string;
  language: string;
}

export type TrendingSongArtist = {
  id: string;
  name: string;
  url: string;
  image: Image | false;
  type: 'artist';
  role: string;
};

export type TrendingSong = {
  id: string;
  name: string;
  type: 'song';
  album: {
    id: string;
    name: string;
    url: string;
  };
  year: string;
  releaseDate: string;
  duration: string;
  label: string;
  primaryArtists: TrendingSongArtist[];
  featuredArtists: never[];
  explicitContent: string;
  playCount: string;
  language: string;
  url: string;
  image: Image[];
};

type TrendingAlbum = {
  id: string;
  name: string;
  type: 'album';
  year: string;
  releaseDate: string;
  playCount: string;
  language: string;
  explicitContent: string;
  songCount: string;
  url: string;
  image: Image[];
};

type Trending = {
  songs: TrendingSong[];
  albums: TrendingAlbum[];
};
