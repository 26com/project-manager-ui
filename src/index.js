import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import store from './store';
import Login from './routes/Login';
import Register from './routes/Register';
import Home from './routes/Home';
import Projects from './routes/Projects';
import './style.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/auth/login"><Login /></Route>
        <Route path="/auth/register/:token"><Register /></Route>
        <Route path="/auth/register"><Register /></Route>
        <Route path="/user/projects"><Projects /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
