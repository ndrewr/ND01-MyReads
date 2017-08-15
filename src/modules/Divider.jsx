// @flow

import React from 'react';

import Icon from 'material-ui/Icon';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet(theme => ({
  button: {
    margin: theme.spacing.unit
  },
  a: {
    '& button': {
      color: 'black'
    }
  },
  divider: {
    width: '100%',
    height: '80px',
    textAlign: 'center'
  }
}));

const Divider = ({ classes, icon }) =>
  <div className={classes.divider}>
    <Icon>
      {icon || 'tag faces'}
    </Icon>
  </div>;

export default withStyles(styleSheet)(Divider);
