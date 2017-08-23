// @flow

import React from 'react';

// MaterialUI components
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

import { withStyles, createStyleSheet } from 'material-ui/styles';

// component styles
const styleSheet = createStyleSheet(theme => ({
  button: {
    margin: theme.spacing.unit
  }
}));

const FloatingActionButton = withStyles(
  styleSheet
)(({ children, classes, icon, ...rest }) =>
  <Button
    fab
    color="primary"
    aria-label="add"
    className={classes.button}
    {...rest}
  >
    <Icon>
      {icon}
    </Icon>
  </Button>
);

export default FloatingActionButton;
