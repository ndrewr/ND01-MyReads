// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// import { withStyles, createStyleSheet } from 'material-ui/styles';
// import Grid from 'material-ui/Grid';
// import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography'

import AppContainer from './modules/AppContainer';

import './styles/index.css';

const App = () =>
  <Router>
    <AppContainer />
  </Router>;

ReactDOM.render(<App />, document.getElementById('root'));
