// @flow

import React from 'react';

import BottomNavigation, {
  BottomNavigationButton
} from 'material-ui/BottomNavigation';
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
  }
}));

const BottomNav = () =>
  <BottomNavigation
    value={'Github'}
    style={{ width: '100%', textAlign: 'center' }}
  >
    <BottomNavigationButton
      icon={<Icon>cloud</Icon>}
      href="https://github.com/uncleoptimus/ND01-MyReads"
      label="Git It"
      showLabel
    />
  </BottomNavigation>;

export default withStyles(styleSheet)(BottomNav);
