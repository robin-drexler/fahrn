import * as React from 'react';
import { CircularProgress, List, ListItem, ListItemText } from 'material-ui';

export default class HomeView extends React.Component {
  render() {
    if (!this.props.ridesLoaded) {
      return <CircularProgress />;
    }

    return (
      <List>
        {this.props.rides.map(ride => (
          <ListItem key={ride.id}>
            <ListItemText
              primary={`${ride.start} to ${ride.destination} on ${
                ride.departure_time
              }`}
            />
          </ListItem>
        ))}
      </List>
    );
  }
}
