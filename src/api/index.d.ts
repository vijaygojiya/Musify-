export interface SongType {
  music: string;
  id: string;
  title: string;
  subtitle: string;
  header_desc: string;
  type: string;
  perma_url: string;
  image: string;
  language: string;
  year: string;
  play_count: string;
  explicit_content: string;
  list_count: string;
  list_type: string;
  list: string;
  mini_obj?: boolean;
  more_info: {
    music: string;
    album_id: string;
    album: string;
    label: string;
    origin: string;
    is_dolby_content: boolean;
    '320kbps': string;
    encrypted_media_url: string;
    encrypted_cache_url: string;
    album_url: string;
    duration: string;
    rights: {
      code: string;
      cacheable: string;
      delete_cached_object: string;
      reason: string;
    };
    cache_state: string;
    has_lyrics: string;
    lyrics_snippet: string;
    starred: string;
    copyright_text: string;
    artistMap: {
      primary_artists: {
        id: string;
        name: string;
        role: string;
        image: string;
        type: string;
        perma_url: string;
      }[];
      featured_artists: never[];
      artists: {
        id: string;
        name: string;
        role: string;
        image: string;
        type: string;
        perma_url: string;
      }[];
    };
  };
}

export type mediaType =
  | 'charts'
  | 'radio_station'
  | 'playlist'
  | 'song'
  | 'mix'
  | 'show'
  | 'album';

declare module namespace {
  export interface Artist {
    id: string;
    name: string;
    role: string;
    image: string;
    type: string;
    perma_url: string;
  }

  export interface ArtistMap {
    primary_artists: any[];
    featured_artists: any[];
    artists: Artist[];
  }

  export interface MoreInfo {
    isWeekly: string;
    firstname: string;
    song_count: string;
    follower_count: string;
    fan_count: string;
    release_date: string;
    artistMap: ArtistMap;
  }

  export interface Rights {
    code: string;
    cacheable: string;
    delete_cached_object: string;
    reason: string;
  }

  export interface PrimaryArtist {
    id: string;
    name: string;
    role: string;
    image: string;
    type: string;
    perma_url: string;
  }

  export interface Artist2 {
    id: string;
    name: string;
    role: string;
    image: string;
    type: string;
    perma_url: string;
  }

  export interface ArtistMap2 {
    primary_artists: PrimaryArtist[];
    featured_artists: any[];
    artists: Artist2[];
  }

  export interface NewTrending {
    id: string;
    title: string;
    subtitle: string;
    header_desc: string;
    type: string;
    perma_url: string;
    image: string;
    language: string;
    year: string;
    play_count: string;
    explicit_content: string;
    list_count: string;
    list_type: string;
    list: string;
    more_info: MoreInfo;
    modules?: any;
    music: string;
    album_id: string;
    album: string;
    label: string;
    origin: string;
    is_dolby_content?: boolean;
    // 320kbps: string;
    encrypted_media_url: string;
    encrypted_cache_url: string;
    album_url: string;
    duration: string;
    rights: Rights;
    cache_state: string;
    has_lyrics: string;
    lyrics_snippet: string;
    starred: string;
    copyright_text: string;
    artistMap: ArtistMap2;
    release_date: string;
    label_url: string;
    vcode: string;
    vlink: string;
    triller_available?: boolean;
    is_ringtone_available?: boolean;
    request_jiotune_flag?: boolean;
    webp: string;
    lyrics_id: string;
    artist: string;
    album_artist: string;
    genre: string;
  }

  export interface MoreInfo2 {
    song_count: string;
    firstname: string;
    follower_count: string;
    last_updated: string;
    uid: string;
  }

  export interface TopPlaylist {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: string;
    perma_url: string;
    more_info: MoreInfo2;
    explicit_content: string;
    mini_obj: boolean;
  }

  export interface Artist3 {
    id: string;
    name: string;
    role: string;
    image: string;
    type: string;
    perma_url: string;
  }

  export interface ArtistMap3 {
    primary_artists: any[];
    featured_artists: any[];
    artists: Artist3[];
  }

  export interface MoreInfo3 {
    isWeekly: string;
    firstname: string;
    song_count: string;
    follower_count: string;
    fan_count: string;
    release_date: string;
    artistMap: ArtistMap3;
  }

  export interface NewAlbum {
    id: string;
    title: string;
    subtitle: string;
    header_desc: string;
    type: string;
    perma_url: string;
    image: string;
    language: string;
    year: string;
    play_count: string;
    explicit_content: string;
    list_count: string;
    list_type: string;
    list: string;
    more_info: MoreInfo3;
  }

  export interface MoreInfo4 {
    badge: string;
    sub_type: string;
    available: string;
    is_featured: string;
    tags: any;
    video_url: string;
    video_thumbnail: string;
  }

  export interface BrowseDiscover {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: string;
    perma_url: string;
    more_info: MoreInfo4;
    explicit_content: string;
    mini_obj: boolean;
  }

  export interface Hindi {
    listid: string;
    image: string;
    count: number;
    title: string;
  }

  export interface WeeklyTopSongsListid {
    hindi: Hindi;
  }

  export interface Hindi2 {
    listid: string;
    image: string;
  }

  export interface RandomSongsListid {
    hindi: Hindi2;
  }

  export interface PhnOtpProviders {
    // +91: string;
  }

  export interface GlobalConfig {
    weekly_top_songs_listid: WeeklyTopSongsListid;
    random_songs_listid: RandomSongsListid;
    phn_otp_providers: PhnOtpProviders;
  }

  export interface MoreInfo5 {
    song_count: number;
    firstname: string;
  }

  export interface Chart {
    image: string;
    title: string;
    listname: string;
    perma_url: string;
    id: string;
    type: string;
    more_info: MoreInfo5;
    subtitle: string;
    explicit_content: string;
    mini_obj?: boolean;
    language: string;
  }

  export interface MoreInfo6 {
    description: string;
    featured_station_type: string;
    query: string;
    color: string;
    language: string;
    station_display_text: string;
  }

  export interface Radio {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: string;
    perma_url: string;
    more_info: MoreInfo6;
    explicit_content: string;
    mini_obj: boolean;
  }

  export interface MoreInfo7 {
    featured_station_type: string;
    query: string;
    station_display_text: string;
  }

  export interface ArtistReco {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: string;
    perma_url: string;
    more_info: MoreInfo7;
    explicit_content: string;
    mini_obj: boolean;
  }

  export interface MoreInfo8 {
    firstname: string;
    lastname: string;
    type: string;
  }

  export interface TagMix {
    subtitle: string;
    description?: any;
    id: string;
    title: string;
    header_desc: string;
    type: string;
    perma_url: string;
    image: string;
    language: string;
    year: string;
    play_count: string;
    explicit_content: string;
    list_count: string;
    list_type: string;
    list: string;
    more_info: MoreInfo8;
  }

  export interface MoreInfo9 {
    video_available?: any;
    sub_types?: any;
    featured_station_type: string;
    query: string;
  }

  export interface Rights2 {
    code: string;
    cacheable: string;
    delete_cached_object: string;
    reason: string;
  }

  export interface PrimaryArtist2 {
    id: string;
    name: string;
    role: string;
    image: string;
    type: string;
    perma_url: string;
  }

  export interface Artist4 {
    id: string;
    name: string;
    role: string;
    image: string;
    type: string;
    perma_url: string;
  }

  export interface ArtistMap4 {
    primary_artists: PrimaryArtist2[];
    featured_artists: any[];
    artists: Artist4[];
  }

  export interface CityMod {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: string;
    perma_url: string;
    more_info: MoreInfo9;
    explicit_content: string;
    mini_obj: boolean;
    header_desc: string;
    language: string;
    year: string;
    play_count: string;
    list_count: string;
    list_type: string;
    list: string;
    music: string;
    album_id: string;
    album: string;
    label: string;
    origin: string;
    is_dolby_content?: boolean;
    // 320kbps: string;
    encrypted_media_url: string;
    encrypted_cache_url: string;
    album_url: string;
    duration: string;
    rights: Rights2;
    cache_state: string;
    has_lyrics: string;
    lyrics_snippet: string;
    starred: string;
    copyright_text: string;
    artistMap: ArtistMap4;
    release_date: string;
    label_url: string;
    vcode: string;
    vlink: string;
    triller_available?: boolean;
    is_ringtone_available?: boolean;
    request_jiotune_flag?: boolean;
    webp: string;
    lyrics_id: string;
    artist: string;
    album_artist: string;
    genre: string;
  }

  export interface MoreInfo10 {
    video_available?: any;
    sub_types: any[];
    position: string;
    editorial_language: string;
  }

  export interface PromoVxData31 {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: string;
    perma_url: string;
    more_info: MoreInfo10;
    explicit_content: string;
    mini_obj: boolean;
  }

  export interface MoreInfo11 {
    video_available?: any;
    sub_types: any[];
    position: string;
    editorial_language: string;
  }

  export interface PromoVxData76 {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: string;
    perma_url: string;
    more_info: MoreInfo11;
    explicit_content: string;
    mini_obj: boolean;
  }

  export interface MoreInfo12 {
    square_image: string;
  }

  export interface PromoVxData107 {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: string;
    perma_url: string;
    more_info: MoreInfo12;
    explicit_content: string;
    mini_obj: boolean;
  }

  export interface MoreInfo13 {
    square_image: string;
  }

  export interface PromoVxData134 {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: string;
    perma_url: string;
    more_info: MoreInfo13;
    explicit_content: string;
    mini_obj: boolean;
  }

  export interface MoreInfo14 {
    release_year: number;
  }

  export interface PromoVxData113 {
    id: string;
    title: string;
    subtitle: string;
    header_desc: string;
    type: string;
    perma_url: string;
    image: string;
    language: string;
    year: string;
    play_count: string;
    explicit_content: string;
    list_count: string;
    list_type: string;
    list: string;
    more_info: MoreInfo14;
    modules?: any;
  }

  export interface MoreInfo15 {
    release_year: number;
  }

  export interface PromoVxData116 {
    id: string;
    title: string;
    subtitle: string;
    header_desc: string;
    type: string;
    perma_url: string;
    image: string;
    language: string;
    year: string;
    play_count: string;
    explicit_content: string;
    list_count: string;
    list_type: string;
    list: string;
    more_info: MoreInfo15;
    modules?: any;
  }

  export interface MoreInfo16 {
    video_available?: any;
    sub_types: any[];
    release_year?: number;
  }

  export interface PromoVxData145 {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: string;
    perma_url: string;
    more_info: MoreInfo16;
    explicit_content: string;
    mini_obj: boolean;
    header_desc: string;
    language: string;
    year: string;
    play_count: string;
    list_count: string;
    list_type: string;
    list: string;
    modules?: any;
  }

  export interface ViewMore {
    api: string;
    page_param: string;
    size_param: string;
    default_size: number;
    scroll_type: string;
  }

  export interface NewTrending2 {
    source: string;
    position: number;
    score: string;
    bucket: string;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight?: any;
    simpleHeader: boolean;
    noHeader: boolean;
    view_more: ViewMore;
    is_JT_module: boolean;
  }

  export interface ViewMore2 {
    api: string;
    page_param: string;
    size_param: string;
    default_size: number;
    scroll_type: string;
  }

  export interface Charts {
    source: string;
    position: number;
    score: string;
    bucket: string;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    hideMeta: boolean;
    featured: boolean;
    featured_text: string;
    view_more: ViewMore2;
    is_JT_module: boolean;
  }

  export interface ViewMore3 {
    api: string;
    page_param: string;
    size_param: string;
    default_size: number;
    scroll_type: string;
  }

  export interface NewAlbums {
    source: string;
    position: number;
    score: string;
    bucket: string;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    view_more: ViewMore3;
    is_JT_module: boolean;
  }

  export interface ViewMore4 {
    api: string;
    page_param: string;
    size_param: string;
    default_size: number;
    scroll_type: string;
  }

  export interface TopPlaylists {
    source: string;
    position: number;
    score: string;
    bucket: string;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    view_more: ViewMore4;
    is_JT_module: boolean;
  }

  export interface PromoVxData1072 {
    source: string;
    position: number;
    score: string;
    bucket: string;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    view_more: any[];
    is_JT_module: boolean;
  }

  export interface ViewMore5 {
    api: string;
    page_param: string;
    size_param: string;
    default_size: number;
    scroll_type: string;
  }

  export interface Radio2 {
    source: string;
    position: number;
    score: string;
    bucket: string;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    view_more: ViewMore5;
    is_JT_module: boolean;
  }

  export interface ArtistRecos {
    source: string;
    position: number;
    score: string;
    bucket: string;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    hideMeta: boolean;
    view_more: any[];
    is_JT_module: boolean;
  }

  export interface CityMod2 {
    source: string;
    position: number;
    score: string;
    bucket: string;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    view_more: any[];
    is_JT_module: boolean;
  }

  export interface PromoVxData312 {
    source: string;
    position: number;
    score: string;
    bucket: string;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    view_more: any[];
    is_JT_module: boolean;
  }

  export interface PromoVxData762 {
    source: string;
    position: number;
    score: string;
    bucket: string;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    view_more: any[];
    is_JT_module: boolean;
  }

  export interface TagMixes {
    source: string;
    position: number;
    score: string;
    bucket: string;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    view_more: any[];
    is_JT_module: boolean;
  }

  export interface PromoVxData1342 {
    source: string;
    position: number;
    score: string;
    bucket: string;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    view_more: any[];
    is_JT_module: boolean;
  }

  export interface PromoVxData1132 {
    source: string;
    position: number;
    score: string;
    bucket: string;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    view_more: any[];
    is_JT_module: boolean;
  }

  export interface PromoVxData1162 {
    source: string;
    position: number;
    score: string;
    bucket: string;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    view_more: any[];
    is_JT_module: boolean;
  }

  export interface PromoVxData1452 {
    source: string;
    position: number;
    score: string;
    bucket: string;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    view_more: any[];
    is_JT_module: boolean;
  }

  export interface Modules {
    new_trending: NewTrending2;
    charts: Charts;
    new_albums: NewAlbums;
    top_playlists: TopPlaylists;
    // promo:vx:data:107: PromoVxData1072;
    radio: Radio2;
    artist_recos: ArtistRecos;
    city_mod: CityMod2;
    // promo:vx:data:31: PromoVxData312;
    // promo:vx:data:76: PromoVxData762;
    tag_mixes: TagMixes;
    // promo:vx:data:134: PromoVxData1342;
    // promo:vx:data:113: PromoVxData1132;
    // promo:vx:data:116: PromoVxData1162;
    // promo:vx:data:145: PromoVxData1452;
  }

  export interface RootObject {
    history: any[];
    new_trending: NewTrending[];
    top_playlists: TopPlaylist[];
    new_albums: NewAlbum[];
    browse_discover: BrowseDiscover[];
    global_config: GlobalConfig;
    charts: Chart[];
    radio: Radio[];
    artist_recos: ArtistReco[];
    tag_mixes: TagMix[];
    city_mod: CityMod[];
    // promo:vx:data:31: PromoVxData31[];
    // promo:vx:data:76: PromoVxData76[];
    // promo:vx:data:107: PromoVxData107[];
    // promo:vx:data:134: PromoVxData134[];
    // promo:vx:data:113: PromoVxData113[];
    // promo:vx:data:116: PromoVxData116[];
    // promo:vx:data:145: PromoVxData145[];
    modules: Modules;
    greeting: string;
  }
}
