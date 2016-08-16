import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// Exported from redux-devtools
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';

import reducer from './reducer';

class NotFound extends React.Component {
  render() {
    return <div>Not Found!</div>;
  }
}

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  // Note: DockMonitor is visible by default.
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'
               defaultIsVisible={false}>
    <LogMonitor theme='solarized' />
  </DockMonitor>
);
let store = createStore(reducer, undefined, compose(
  applyMiddleware(thunk),
  DevTools.instrument(),
));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRedirect to='home' />
          <Route path='about' component={About} />
          <Route path='home' component={Home}/>
          <Route path='posts/:id' component={Posts} />

          <Route path='*' component={NotFound} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('content'),
);
