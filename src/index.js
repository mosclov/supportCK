import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import SearchTable from './components/SearchTable';
import UserSearch from './components/UserSearch'
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../styles/scss/main.scss';

injectTapEventPlugin();

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={Login} />
      <Route path="search" component={UserSearch} >
        <Route path="user" component={SearchTable} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'))
