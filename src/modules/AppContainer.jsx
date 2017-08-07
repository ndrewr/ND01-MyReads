// @flow

import React from 'react';
import { Route } from 'react-router-dom';
// import { withStyles, createStyleSheet } from 'material-ui/styles';

import Grid from 'material-ui/Grid';

import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';

import Navbar from './Navbar';

const AppContainer = () =>
  <Grid container>
    <Navbar />
    <Grid item xs={12}>
      <Route exact path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
    </Grid>
  </Grid>;

export default AppContainer;
