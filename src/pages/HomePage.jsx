// @flow

import React from 'react';

// MaterialUI components
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import Divider from '../modules/Divider';
import Shelf from '../modules/Shelf';

const HomePage = ({
  books,
  shelves,
  updateItem
}: {
  books: Array<BookItem>,
  shelves: ShelfMap,
  updateItem: (BookItem, string) => mixed
}) => {
  const changeShelf = (targetBook: BookItem, shelfType: string) => {
    updateItem(targetBook, shelfType);
  };

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
            onChange={changeShelf}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default HomePage;
