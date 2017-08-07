// @flow

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, createStyleSheet } from 'material-ui/styles';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import Book from './Book';

const styleSheet = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  }
}));

const ItemShelf = ({ classes, items, onChange }) =>
  <Grid container className={classes.root} justify="center" spacing={24}>
    {items.map((book, index) =>
      <Book key={book.title + index} book={book} onChange={onChange} />
    )}
  </Grid>;

const StyledShelf = withStyles(styleSheet)(ItemShelf);

const EmptyShelf = () =>
  <Typography type="display1">Add books to this list!</Typography>;

const Shelf = ({ classes, items, label, type, onChange }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography type="display2" color="inherit">
          {label}
        </Typography>
        <hr />
        {items.length
          ? <StyledShelf items={items} onChange={onChange} />
          : <EmptyShelf />}
      </Grid>
    </Grid>
  );
};

Shelf.propTypes = {
  classes: PropTypes.object,
  items: PropTypes.array,
  type: PropTypes.string,
  onChange: PropTypes.func
};

export default withStyles(styleSheet)(Shelf);
