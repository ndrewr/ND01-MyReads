// @flow

import React from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from '../BooksAPI';

import Grid from 'material-ui/Grid';
// import { withStyles, createStyleSheet } from 'material-ui/styles';

import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';

import Navbar from './Navbar';

// const AppContainer = () =>
//   <Grid container>
//     <Navbar />
//     <Grid item xs={12}>
//       <Route exact path="/" component={HomePage} />
//       <Route path="/search" component={SearchPage} />
//     </Grid>
//   </Grid>;

class AppContainer extends React.Component {
  state = {
    books: []
  };

  updateBookList = (updatedBookList: Array<BookItem>): void => {
    this.setState({ books: updatedBookList });
  };

  async fetchBooks() {
    const books = await BooksAPI.getAll();
    console.log('book collection is...', books);
    this.setState({ books });
  }

  componentDidMount() {
    this.fetchBooks();
  }

  render() {
    const { books } = this.state;

    const renderHomePage = () =>
      <HomePage books={books} update={this.updateBookList} />;

    const renderSearchPage = () =>
      <SearchPage books={books} update={this.updateBookList} />;

    return (
      <Grid container>
        <Navbar />
        <Grid item xs={12}>
          <Route exact path="/" render={renderHomePage} />
          <Route path="/search" render={renderSearchPage} />
        </Grid>
      </Grid>
    );
  }
}

export default AppContainer;
