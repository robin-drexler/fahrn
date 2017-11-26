import * as React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
  withStyles,
} from 'material-ui';
import { Redirect } from 'react-router-dom';
import styles from '../../styles';

class Login extends React.Component {
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
      return (
        <Card className={this.props.classes.root}>
          <CardContent>
            <CircularProgress className={this.props.classes.loading} />
          </CardContent>
        </Card>
      );
    }

    if (this.props.user) {
      return <Redirect to={{ pathname: '/home' }} />;
    }

    return (
      <Card className={this.props.classes.root}>
        <CardContent>
          <Typography>You need to be logged in to use Fahrn</Typography>
        </CardContent>
        <CardActions>
          <Button raised color="primary" onClick={this.login}>
            Login
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Login);
