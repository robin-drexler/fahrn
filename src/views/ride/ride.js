import * as React from 'react';
import {
  Card,
  CardContent,
  CircularProgress,
  Typography,
  withStyles,
} from 'material-ui';
import styles from '../../styles';

class RideView extends React.Component {
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
    if (!this.props.ride) {
      return (
        <Card className={this.props.classes.root}>
          <CardContent>
            <Typography>
              Could not find the ride you were looking for
            </Typography>
          </CardContent>
        </Card>
      );
    }

    const { ride } = this.props;
    return (
      <Card className={this.props.classes.root}>
        <CardContent>
          <Typography type="headline">
            {ride.start} to {ride.destination}
          </Typography>
          <Typography>
            departure on {ride.departure_time.toLocaleString()}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(RideView);
