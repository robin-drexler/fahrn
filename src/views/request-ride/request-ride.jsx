import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import {
  Button,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Input,
} from 'material-ui';

const styles = () => ({
  paper: {
    padding: '16px',
  },
  headline: {
    marginBottom: '24px',
  },
  field: {
    width: '100%',
    marginBottom: '16px',
  },
});

class RequestRide extends React.Component {
  state = {
    submitted: false,
    start: '',
    destination: '',
    departure_time: '',
  };

  handleChange = field => ({ currentTarget }) => {
    this.setState({ [field]: currentTarget.value });
  };

  submit = evnt => {
    evnt.preventDefault();
    window.firebase
      .firestore()
      .collection('rides')
      .add({
        start: this.state.start,
        destination: this.state.destination,
        departure_time: this.state.departure_time,
        guest_id: window.firebase.auth().currentUser.uid,
        driver_id: '',
        fulfilled: false,
      })
      .then(() =>
        this.setState({
          submitted: true,
          start: '',
          destination: '',
          departure_time: '',
        })
      );
  };

  render() {
    return (
      <div className="App">
        <Paper className={this.props.classes.paper}>
          {this.state.submitted ? (
            <div>
              <Typography className={this.props.classes.headline}>
                Great, your request was stored!
              </Typography>
              <Link to="/home">Back</Link>
            </div>
          ) : (
            <div>
              <Typography className={this.props.classes.headline}>
                Request a ride
              </Typography>
              <form onSubmit={this.submit} method="post">
                <FormControl fullWidth className={this.props.classes.field}>
                  <InputLabel htmlFor="start">From</InputLabel>
                  <Input
                    id="start"
                    value={this.state.start}
                    onChange={this.handleChange('start')}
                  />
                </FormControl>
                <FormControl fullWidth className={this.props.classes.field}>
                  <InputLabel htmlFor="destination">To</InputLabel>
                  <Input
                    id="destination"
                    value={this.state.destination}
                    onChange={this.handleChange('destination')}
                  />
                </FormControl>
                <FormControl fullWidth className={this.props.classes.field}>
                  <InputLabel htmlFor="departure_time">
                    Point of time
                  </InputLabel>
                  <Input
                    id="departure_time"
                    value={this.state.departure_time}
                    onChange={this.handleChange('departure_time')}
                  />
                </FormControl>
                <Button raised color="primary" onClick={this.submit}>
                  Submit
                </Button>
              </form>
            </div>
          )}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(RequestRide);
