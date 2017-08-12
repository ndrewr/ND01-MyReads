// @flow

import React, { Component } from 'react';

import * as BooksAPI from '../BooksAPI';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
// import { withStyles, createStyleSheet } from 'material-ui/styles';

import Shelf from '../modules/Shelf';

const shelves = {
  currentlyReading: 'Currently Reading',
  wantToRead: 'Want to Read',
  read: 'Read'
};

class HomePage extends Component {
  // state = {
  //   books: []
  // };
  props: {
    books: Array<BookItem>,
    update: (Array<BookItem>) => mixed
  };

  // async fetchBooks() {
  //   const books = await BooksAPI.getAll();
  //   console.log('book collection is...', books);
  //   this.setState({ books });
  // }

  changeShelf = (targetBook: any, shelfType: string) => {
    BooksAPI.update(targetBook, shelfType).then(response => {
      // const books = this.state.books.slice();
      const books: Array<BookItem> = this.props.books.slice();

      const targetBookIndex = books.findIndex(
        book => book.id === targetBook.id
      );
      books[targetBookIndex] = Object.assign({}, targetBook, {
        shelf: shelfType
      });
      // this.setState({ books });
      this.props.update(books);
    });
  };

  // componentDidMount() {
  //   this.fetchBooks();
  // }

  render() {
    // const { books } = this.state;
    const { books } = this.props;

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
              onChange={this.changeShelf}
            />
          )}
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;
