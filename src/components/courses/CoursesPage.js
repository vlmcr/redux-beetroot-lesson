import React, {useEffect, useState} from "react"
import {connect} from "react-redux"
import {createCourse, loadCourses} from "../../actions/coursesActions"
import {loadAuthors} from "../../actions/authorActions"
import PropTypes from 'prop-types';
import CoursesList from "./CoursesList"

const initForm = {
  title: "",
}

const CoursesPage = ({courses, authors, createCourse, loadCourses, loadAuthors}) => {
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

  useEffect(() => {
    loadCourses().catch(() => {
      alert("Loading courses failed")
    })

    loadAuthors().catch(() => {
      alert("Loading authors failed")
    })
  }, []);

  return (
    <div className="container mt-5">
      <h1>Courses Page</h1>

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

      <CoursesList courses={courses} />
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
    courses: courses.map(course => ({
      ...course,
      author: authors.find(a => a.id === course.authorId)
    }))
  }
}

export default connect(mapStateToProps, {createCourse, loadCourses, loadAuthors})(CoursesPage)