import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes.jsx';

render((
  <Router>
    { routes }
  </Router>
), document.getElementById('root'))
