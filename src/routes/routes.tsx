import * as React from 'react';
import { Router, Route } from 'react-router-dom';
import PrivateRoute from '../component/private-route/private-route';
import Home from '../views/home/home';

export default () => (
  <Router>
    <Route path="/login" render={() => <h1>Log in, plz!</h1>} />
    <PrivateRoute path="/home" component={Home} />
  </Router>
);
