import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../component/private-route/private-route';
import Home from '../views/home/home';
import Login from '../views/login/login';
import AppBar from '../component/AppBar';
import { loadAndUpdateRides } from '../api';

export default class App extends React.Component {
  state = {
    user: null,
    userLoaded: false,
    rides: [],
    ridesLoaded: false
  };

  componentDidMount() {
    if (window.firebase.auth().currentUser) {
      this.setUser(window.firebase.auth().currentUser);
    }

    window.firebase.auth().onAuthStateChanged(user => {
      this.setUser(user);
    });

    loadAndUpdateRides(this.setRides);
  }

  setRides = rides => {
    this.setState({ rides: rides, ridesLoaded: true });
  };

  setUser = user => {
    this.setState({ user: user, userLoaded: true });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <AppBar user={this.state.user} />
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
              render={() => (
                <Home
                  user={this.state.user}
                  rides={this.state.rides}
                  ridesLoaded={this.state.ridesLoaded}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
