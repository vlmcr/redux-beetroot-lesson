import React, {useEffect, useMemo, useState} from "react"
import {connect} from "react-redux"
import {createCourse, loadCourses} from "../../actions/coursesActions"
import {loadAuthors} from "../../actions/authorActions"
import PropTypes from 'prop-types';
import CoursesList from "./CoursesList"
import { counterAction } from "../../actions"

const initForm = {
  title: "",
}

const CoursesPage = ({courses, authors, createCourse, loadCourses, loadAuthors, counter, counterAction}) => {
  const [form, setForm] = useState(initForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault();

    createCourse(form);
    setForm(initForm);
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
      <h1>Courses Page</h1>

      <button onClick={counterAction}>{counter}</button>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            onChange={handleChange}
            value={form.title}
            name="title"
            id="title"
            type="text"
            className="form-control"
          />
        </div>

        <button className="btn btn-primary">Send</button>
      </form>

      {/*<CoursesList courses={courses} />*/}

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

function mapStateToProps({courses, authors, counter}) {
  return {
    counter,
    authors,
    courses: authors.length === 0 ? [] : courses,
  }
}

export default connect(mapStateToProps, {createCourse, loadCourses, loadAuthors, counterAction})(CoursesPage)