// @flow

import React, { Component } from 'react';

import { randomSymbol } from '../utils';

// MaterialUI components
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Menu, { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';

// component styles
const styleSheet = createStyleSheet({
  card: {
    position: 'relative'
  },
  imageContainer: {
    textAlign: 'center',
    backgroundColor: 'black'
  },
  thumbnail: {
    height: 420,
    width: 'auto',
    padding: 20
  },
  innerCover: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: '0'
  },
  innerCover_actions: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center'
  },
  innerCover_title: {
    maxHeight: 96
  },
  innerCover_description: {
    minHeight: 120,
    maxHeight: 290,
    overflowY: 'auto'
  },
  outerCover: {
    position: 'relative',
    zIndex: '100'
  }
});

class Book extends Component {
  state = {
    anchorEl: null,
    showOptions: false,
    showMore: 0
  };

  props: {
    classes: any,
    book: BookItem,
    shelves: ShelfMap,
    onChange: (BookItem, string) => mixed
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

  showMoreInfo = () => {
    this.setState({ showMore: 200 });
  };

  hideMoreInfo = () => {
    this.setState({ showMore: 0 });
  };

  render() {
    const {
      classes,
      book: {
        authors,
        description,
        imageLinks = {},
        maturityRating,
        pageCount,
        shelf,
        title
      },
      shelves
    } = this.props;

    const { showMore } = this.state;

    return (
      <Grid item xs={12} sm={6} md={4}>
        <div className={classes.card}>
          <Card className={classes.outerCover}>
            <CardMedia className={classes.imageContainer}>
              <img
                className={classes.thumbnail}
                src={imageLinks.thumbnail || 'images/no-cover-placeholder.jpg'}
                alt="Book cover"
              />
            </CardMedia>
            <CardContent>
              <Typography type="headline" component="h2" noWrap title={title}>
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
                Add to Shelf
              </Button>
              <Button dense color="primary" onClick={this.showMoreInfo}>
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.innerCover} style={{ zIndex: showMore }}>
            <CardContent>
              <Typography type="headline" align="center">
                {title || 'No title'}
                <div style={{ textAlign: 'center' }}>
                  {randomSymbol()}
                </div>
              </Typography>
              <Typography
                component="p"
                paragraph
                className={classes.innerCover_description}
              >
                {description || 'Description pending...'}
              </Typography>
              <Typography type="subheading" align="right" gutterBottom>
                {authors ? authors.join(', ') : 'No authors listed'}
              </Typography>
              <Typography component="p" align="right" type="caption">
                {maturityRating || 'Rating pending...'}
              </Typography>
              <Typography component="p" align="right" type="caption">
                {pageCount || 'Page count pending...'}
              </Typography>
            </CardContent>
            <CardActions className={classes.innerCover_actions}>
              <Button dense color="primary" onClick={this.hideMoreInfo}>
                Close
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
        </div>
      </Grid>
    );
  }
}

export default withStyles(styleSheet)(Book);
