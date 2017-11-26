import * as React from 'react';
import { AppBar, Card, Toolbar, Typography } from 'material-ui';

export default class HomeView extends React.Component {
  public render() {
    const { displayName } = window.firebase.auth().currentUser;
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography type="title" color="inherit">
              Fahrn
            </Typography>
          </Toolbar>
        </AppBar>
        <Card>
          <Typography>Welcome back, {displayName}!</Typography>
        </Card>
      </div>
    );
  }
}
