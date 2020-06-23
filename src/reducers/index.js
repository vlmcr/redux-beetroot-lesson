import {combineReducers} from "redux"
import books from "./books"
import categoriesBooks from "./categoriesBooks"
import activeBook from "./activeBook"
import courses from "./coursesReducer"
import authors from "./authorsReducer"
import counter from "./counterReducer"

export default combineReducers({
  books, categoriesBooks, activeBook, courses, authors, counter
})