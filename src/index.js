import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import buildStore from './state/store';
import { nextFocus, previousFocus } from './Focus';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = buildStore();

document.addEventListener('keydown', ({ keyCode }) => {
  switch(keyCode) {
    case 37: return store.dispatch(previousFocus());
    case 39: return store.dispatch(nextFocus());
    default: return;
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
