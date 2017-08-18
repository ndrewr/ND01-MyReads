// @flow

import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import Divider from '../modules/Divider';
import Shelf from '../modules/Shelf';

class HomePage extends Component {
  props: {
    books: Array<BookItem>,
    shelves: ShelfMap,
    updateItem: (BookItem, string) => void
  };

  changeShelf = (targetBook: BookItem, shelfType: string) => {
    this.props.updateItem(targetBook, shelfType);
  };

  render() {
    const { books, shelves } = this.props;

    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography type="display4" color="inherit">
            Home.
          </Typography>
          <Divider />
          {Object.keys(shelves).map(shelfKey =>
            <Shelf
              key={shelfKey}
              items={books.filter(book => book.shelf === shelfKey)}
              label={shelves[shelfKey]}
              shelves={shelves}
              onChange={this.changeShelf}
            />
          )}
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;
