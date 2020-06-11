import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {selectBook} from "../../actions"

const Book = ({book, isActive, selectBook}) => (
  <li className="list-group-item">
    <h2 onClick={() => selectBook(book._id)}>Title: {book.title}</h2>
    <p>Category: {book.categoryId}</p>
    {isActive && <p>{book.desc}</p>}
  </li>
)

Book.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }),
  isActive: PropTypes.bool,
}

function mapStateToProps(state, ownProps) {
  return {
    isActive: state.activeBook === ownProps.book._id
  }
}

export default connect(mapStateToProps, {selectBook})(Book)