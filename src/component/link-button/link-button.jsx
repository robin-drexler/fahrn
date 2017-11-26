import React from 'react';
import { Button } from 'material-ui';
import { withRouter } from 'react-router-dom';

const LinkButton = ({ raised, color, className, href, history, children }) => (
  <Button
    raised={Boolean(raised)}
    color={color}
    className={className}
    onClick={() => history.push(href)}
  >
    {children}
  </Button>
);

LinkButton.defaultProps = {
  raised: false,
  color: 'primary',
  className: '',
};

export default withRouter(LinkButton);
