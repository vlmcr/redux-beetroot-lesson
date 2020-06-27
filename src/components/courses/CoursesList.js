import React, {memo} from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

const CoursesList = ({courses, onDelete}) => {
  console.log("render");

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
          <td>{course.authorId} {course.author && course.author.name}</td>
          <td>{course.category}</td>
          <td>
            <button onClick={() => onDelete(course)}
                    className="btn btn-outline-danger">
              Delete course
            </button>
          </td>
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

export default memo(CoursesList)