import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

const CoursesList = ({courses}) => {
  if (!courses.length) {
    return null;
  }

  return (
    <table className="table">
      <thead>
      <tr><th /><th>Title</th> <th>Author</th><th>Category</th></tr>
      </thead>
      <tbody>
      {courses.map((course, index) => (
        <tr key={course.id}>
          <td>{index + 1}</td>
          <td><Link to={`/course/${course.slug}`}>{course.title}</Link></td>
          <td>{course.authorId}</td>
          <td>{course.category}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired,
}

CoursesList.defaultProps = {
  courses: [],
}

export default CoursesList