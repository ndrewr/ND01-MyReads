// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Icon from 'material-ui/Icon';

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

const LinkButton = withStyles(styleSheet)(({ classes, path, label }) =>
  <Link to={path}>
    <Button raised color=" contrast" className={classes.button}>
      {label}
    </Button>
  </Link>
);

const Navbar = () =>
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography type="display" color="inherit">
        My Reads
      </Typography>
      <LinkButton path="/" label="Home" />
      <LinkButton path="search" label="Search" />
    </Toolbar>
  </AppBar>;

export default Navbar;
