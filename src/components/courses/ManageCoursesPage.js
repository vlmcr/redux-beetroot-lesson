import React, {useEffect, useState} from "react"
import {connect} from "react-redux"
import {
  createCourse,
  loadCourses,
  saveCoursesAction,
} from "../../actions/coursesActions"
import {loadAuthors} from "../../actions/authorActions"
import PropTypes from "prop-types"
import CourseForm from "./CourseForm"
import Spinner from "../common/Spinner"
import {toast} from "react-toastify"

const initCourse = {
  id: null,
  title: "",
  authorId: "",
  category: "",
}

const ManageCoursesPage = ({
  courses,
  authors,
  createCourse,
  loadCourses,
  loadAuthors,
  saveCoursesAction,
  history,
  loading,
  ...props
}) => {
  const [course, setCourse] = useState({...props.course})
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const {name, value} = e.target
    setCourse(prev => ({
      ...prev,
      [name]: name === "authorId" ? Number(value) : value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    saveCoursesAction(course).then(() => {
      toast.success("Course saved")
      history.push("/courses")
    })
  }

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(() => {
        alert("Loading courses failed")
      })
    }

    if (authors.length === 0) {
      loadAuthors().catch(() => {
        alert("Loading authors failed")
      })
    }
  }, [])

  return (
    <div className="container mt-5">
      <h1>Manage Courses Page</h1>

      {loading ? (
        <Spinner />
      ) : (
        <CourseForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          authors={authors}
          course={course}
          errors={errors}
        />
      )}
    </div>
  )
}

ManageCoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired,
}

ManageCoursesPage.defaultProps = {
  courses: [],
}

function mapStateToProps({courses, authors, apiCallsInProgress}, ownProps) {
  const slug = ownProps.match.params.slug

  return {
    authors,
    courses: authors.length === 0 ? [] : courses,
    course:
      slug && courses.length
        ? courses.find(course => course.slug === slug)
        : initCourse,
    loading: apiCallsInProgress > 0,
  }
}

export default connect(mapStateToProps, {
  createCourse,
  loadCourses,
  loadAuthors,
  saveCoursesAction,
})(ManageCoursesPage)
