import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CircularProgress } from 'material-ui/Progress';

export default class extends React.Component {
  render() {
    if (!this.props.userLoaded) {
      return <CircularProgress />;
    }

    return (
      <Route
        render={() => {
          if (this.props.user) {
            if (this.props.render) {
              const props = {
                computedMatch: this.props.computedMatch,
                location: this.props.location,
                path: this.props.path,
              };
              return this.props.render(props);
            }

            return React.createElement(this.props.component);
          }

          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: this.props.location },
              }}
            />
          );
        }}
      />
    );
  }
}
