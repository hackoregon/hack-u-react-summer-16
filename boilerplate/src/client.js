import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';

class NotFound extends React.Component {
  render() {
    return <div>Not Found!</div>;
  }
}

import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='home' />
      <Route path='about' component={About} />
      <Route path='home' component={Home}/>
      <Route path='posts/:id' component={Posts} />

      <Route path='*' component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('content'),
);
