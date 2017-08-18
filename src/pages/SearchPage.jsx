// @flow

import React, { Component } from 'react';

import * as BooksAPI from '../BooksAPI';

import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import Divider from '../modules/Divider';
import Shelf from '../modules/Shelf';

const styleSheet = createStyleSheet(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    '& input': {
      color: 'black',
      borderBottom: '1px solid lightgray'
    }
  }
}));

class SearchPage extends Component {
  state = {
    bookResults: [],
    query: ''
  };

  props: {
    classes: any,
    books: Array<BookItem>,
    shelves: ShelfMap,
    updateItem: (BookItem, string) => void
  };

  assignToShelf = (targetBook: any, shelfType: string) => {
    const books: Array<BookItem> = this.state.bookResults.slice();
    const targetBookIndex: number = books.findIndex(
      book => book.id === targetBook.id
    );
    books[targetBookIndex] = Object.assign({}, targetBook, {
      shelf: shelfType
    });

    this.setState({ bookResults: books });

    this.props.updateItem(targetBook, shelfType);
  };

  prepareResults = async (results: Array<BookItem>) => {
    const currentBookList: Array<BookItem> = this.props.books;
    const currentBookIds: Array<string> = currentBookList.map(book => book.id);
    const preparedResults: Array<BookItem> = results.map(resultBook => {
      const matchId = currentBookIds.indexOf(resultBook.id);
      return matchId >= 0 ? currentBookList[matchId] : resultBook;
    });

    this.setState({ bookResults: preparedResults });
  };

  searchBooks = async event => {
    let results: Array<BookItem> | BooksApiError = [];
    const MAX_RESULTS = 20;
    const query: string = event.target.value;

    this.setState({ query });

    if (query) {
      try {
        results = await BooksAPI.search(query, MAX_RESULTS);
      } catch (error) {
        console.log('There were problems fetching book results: ', error);
      }
    }

    if (!Array.isArray(results)) {
      this.setState({ bookResults: [] });
      return;
    }

    this.prepareResults(results);
  };

  render() {
    const { bookResults, query } = this.state;
    const { classes, shelves } = this.props;

    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography type="display4" color="inherit">
            Search!
          </Typography>
          <Divider icon="search" />
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
          {bookResults.length
            ? <Shelf
                items={bookResults}
                label="results:"
                shelves={shelves}
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
