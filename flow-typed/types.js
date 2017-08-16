declare type BookItem = {
  authors: Array<string>,
  description: string,
  id: string
  imageLinks: {
    thumbnail: string,
    smallThumbnail: string
  },
  maturityRating: string,
  pageCount: string,
  shelf: string,
  title: string,
};

declare type BooksApiError = {
  error: string,
  items: Array<any>
}
