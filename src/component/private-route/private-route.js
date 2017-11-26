import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: Boolean(window.firebase.auth().currentUser),
    };
    window.firebase
      .auth()
      .onAuthStateChanged(user => this.setState({ loggedIn: Boolean(user) }));
  }

  componentDidMount() {
    this.setState({ loggedIn: Boolean(window.firebase.auth().currentUser) });
  }

  render() {
    return (
      <Route
        render={() =>
          this.state.loggedIn ? (
            React.createElement(this.props.component)
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: this.props.location },
              }}
            />
          )
        }
      />
    );
  }
}
