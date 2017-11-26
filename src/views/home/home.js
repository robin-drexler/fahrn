import * as React from 'react';
import {
  Card,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  withStyles,
} from 'material-ui';
import { Check } from 'material-ui-icons';

class HomeView extends React.Component {
  render() {
    if (!this.props.ridesLoaded) {
      return (
        <Card className={this.props.classes.root}>
          <CircularProgress className={this.props.classes.loading} />
        </Card>
      );
    }

    return (
      <Card className={this.props.classes.root}>
        <List>
          {this.props.rides.map(ride => (
            <RideListItem key={ride.id} ride={ride} />
          ))}
        </List>
      </Card>
    );
  }
}

class RideListItem extends React.Component {
  renderRightIcon = () => {
    if (!this.props.ride.fulfilled) {
      return null;
    }

    return (
      <ListItemSecondaryAction>
        <IconButton color="accent">
          <Check />
        </IconButton>
      </ListItemSecondaryAction>
    );
  };

  render() {
    const { ride } = this.props;
    return (
      <ListItem button>
        <ListItemText
          primary={`${ride.start} to ${ride.destination}`}
          secondary={`departure on ${ride.departure_time.toLocaleString()}`}
        />
        {this.renderRightIcon()}
      </ListItem>
    );
  }
}

const homeViewStyles = {
  root: {
    maxWidth: '960px',
    margin: '8px auto',
    textAlign: 'center',
  },
  loading: {
    margin: '16px',
  },
};

export default withStyles(homeViewStyles)(HomeView);
