import React, {useEffect, useMemo, useState} from "react"
import {connect} from "react-redux"
import {loadCourses} from "../../actions/coursesActions"
import {loadAuthors} from "../../actions/authorActions"
import PropTypes from "prop-types"
import CoursesList from "./CoursesList"
import {Redirect} from "react-router-dom"
import Spinner from "../common/Spinner"

const CoursesPage = ({courses, authors, loading, loadCourses, loadAuthors}) => {
  const [redirect, setRedirect] = useState(false)

  const memoCourses = useMemo(
    () =>
      courses.map(course => ({
        ...course,
        author: authors.find(author => author.id === course.authorId),
      })),
    [courses, authors],
  )

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
        <CoursesList courses={memoCourses} />
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
})(CoursesPage)
