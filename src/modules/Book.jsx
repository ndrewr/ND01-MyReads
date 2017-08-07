// @flow

import React, { Component } from 'react';

import { withStyles, createStyleSheet } from 'material-ui/styles';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
// import Typography from 'material-ui/Typography';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Menu, { MenuItem } from 'material-ui/Menu';

type BookItem = {
  title: string,
  description: string,
  imageLinks: {
    thumbnail: string,
    smallThumbnail: string
  },
  authors: Array<string>,
  shelf: string
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
      console.log('clicked on menu item!');
      onChange(book, shelfType);
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
    const { classes, book: { authors, imageLinks, title, shelf } } = this.props;

    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia className={classes.imageContainer}>
            <img
              className={classes.thumbnail}
              src={imageLinks.thumbnail}
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
          <MenuItem
            selected={'currentlyReading' === shelf}
            onClick={this.handleClick('currentlyReading')}
          >
            Currently Reading
          </MenuItem>
          <MenuItem
            selected={'wantToRead' === shelf}
            onClick={this.handleClick('wantToRead')}
          >
            Want to Read
          </MenuItem>
          <MenuItem
            selected={'read' === shelf}
            onClick={this.handleClick('read')}
          >
            Read
          </MenuItem>
        </Menu>
      </Grid>
    );
  }
}

const StyledBook = withStyles(styleSheet)(Book);

export default StyledBook;
