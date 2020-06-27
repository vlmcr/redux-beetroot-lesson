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
import CourseFormikForm from "./CourseFormikForm"

const initCourse = {
  id: null,
  title: "",
  authorId: "",
  category: "",
}

export const ManageCoursesPage = ({
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
  const [saving, setSaving] = useState(false)

  const handleChange = e => {
    const {name, value} = e.target
    setCourse(prev => ({
      ...prev,
      [name]: name === "authorId" ? Number(value) : value,
    }))
    setErrors(prev => ({...prev, [name]: ""}))
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!formIsValid()) {
      return
    }

    saveCourse(course)
  }

  const saveCourse = course => {
    setSaving(true)
    saveCoursesAction(course)
      .then(() => {
        toast.success("Course saved")
        history.push("/courses")
      })
      .catch(err => {
        setSaving(false)
        setErrors({onSave: err.message})
      })
  }

  function formIsValid() {
    const {title, authorId, category} = course
    const errors = {}
    if (!title) errors.title = "This field cannot be blank"
    if (!authorId) errors.authorId = "This field cannot be blank"
    if (!category) errors.category = "This field cannot be blank"

    setErrors(errors)
    return Object.keys(errors).length === 0
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
        // <CourseForm
        //   handleSubmit={handleSubmit}
        //   handleChange={handleChange}
        //   authors={authors}
        //   course={course}
        //   errors={errors}
        //   saving={saving}
        // />
        <CourseFormikForm
          handleSubmit={saveCourse}
          handleChange={handleChange}
          authors={authors}
          course={course}
          errors={errors}
          saving={saving}
        />
      )}
    </div>
  )
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
