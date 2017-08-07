// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppContainer from './modules/AppContainer';

import './styles/index.css';

const App = () =>
  <Router>
    <AppContainer />
  </Router>;

ReactDOM.render(<App />, document.getElementById('root'));
