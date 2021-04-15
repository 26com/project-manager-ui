import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import store from './store';
import Login from './routes/Login';
import Register from './routes/Register';
import Home from './routes/Home';
import './style.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/auth/login" children={<Login />} />
        <Route path="/auth/register/:token" children={<Register />} />
        <Route path="/auth/register" children={<Register />} />
        <Route path="/" children={<Home />} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
