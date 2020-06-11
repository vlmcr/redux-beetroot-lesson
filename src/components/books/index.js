import {connect} from "react-redux"
import BooksList from "./BooksList"

function mapStateToProps(state) {
  return {
    books: state.books,
  }
}

export default connect(mapStateToProps)(BooksList)