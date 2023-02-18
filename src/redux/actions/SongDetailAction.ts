import { SONG_DETAIL } from '../types';

export const setSongDetail = (value) => {
  return async (dispatch) => {
    dispatch({
      type: SONG_DETAIL,
      payload: value,
    });
  };
};
