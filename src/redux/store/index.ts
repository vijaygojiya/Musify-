import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import MainReducer from '../reducers/index';

export const store = createStore(MainReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
