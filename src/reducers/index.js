import {combineReducers} from "redux"
import books from "./books"
import categoriesBooks from "./categoriesBooks"
import activeBook from "./activeBook"

export default combineReducers({
  books, categoriesBooks, activeBook
})