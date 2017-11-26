import * as React from 'react';
import {
  AppBar as MUIAppBar,
  Avatar,
  Toolbar,
  Typography,
  withStyles,
} from 'material-ui';

class AppBar extends React.Component {
  renderTopRight = () => {
    if (!this.props.user) {
      return null;
    }

    return <Avatar src={this.props.user.photoURL} />;
  };
  render() {
    return (
      <MUIAppBar position="static" color="default">
        <Toolbar>
          <Typography
            type="title"
            color="inherit"
            className={this.props.classes.typo}
          >
            Fahrn
          </Typography>
          {this.renderTopRight()}
        </Toolbar>
      </MUIAppBar>
    );
  }
}

const styles = {
  typo: {
    flex: 1,
  },
};

export default withStyles(styles)(AppBar);
