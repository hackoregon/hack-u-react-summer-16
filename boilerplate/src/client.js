import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

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

let store = createStore(reducer, undefined, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='home' />
        <Route path='about' component={About} />
        <Route path='home' component={Home}/>
        <Route path='posts/:id' component={Posts} />

        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content'),
);
