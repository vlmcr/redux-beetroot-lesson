import {combineReducers} from "redux"
import books from "./books"
import categoriesBooks from "./categoriesBooks"
import activeBook from "./activeBook"
import coursesReducer from "./coursesReducer"

export default combineReducers({
  books, categoriesBooks, activeBook, coursesReducer
})