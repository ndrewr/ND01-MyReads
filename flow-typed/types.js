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
