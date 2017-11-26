import * as React from 'react';
import {
  Card,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui';
import { Check } from 'material-ui-icons';

export default class HomeView extends React.Component {
  render() {
    if (!this.props.ridesLoaded) {
      return (
        <Card>
          <CircularProgress />
        </Card>
      );
    }

    return (
      <Card>
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
