declare type BookItem = {
  authors: Array<string>,
  description: string,
  id: string,
  imageLinks: {
    thumbnail: string,
    smallThumbnail: string
  },
  maturityRating: string,
  pageCount: string,
  shelf: string,
  title: string,
}

declare type BooksApiError = {
  error: string,
  items: Array<any>
}

declare type ShelfMap = {
  [shelfType: string]: string
}

declare type UpdateResponse = {
  currentlyReading: Array<string>,
  wantToRead: Array<string>,
  read: Array<string>
} | null
