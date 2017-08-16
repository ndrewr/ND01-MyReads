// @flow

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from '../BooksAPI';

import Grid from 'material-ui/Grid';

import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';

import BottomNav from './BottomNav';
import Navbar from './Navbar';

class AppContainer extends Component {
  state = {
    books: []
  };

  updateBookList = (updatedBookList: Array<BookItem>) => {
    this.setState({ books: updatedBookList });
  };

  updateBook = (targetBook: BookItem, shelfType: string) => {
    BooksAPI.update(targetBook, shelfType).then(response => {
      const books: Array<BookItem> = this.state.books.slice();
      const updatedBook = Object.assign({}, targetBook, { shelf: shelfType });
      const targetBookIndex: number = books.findIndex(
        (book: BookItem) => book.id === targetBook.id
      );

      if (targetBookIndex >= 0) {
        books[targetBookIndex] = updatedBook;
      } else {
        books.push(updatedBook);
      }

      console.log(
        'updateBook called: here is the updated list...',
        books,
        targetBookIndex
      );
      this.updateBookList(books);
    });
  };

  async fetchBooks() {
    const books: Array<BookItem> = await BooksAPI.getAll();
    this.setState({ books });
  }

  componentDidMount() {
    this.fetchBooks();
  }

  render() {
    const { books } = this.state;

    const pageStyles = {
      padding: '2% 5%'
    };

    const renderHomePage = () =>
      <HomePage books={books} updateItem={this.updateBook} />;

    const renderSearchPage = () =>
      <SearchPage books={books} updateItem={this.updateBook} />;

    return (
      <Grid container>
        <Navbar />
        <Grid item xs={12} style={pageStyles}>
          <Route exact path="/" render={renderHomePage} />
          <Route path="/search" render={renderSearchPage} />
        </Grid>
        <BottomNav />
      </Grid>
    );
  }
}

export default AppContainer;
