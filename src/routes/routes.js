import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../component/private-route/private-route';
import Home from '../views/home/home';
import Login from '../views/login/login';

export default class App extends React.Component {
  state = {
    user: null,
    userLoaded: false,
  };

  componentDidMount() {
    if (window.firebase.auth().currentUser) {
      this.setUser(window.firebase.auth().currentUser);
    }

    window.firebase.auth().onAuthStateChanged(user => {
      this.setUser(user);
    });
  }

  setUser = user => {
    this.setState({ user: user, userLoaded: true });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            render={() => (
              <Login
                user={this.state.user}
                loading={!this.state.userLoaded}
                setUser={this.setUser}
              />
            )}
          />
          <PrivateRoute
            path="/home"
            userLoaded={this.state.userLoaded}
            user={this.state.user}
            component={Home}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
