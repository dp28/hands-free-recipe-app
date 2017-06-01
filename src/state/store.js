import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { speechMiddleware } from '../speech';
import reducer from './reducer';
import loadInitialState from './initialState';

export default function buildStore(state = loadInitialState()) {
  return createStore(reducer, state, composeWithDevTools(
    applyMiddleware(speechMiddleware)
  ));
}
