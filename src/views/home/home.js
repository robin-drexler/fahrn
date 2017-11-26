import * as React from 'react';
import {
  Card,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from 'material-ui';

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
            <ListItem button key={ride.id}>
              <ListItemText
                primary={`${ride.start} to ${ride.destination} on ${
                  ride.departure_time
                }`}
              />
            </ListItem>
          ))}
        </List>
      </Card>
    );
  }
}
