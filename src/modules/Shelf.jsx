// @flow

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import Book from './Book';

const styleSheet = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  }
}));

const ItemShelf = ({ classes, items }) =>
  <Grid container className={classes.root} justify="center" spacing={24}>
    {items.map((book, index) => <Book key={book.title + index} book={book} />)}
  </Grid>;

const StyledShelf = withStyles(styleSheet)(ItemShelf);

const EmptyShelf = () =>
  <Typography type="display1">Add books to this list!</Typography>;

const Shelf = ({ classes, items, label }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography type="display2" color="inherit">
          {label}
        </Typography>
        <hr />
        {items.length ? <StyledShelf items={items} /> : <EmptyShelf />}
      </Grid>
    </Grid>
  );
};

Shelf.propTypes = {
  classes: PropTypes.object,
  items: PropTypes.array
};

export default withStyles(styleSheet)(Shelf);
