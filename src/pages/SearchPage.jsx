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
    // width: 200,
  }
}));

class SearchPage extends Component {
  state = {
    books: [],
    value: ''
  };

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

  searchBooks = event => {
    // api returns Array of bookitems if successful, else an object with error and empty items array
    console.log('searchinnn ', event.target, event.target.value);
    const query = event.target.value;
    this.setState({ value: query });
    BooksAPI.search(query, 20).then(results => {
      if (results.error) {
        console.log('uh-oh?');
        this.setState({ books: [] });
        return;
      }
      console.log('here are the results: ', results);
      this.setState({ books: results });
    });
  };

  render() {
    const { books, value } = this.state;

    const { classes } = this.props;

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
            value={value}
          />
          {books.length
            ? <Shelf
                items={books}
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
