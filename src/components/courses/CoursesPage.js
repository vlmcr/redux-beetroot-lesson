import React, {useEffect, useMemo, useState} from "react"
import {connect} from "react-redux"
import {
  loadCourses,
  deleteCoursesAction,
  restoreCourseAction,
} from "../../actions/coursesActions"
import {loadAuthors} from "../../actions/authorActions"
import PropTypes from "prop-types"
import CoursesList from "./CoursesList"
import {Redirect} from "react-router-dom"
import Spinner from "../common/Spinner"
import {toast} from "react-toastify"

const CoursesPage = ({
  courses,
  authors,
  loading,
  loadCourses,
  loadAuthors,
  deleteCoursesAction,
  restoreCourseAction,
}) => {
  const [redirect, setRedirect] = useState(false)

  const memoCourses = useMemo(
    () =>
      courses.map(course => ({
        ...course,
        author: authors.find(author => author.id === course.authorId),
      })),
    [courses, authors],
  )

  const handleDelete = async course => {
    toast.success("Course deleted")
    try {
      await deleteCoursesAction(course)
    } catch (err) {
      toast.error("Delete failed " + err.message, {autoClose: false})
      restoreCourseAction(course)
    }
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
      <h1>Courses Page</h1>

      <button
        onClick={() => setRedirect(true)}
        className="btn btn-primary my-3"
      >
        Add Course
      </button>

      {redirect && <Redirect to={"/course"} />}

      {loading && <Spinner />}

      {memoCourses.length ? (
        <CoursesList onDelete={handleDelete} courses={memoCourses} />
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  )
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired,
}

CoursesPage.defaultProps = {
  courses: [],
}

function mapStateToProps({courses, authors, apiCallsInProgress}) {
  return {
    authors,
    courses: authors.length === 0 ? [] : courses,
    loading: apiCallsInProgress > 0,
  }
}

export default connect(mapStateToProps, {
  loadCourses,
  loadAuthors,
  deleteCoursesAction,
  restoreCourseAction,
})(CoursesPage)
