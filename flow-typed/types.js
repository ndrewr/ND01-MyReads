declare type BookItem = {
  title: string,
  description: string,
  imageLinks: {
    thumbnail: string,
    smallThumbnail: string
  },
  authors: Array<string>,
  shelf: string,
  id: string
};

declare type BooksApiError = {
  error: string,
  items: Array<any>
}
