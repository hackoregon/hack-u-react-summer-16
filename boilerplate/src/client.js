import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';
import reducer from './reducer';

const store = createStore(reducer);

function doRender() {
  ReactDOM.render(
    <App state={store.getState()}/>,
    document.getElementById('content'),
  );
}

// Kick off initial render
doRender();

store.subscribe(doRender);

