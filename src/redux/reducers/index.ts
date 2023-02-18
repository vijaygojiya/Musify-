import { combineReducers } from 'redux';

import commonReducer from './CommonReducer';
import songDetailReducer from './SongDetailReducer';

export default combineReducers({
  commonReducer,
  songDetailReducer,
});
