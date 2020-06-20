import React, {useEffect, useState} from "react"
import {connect} from "react-redux"
import {createCourse, loadCourses} from "../../actions/coursesActions"
import PropTypes from 'prop-types';

const initForm = {
  title: "",
}

const CoursesPage = ({courses, createCourse, loadCourses}) => {
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
  }, [loadCourses]);

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

      { courses.map(course => <p key={course.id}>{ course.title }</p>) }
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

function mapStateToProps({courses}) {
  return { courses }
}

export default connect(mapStateToProps, {createCourse, loadCourses})(CoursesPage)