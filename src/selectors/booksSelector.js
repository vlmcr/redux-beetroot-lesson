import { createSelector } from "reselect";

const getBooks = state => state.books;
const getCategories = state => state.categoriesBooks.categories;
const getSelectedCategory = state => state.categoriesBooks.selectedCategory;

export const booksSelector = createSelector(
  getBooks,
  getCategories,
  getSelectedCategory,
  (books, cats, selectedCategory) =>
    (selectedCategory
        ? books.filter((book) => book.categoryId === selectedCategory)
        : books
    ).map((book) => ({
      ...book,
      categoryTitle: cats[book.categoryId].title,
    }))
);
