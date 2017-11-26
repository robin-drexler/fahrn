import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../component/private-route/private-route';
import Home from '../views/home/home';
import Login from '../views/login/login';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);
