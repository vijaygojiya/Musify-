import { SONG_DETAIL } from "../types";

const INITIAL_STATE = {
  songDetail: "",
};

export default function (state = INITIAL_STATE, action: { type: any; payload: any; }) {
  switch (action.type) {
    case SONG_DETAIL:
      return {
        ...state,
        songDetail: action.payload,
      };

    default:
      return state;
  }
}
