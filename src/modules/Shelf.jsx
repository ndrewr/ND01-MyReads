// @flow

import React from 'react';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import Book from './Book';

const styleSheet = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    margin: '3rem 0 4rem'
  }
}));

const BookShelf = withStyles(
  styleSheet
)(
  ({
    classes,
    items,
    onChange
  }: {
    classes: any,
    items: Array<BookItem>,
    onChange: () => mixed
  }) =>
    <Grid container className={classes.root} justify="center" spacing={24}>
      {items.map((book, index) =>
        <Book key={book.title + index} book={book} onChange={onChange} />
      )}
    </Grid>
);

const EmptyShelf = () =>
  <Typography type="display1">Add books to this list!</Typography>;

const Shelf = ({
  items,
  label,
  onChange
}: {
  items: Array<BookItem>,
  label: string,
  onChange: () => mixed
}) =>
  <Grid container>
    <Grid item xs={12}>
      <Typography type="display2" color="inherit">
        {label}
      </Typography>
      <hr />
      {items.length
        ? <BookShelf items={items} onChange={onChange} />
        : <EmptyShelf />}
    </Grid>
  </Grid>;

export default withStyles(styleSheet)(Shelf);
