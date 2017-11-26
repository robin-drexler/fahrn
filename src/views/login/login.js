import * as React from 'react';
import { Button, CircularProgress } from 'material-ui';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {
  login = () => {
    const provider = new window.firebase.auth.GoogleAuthProvider();

    window.firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        this.props.setUser(result.user);
      })
      .catch(function(error) {
        alert('Something went wrong while signing in the user, lol');
      });
  };

  render() {
    if (this.props.loading) {
      return <CircularProgress />;
    }

    if (this.props.user) {
      return <Redirect to={{ pathname: '/home' }} />;
    }

    return (
      <Button raised color="primary" onClick={this.login}>
        Login
      </Button>
    );
  }
}
