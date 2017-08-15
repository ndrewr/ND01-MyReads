// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  MuiThemeProvider,
  createMuiTheme,
  createPalette
} from 'material-ui/styles';

import AppContainer from './modules/AppContainer';

import './styles/index.css';

const theme = createMuiTheme({
  palette: createPalette({
    type: 'light'
  })
});

const App = () =>
  <MuiThemeProvider theme={theme}>
    <Router>
      <AppContainer />
    </Router>
  </MuiThemeProvider>;

ReactDOM.render(<App />, document.getElementById('root'));
