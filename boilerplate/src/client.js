import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducer from './reducer';
import App from './components/App';
import NewStudent from './components/NewStudent';
import StudentList from './components/StudentList';
import StudentEdit from './components/StudentEdit';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>

        {/* By default, forward traffic to /students */}
        <IndexRedirect to='students' />

        <Route path='students'>
          <IndexRoute component={StudentList} />
          <Route path='new' component={NewStudent} />
          <Route path=':id' component={StudentEdit} />
        </Route>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('content'),
);
