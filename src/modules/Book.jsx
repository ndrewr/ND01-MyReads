// @flow

import React, { Component } from 'react';

import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Menu, { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const shelves = {
  currentlyReading: 'Currently Reading',
  wantToRead: 'Want to Read',
  read: 'Read'
};

const styleSheet = createStyleSheet({
  card: {
    // width: 300,
  },
  imageContainer: {
    textAlign: 'center',
    backgroundColor: 'black'
  },
  thumbnail: {
    height: 420,
    width: 'auto',
    padding: 20
  }
});

class Book extends Component {
  state = {
    anchorEl: null,
    showOptions: false
  };

  props: {
    classes: any,
    book: BookItem,
    onChange: any
  };

  handleClick = (shelfType: string) => {
    const { book, onChange } = this.props;

    return () => {
      if (shelfType !== book.shelf) {
        onChange(book, shelfType);
      }
      this.handleMenuClose();
    };
  };

  handleMenuOpen = event => {
    this.setState({ showOptions: true, anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ showOptions: false });
  };

  render() {
    const {
      classes,
      book: { authors, imageLinks = {}, title, shelf }
    } = this.props;
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia className={classes.imageContainer}>
            <img
              className={classes.thumbnail}
              src={
                imageLinks.thumbnail ||
                'http://www.speakers-pro.com/wp-content/uploads/2014/04/no-cover-placeholder.jpg'
              }
              alt="Book cover"
            />
          </CardMedia>
          <CardContent>
            <Typography type="headline" component="h2">
              {title || 'No title'}
            </Typography>
            <Typography component="p">
              {authors ? authors.join(', ') : 'No authors listed'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              dense
              color="primary"
              aria-owns={this.state.showOptions ? 'options-menu' : null}
              aria-haspopup="true"
              onClick={this.handleMenuOpen}
            >
              Add this book
            </Button>
            <Button dense color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Menu
          id="options-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.showOptions}
          onRequestClose={this.handleMenuClose}
        >
          {Object.keys(shelves).map(shelfType =>
            <MenuItem
              key={shelfType}
              selected={shelfType === shelf}
              onClick={this.handleClick(shelfType)}
            >
              {shelves[shelfType]}
            </MenuItem>
          )}
        </Menu>
      </Grid>
    );
  }
}

const StyledBook = withStyles(styleSheet)(Book);

export default StyledBook;
