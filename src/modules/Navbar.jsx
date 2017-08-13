// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Navbar = () =>
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography type="title" color="inherit">
        My Reads
      </Typography>
      <Button raised color="contrast">
        <Link to="/">Home</Link>
      </Button>
      <Button raised color="contrast">
        <Link to="/search">Search</Link>
      </Button>
    </Toolbar>
  </AppBar>;

export default Navbar;
