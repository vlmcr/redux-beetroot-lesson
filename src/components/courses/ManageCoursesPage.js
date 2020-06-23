import React, {useEffect, useMemo, useState} from "react"
import {connect} from "react-redux"
import {createCourse, loadCourses} from "../../actions/coursesActions"
import {loadAuthors} from "../../actions/authorActions"
import PropTypes from 'prop-types';
import CoursesList from "./CoursesList"
import { counterAction } from "../../actions"

const initCourse = {
  id: null,
  title: "",
  authorId: "",
  category: "",
}

const CoursesPage = ({courses, authors, createCourse, loadCourses, loadAuthors, counter, counterAction}) => {
  const [course, setCourse] = useState(initCourse);

  const handleChange = e => {
    const { name, value } = e.target;
    setCourse(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault();

    createCourse(course);
    setCourse(initCourse);
  }

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

  }, []);

  return (
    <div className="container mt-5">
      <h1>Manage Courses Page</h1>
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

function mapStateToProps({courses, authors}) {
  return {
    authors,
    courses: authors.length === 0 ? [] : courses,
    course: initCourse
  }
}

export default connect(mapStateToProps, {createCourse, loadCourses, loadAuthors, counterAction})(CoursesPage)