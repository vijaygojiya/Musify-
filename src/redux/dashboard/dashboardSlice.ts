import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export type HomeDataType = PlayListDataType[];

export interface PlayListDataType {
  title: string;
  data: PlayListItemType[];
}
export interface PlayListItemType {
  image: string;
  type:
    | 'charts'
    | 'radio_station'
    | 'playlist'
    | 'song'
    | 'mix'
    | 'show'
    | 'album';
  title: string;
  artist: string;
  url: string;
}

export interface DashboardState {
  loading: boolean;
  homeData: HomeDataType;
}

const initialState: DashboardState = {
  loading: false,
  homeData: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {
    fetchHomeData(state) {
      state.loading = true;
    },
    fetchHomeDataSuccess(state, action: PayloadAction<HomeDataType>) {
      state.loading = false;
      state.homeData = action.payload;
    },
    fetchHomeDataFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const dashboardActions = dashboardSlice.actions;

// Selector
export const selectHomeDataLoading = (state: RootState) =>
  state.dashboard.loading;

export const selectHomeData = (state: RootState) => state.dashboard.homeData;

// Reducers
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;
