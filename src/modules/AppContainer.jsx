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

  shelves: ShelfMap = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'Read'
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
    const { shelves, updateBook, state: { books } } = this;

    const pageStyles = {
      padding: '2% 5%',
      marginTop: 64
    };

    const renderHomePage = () =>
      <HomePage books={books} shelves={shelves} updateItem={updateBook} />;

    const renderSearchPage = () =>
      <SearchPage books={books} shelves={shelves} updateItem={updateBook} />;

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
