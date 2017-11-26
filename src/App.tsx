import * as React from 'react';
import { AppBar, Card, Toolbar, Typography } from 'material-ui';

class App extends React.Component {
  render() {
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
          <Typography>
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </Typography>
        </Card>
      </div>
    );
  }
}

export default App;
