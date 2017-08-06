// @flow

import React from 'react';

import { withStyles, createStyleSheet } from 'material-ui/styles';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
// import Typography from 'material-ui/Typography';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
// import reptileImage from 'docs/src/assets/images/cards/contemplative-reptile.jpg';

type BookItem = {
  title: string,
  description: string,
  imageLinks: {
    thumbnail: string,
    smallThumbnail: string
  },
  authors: Array<string>
};

const styleSheet = createStyleSheet({
  card: {
    // width: 300,
  },
  thumbnail: {
    height: 420,
    width: 'auto',
    padding: 20
  }
});

function Book({ classes, book }: { classes: any, book: BookItem }) {
  const { authors, imageLinks, title } = book;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia>
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
          <Button dense color="primary">
            Add this book
          </Button>
          <Button dense color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

// const styleSheet = createStyleSheet(theme => ({
//   book: {
//     padding: 16,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     height: 300
//   }
// }));

// const Book = ({ classes, book }: { classes: any, book: BookItem }) =>
//   <Grid item xs={12} sm={6} md={3} lg={4}>
//     <Paper className={classes.book}>
//       {book.title}
//     </Paper>
//   </Grid>;

const StyledBook = withStyles(styleSheet)(Book);

export default StyledBook;
