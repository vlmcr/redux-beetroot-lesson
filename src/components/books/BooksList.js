import React from "react"
import PropTypes from "prop-types"
import Book from "./Book"

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

export default BooksList