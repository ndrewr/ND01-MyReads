// @flow

import React, { Component } from 'react';

import * as BooksAPI from '../BooksAPI';

import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import Shelf from '../modules/Shelf';

const styleSheet = createStyleSheet(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
}));

class SearchPage extends Component {
  state = {
    bookResults: [],
    query: ''
  };

  props: {
    books: Array<BookItem>,
    classes: any,
    update: (Array<BookItem>) => void
  };

  // constructor(props) {
  //   super(props)
  //   this.searchBooks = this.searchBooks.bind(this)
  // }

  assignToShelf = (targetBook: any, shelfType: string) => {
    console.log('assign this book to a shelf!');
    // BooksAPI.update(targetBook, shelfType).then(response => {
    //   const books = this.state.books.slice();
    //   const targetBookIndex = books.findIndex(
    //     book => book.id === targetBook.id
    //   );
    //   books[targetBookIndex] = Object.assign({}, targetBook, {
    //     shelf: shelfType
    //   });
    //   this.setState({ books });
    // });
  };

  prepareResults = async results => {
    const bookList = await BooksAPI.getAll();

    // this.props.update(results);
    this.setState({ bookResults: results });
  };

  searchBooks = async event => {
    const query: string = event.target.value;
    this.setState({ query });

    const MAX_RESULTS = 20;
    let results;

    try {
      results = await BooksAPI.search(query, MAX_RESULTS);
    } catch (error) {
      console.log('There were problems fetching book results: ', error);
    }

    console.log('here are the results: ', results);

    if (!results || results.error) {
      this.setState({ bookResults: [] });
      return;
    }

    // this.setState({ query, books: results });
    this.prepareResults(results);
  };

  render() {
    const { bookResults, query } = this.state;
    const { books, classes, update } = this.props;
    // const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography type="display4" color="inherit">
            Search!
          </Typography>
          <TextField
            id="margin-normal"
            className={classes.textField}
            placeholder="?"
            margin="normal"
            fullWidth
            autoFocus
            onChange={this.searchBooks}
            value={query}
          />
          {books.length
            ? <Shelf
                items={bookResults}
                label="results:"
                onChange={this.assignToShelf}
              />
            : <Typography type="display1" color="inherit">
                nothing yet. type something?
              </Typography>}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styleSheet)(SearchPage);
