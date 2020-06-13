import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {selectBook} from "../../actions"

const Book = ({book, isActive, selectBook, category}) => (
  <li className="list-group-item">
    <h2 onClick={() => selectBook(book._id)}>Title: {book.title}</h2>
    <p>Category: {book.categoryId}</p>
    <p>Category: {category.title}</p>
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
  category: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
  return {
    isActive: state.activeBook === ownProps.book._id,
    category: state.categoriesBooks.categories[ownProps.book.categoryId]
  }
}

export default connect(mapStateToProps, {selectBook})(Book)