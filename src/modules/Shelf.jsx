// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  book: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 300
  }
}));

const Book = ({ classes, title }) =>
  <Grid item xs={12} sm={6} md={3} lg={4}>
    <Paper className={classes.book}>
      {title}
    </Paper>
  </Grid>;

const StyledBook = withStyles(styleSheet)(Book);

function Shelf({ classes, items, label }) {
  return (
    <div className={classes.root}>
      <Paper>
        <Typography type="display2" color="inherit">
          {label}
        </Typography>
        <hr />
        <Grid container gutter={24}>
          <Grid item xs={12}>
            <Grid container>
              {items.map((book, index) =>
                <StyledBook key={book.title + index} title={book.title} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

Shelf.propTypes = {
  classes: PropTypes.object,
  items: PropTypes.array
};

export default withStyles(styleSheet)(Shelf);
