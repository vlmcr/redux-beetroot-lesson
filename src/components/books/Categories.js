import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {mapToArr} from "../../utils"
import {selectCategory} from "../../actions"

const Categories = ({categories, selectCategory}) => (
  <ul className="list-group">
    {categories.map(category => (
      <li key={category._id}
          onClick={() => selectCategory(category._id)}
          className="list-group-item">
        {category.title}
      </li>
    ))}
  </ul>
)

Categories.propsTypes = {
  cats: PropTypes.array.isRequired,
}

Categories.defaultProps = {
  cats: [],
}

function mapStateToProps(state) {
  return {
    categories: mapToArr(state.categoriesBooks.categories)
  }
}

export default connect(mapStateToProps, { selectCategory })(Categories)