import {FORCEUPDATE_SET, MAINTENANCE_SET, SHOW_LOADER} from '../types';

const INITIAL_STATE = {
  isLoading: false,
  forceUpdate: false,
  maintenance: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    case FORCEUPDATE_SET:
      return {...state, forceUpdate: action.payload};
    case MAINTENANCE_SET:
      return {...state, maintenance: action.payload};
    default:
      return state;
  }
}
