import {combineReducers} from "redux"
import books from "./books"
import categoriesBooks from "./categoriesBooks"
import activeBook from "./activeBook"
import courses from "./coursesReducer"
import authors from "./authorsReducer"

export default combineReducers({
  books, categoriesBooks, activeBook, courses, authors
})