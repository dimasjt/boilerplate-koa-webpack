import React from 'react';
import { Route, Link } from 'react-router';

import Main from './layouts/Main.jsx';
import Home from './pages/Home.jsx';

module.exports = (
  <Route path="/" component={Main}>
    <Route path="/home" component={Home} />
  </Route>
);
