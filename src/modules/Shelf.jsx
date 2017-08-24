// @flow

import React from 'react';

// MaterialUI components
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Book from './Book';

const styleSheet = theme => ({
  root: {
    flexGrow: 1,
    margin: '3rem 0 4rem'
  }
});

const BookShelf = withStyles(
  styleSheet
)(
  ({
    classes,
    items,
    shelves,
    onChange
  }: {
    classes: any,
    items: Array<BookItem>,
    shelves: ShelfMap,
    onChange: () => mixed
  }) =>
    <Grid container className={classes.root} justify="center" spacing={24}>
      {items.map((book, index) =>
        <Book
          key={book.title + index}
          book={book}
          shelves={shelves}
          onChange={onChange}
        />
      )}
    </Grid>
);

const EmptyShelf = () =>
  <Typography type="display1">Add books to this list!</Typography>;

const Shelf = ({
  items,
  label,
  shelves,
  onChange
}: {
  items: Array<BookItem>,
  label: string,
  shelves: Array<string>,
  onChange: () => mixed
}) =>
  <Grid container>
    <Grid item xs={12}>
      <Typography type="display2" color="inherit">
        {label}
      </Typography>
      <hr />
      {items.length
        ? <BookShelf items={items} shelves={shelves} onChange={onChange} />
        : <EmptyShelf />}
    </Grid>
  </Grid>;

export default withStyles(styleSheet)(Shelf);
