// @flow

import React, { Component } from 'react';

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
    books: []
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

  render() {
    const { books } = this.state;

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

// export default SearchPage;
export default withStyles(styleSheet)(SearchPage);
