import React from 'react';
import { Route, Link } from 'react-router-dom';

import Main from './layouts/Main.jsx';
import Home from './pages/Home.jsx';

module.exports = (
  <Route exact={true} path="/" component={Main}>
    <Route path="/home" component={Home} />
  </Route>
);
