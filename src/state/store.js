import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from './reducer';
import loadInitialState from './initialState';

export default function buildStore(state = loadInitialState()) {
  return createStore(reducer, state, devToolsEnhancer());
}
