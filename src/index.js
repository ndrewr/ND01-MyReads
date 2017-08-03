// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import FullWidthGrid from './FullWidthGrid';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

// import App from './App'
import './index.css';

const Home = () =>
  <div>
    <Typography type="display4" color="inherit">
      Home.
    </Typography>
    <FullWidthGrid />
  </div>;

const Search = () =>
  <div>
    <Typography type="display4" color="inherit">
      Search.
    </Typography>
  </div>;

const App = () =>
  <Router>
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit">
            My Reads
          </Typography>
        </Toolbar>
      </AppBar>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </div>
  </Router>;

ReactDOM.render(<App />, document.getElementById('root'));
