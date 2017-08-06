// @flow

import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';

// import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
// import Paper from 'material-ui/Paper';

import Shelf from '../modules/Shelf';

// const books = [
//   { title: 'Moby Dick' },
//   { title: 'Wuthering Heights' },
//   { title: 'Freakonomics' },
//   { title: 'Goldfinger' }
// ];

// const shelves = ['Currently Reading', 'Want to Read', 'Finished Reading'];

const shelves = {
  wantToRead: 'Want to Read',
  currentlyReading: 'Currently Reading',
  read: 'Read'
};

class HomePage extends Component {
  state = {
    books: []
  };

  // constructor() {
  //   super();
  // this.state = {
  //   books: books // TODO: remove dummy data
  // };
  // }

  async fetchBooks() {
    const books = await BooksAPI.getAll();
    console.log('book collection is...', books);
    this.setState({ books });
  }

  componentDidMount() {
    this.fetchBooks();
  }

  render() {
    const { books } = this.state;

    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography type="display4" color="inherit">
            Home.
          </Typography>
          {Object.keys(shelves).map(shelfKey =>
            <Shelf
              key={shelfKey}
              items={books.filter(book => book.shelf === shelfKey)}
              label={shelves[shelfKey]}
              type={shelfKey}
            />
          )}
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;
