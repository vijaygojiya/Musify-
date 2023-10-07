export interface HomeData {
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
  'promo:vx:data:76': PromoVxData76[];
  'promo:vx:data:107': PromoVxData107[];
  'promo:vx:data:211': PromoVxData211[];
  'promo:vx:data:113': PromoVxData113[];
  'promo:vx:data:114': PromoVxData114[];
  'promo:vx:data:116': PromoVxData116[];
  modules: Modules;
  collections: string[];
  collections_temp: any[];
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
  modules: any;
}

export interface MoreInfo {
  release_date?: string;
  song_count?: string;
  artistMap?: ArtistMap;
  isWeekly?: string;
  firstname?: string;
  follower_count?: string;
  fan_count?: string;
  music?: string;
  album_id?: string;
  album?: string;
  label?: string;
  origin?: string;
  is_dolby_content?: boolean;
  '320kbps'?: string;
  encrypted_media_url?: string;
  encrypted_cache_url?: string;
  album_url?: string;
  duration?: string;
  rights?: Rights;
  cache_state?: string;
  has_lyrics?: string;
  lyrics_snippet?: string;
  starred?: string;
  copyright_text?: string;
  label_url?: string;
  vcode?: string;
  vlink?: string;
  triller_available?: boolean;
  request_jiotune_flag?: boolean;
  webp?: string;
  lyrics_id?: string;
}

export interface ArtistMap {
  primary_artists: PrimaryArtist[];
  featured_artists: any[];
  artists: Artist[];
}

export interface PrimaryArtist {
  id: string;
  name: string;
  role: string;
  image: string;
  type: string;
  perma_url: string;
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  image: string;
  type: string;
  perma_url: string;
}

export interface Rights {
  code: string;
  cacheable: string;
  delete_cached_object: string;
  reason: string;
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

export interface MoreInfo2 {
  song_count: string;
  firstname: string;
  follower_count: string;
  last_updated: string;
  uid: string;
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

export interface MoreInfo3 {
  song_count: string;
  release_date: string;
  artistMap: ArtistMap2;
}

export interface ArtistMap2 {
  primary_artists: any[];
  featured_artists: any[];
  artists: Artist2[];
}

export interface Artist2 {
  id: string;
  name: string;
  role: string;
  image: string;
  type: string;
  perma_url: string;
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

export interface MoreInfo4 {
  badge: string;
  sub_type: string;
  available: string;
  is_featured: string;
  tags: any;
  video_url: string;
  video_thumbnail: string;
}

export interface GlobalConfig {
  weekly_top_songs_listid: WeeklyTopSongsListid;
  random_songs_listid: RandomSongsListid;
  phn_otp_providers: PhnOtpProviders;
}

export interface WeeklyTopSongsListid {
  hindi: Hindi;
}

export interface Hindi {
  listid: string;
  image: string;
  title: string;
  count: number;
}

export interface RandomSongsListid {
  hindi: Hindi2;
}

export interface Hindi2 {
  listid: string;
  image: string;
  count: number;
}

export interface PhnOtpProviders {
  '+91': string;
}

export interface Chart {
  id: string;
  image: string;
  title: string;
  type: string;
  count?: number;
  perma_url: string;
  listname?: string;
  more_info?: MoreInfo5;
  subtitle?: string;
  explicit_content?: string;
  mini_obj?: boolean;
  language?: string;
}

export interface MoreInfo5 {
  firstname?: string;
  song_count?: number;
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

export interface MoreInfo6 {
  description: string;
  featured_station_type: string;
  query: string;
  color: string;
  language: string;
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

export interface MoreInfo7 {
  featured_station_type: string;
  query: string;
  station_display_text: string;
}

export interface TagMix {
  subtitle: string;
  description: any;
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

export interface MoreInfo8 {
  firstname: string;
  lastname: string;
  type: string;
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
}

export interface MoreInfo9 {
  album_id?: string;
  multiple_tunes?: MultipleTune[];
  featured_station_type?: string;
  query?: string;
  video_available: any;
  sub_types: any;
}

export interface MultipleTune {
  id: string;
  title: string;
  type: string;
  subtype: string;
  vcode: string;
  vlink: string;
}

export interface PromoVxData76 {
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

export interface MoreInfo10 {
  video_available: any;
  sub_types: any[];
}

export interface PromoVxData107 {
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

export interface MoreInfo11 {
  square_image: string;
}

export interface PromoVxData211 {
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

export interface MoreInfo12 {
  square_image: string;
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
  more_info: MoreInfo13;
  modules: any;
}

export interface MoreInfo13 {
  release_year: number;
}

export interface PromoVxData114 {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  image: string;
  perma_url: string;
  more_info: MoreInfo14;
  explicit_content: string;
  mini_obj: boolean;
}

export interface MoreInfo14 {
  square_image: string;
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
  modules: any;
}

export interface MoreInfo15 {
  release_year: number;
}

export interface Modules {
  new_trending: NewTrending2;
  charts: Charts;
  new_albums: NewAlbums;
  top_playlists: TopPlaylists;
  'promo:vx:data:107': PromoVxData1072;
  radio: Radio2;
  artist_recos: ArtistRecos;
  city_mod: CityMod2;
  'promo:vx:data:76': PromoVxData762;
  tag_mixes: TagMixes;
  'promo:vx:data:211': PromoVxData2112;
  'promo:vx:data:113': PromoVxData1132;
  'promo:vx:data:114': PromoVxData1142;
  'promo:vx:data:116': PromoVxData1162;
}

export interface NewTrending2 {
  source: string;
  position: number;
  score: string;
  bucket: string;
  scroll_type: string;
  title: string;
  subtitle: string;
  highlight: any;
  simpleHeader: boolean;
  noHeader: boolean;
  view_more: ViewMore;
  is_JT_module: boolean;
}

export interface ViewMore {
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

export interface ViewMore2 {
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

export interface ViewMore3 {
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

export interface ViewMore4 {
  api: string;
  page_param: string;
  size_param: string;
  default_size: number;
  scroll_type: string;
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

export interface ViewMore5 {
  api: string;
  page_param: string;
  size_param: string;
  default_size: number;
  scroll_type: string;
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

export interface PromoVxData2112 {
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

export interface PromoVxData1142 {
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
