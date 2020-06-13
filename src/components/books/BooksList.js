import React from "react"
import PropTypes from "prop-types"
import Book from "./Book"
import {booksSelector} from "../../selectors/booksSelector"
import {connect} from "react-redux"

const BooksList = ({books = []}) => (
  <ul className="list-group">
    {books.map(book => (
      <Book key={book._id} book={book} />
    ))}
  </ul>
)

BooksList.propsTypes = {
  books: PropTypes.array,
}

function mapStateToProps(state) {
  return {
    books: booksSelector(state)
  }
}

export default connect(mapStateToProps)(BooksList)