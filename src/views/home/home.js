import * as React from 'react';
import {
  Card,
  CardContent,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  withStyles
} from 'material-ui';
import { Check } from 'material-ui-icons';
import styles from '../../styles';

class HomeView extends React.Component {
  refreshNotificationToken = () => {
    window.firebase.messaging().getToken().then(currentToken => {
      if (currentToken) {
        window.firebase
          .firestore()
          .collection('users')
          .doc(this.props.user.uid)
          .set({ [currentToken]: true });
      } else {
        this.requestPermission();
      }
    });
  };
  requestPermission = () => {
    window.firebase
      .messaging()
      .requestPermission()
      .then(this.refreshNotificationToken.bind(this));
  };

  componentDidMount() {
    this.refreshNotificationToken();
  }

  gotoRide = ride => {
    this.props.history.push(`/ride/${ride.id}`);
  };

  render() {
    if (!this.props.ridesLoaded) {
      return (
        <Card className={this.props.classes.root}>
          <CardContent>
            <CircularProgress className={this.props.classes.loading} />
          </CardContent>
        </Card>
      );
    }

    return (
      <Card className={this.props.classes.root}>
        <CardContent>
          <List>
            {this.props.rides.map(ride => (
              <RideListItem
                key={ride.id}
                ride={ride}
                gotoRide={this.gotoRide}
              />
            ))}
          </List>
        </CardContent>
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
    const { gotoRide, ride } = this.props;
    return (
      <ListItem button onClick={() => gotoRide(ride)}>
        <ListItemText
          primary={`${ride.start} to ${ride.destination}`}
          secondary={`departure on ${ride.departure_time.toLocaleString()}`}
        />
        {this.renderRightIcon()}
      </ListItem>
    );
  }
}

export default withRouter(withStyles(styles)(HomeView));
