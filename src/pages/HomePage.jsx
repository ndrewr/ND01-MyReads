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

const shelves = {
  wantToRead: 'Want to Read',
  currentlyReading: 'Currently Reading',
  read: 'Read'
};

class HomePage extends Component {
  state = {
    books: []
  };

  async fetchBooks() {
    const books = await BooksAPI.getAll();
    console.log('book collection is...', books);
    this.setState({ books });
  }

  changeShelf = (targetBook: any, shelfType: string) => {
    console.log('hi', targetBook, shelfType);
    BooksAPI.update(targetBook, shelfType).then(response => {
      // response is an object with three arrays, one for each shelf
      console.log('updated! ', response);
      // this.setState({ books: response })
      const books = this.state.books.slice();
      const targetBookIndex = books.findIndex(
        book => book.id === targetBook.id
      );
      // const targetBook = books[targetBookIndex];
      console.log('target book...', targetBook);
      books[targetBookIndex] = Object.assign({}, targetBook, {
        shelf: shelfType
      });
      this.setState({ books });
    });
  };

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
              onChange={this.changeShelf}
            />
          )}
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;
