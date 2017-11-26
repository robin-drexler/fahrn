import * as React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
  AppBar as MUIAppBar,
  Avatar,
  Toolbar,
  Typography,
  SvgIcon,
  withStyles,
} from 'material-ui';

class AppBar extends React.Component {
  renderTopRight = () => {
    if (!this.props.user) {
      return null;
    }

    return <Avatar src={this.props.user.photoURL} />;
  };

  routeNeedsHomeButton = () => {
    switch (this.props.location.pathname) {
      case '/request-ride':
        return true;
      default:
        return false;
    }
  };

  render() {
    return (
      <MUIAppBar position="static" color="default">
        <Toolbar>
          {this.routeNeedsHomeButton() && (
            <Link to="/home" className={this.props.classes.homeButton}>
              <SvgIcon
                style={{
                  width: 28,
                  height: 28,
                }}
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </SvgIcon>
            </Link>
          )}
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
  homeButton: {
    display: 'inline-block',
    marginRight: '24px',
    paddingTop: '6px',
    color: 'black',
  },
};

export default withRouter(withStyles(styles)(AppBar));
