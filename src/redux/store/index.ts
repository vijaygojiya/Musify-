import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import MainReducers from '../reducers/index'

const middleware = applyMiddleware(thunk);
export const store = createStore(MainReducers, middleware)
