import { createSelector } from "reselect";

const books = state => state.books;
const cats = state => state.categoriesBooks.categories;

export const booksSelector = createSelector(
  books,
  cats,
  (books, cats) => books.map(book => ({
    ...book,
    categoryTitle: cats[book.categoryId].title,
  }))
)