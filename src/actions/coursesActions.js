import constants from "../constants"
import * as courseApi from "../api/courseApi";
import {beginApiCall} from "./apiStatusActions"

export const createCourse = course => ({
  type: constants.CREATE_COURSE,
  payload: course
})

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginApiCall())

    return courseApi.getCourses().then(courses => {
      dispatch({
        type: constants.LOAD_COURSES_SUCCESS,
        payload: courses
      })
    })
    .catch(err => {
      throw err;
    })
  }
}

function updateSuccessCourse(course) {
  return {type: constants.UPDATE_COURSE_SUCCESS, payload: course}
}

function createSuccessCourse(course) {
  return {type: constants.CREATE_COURSE_SUCCESS, payload: course}
}

export function saveCoursesAction(course) {
  return function(dispatch) {
    dispatch(beginApiCall())

    return courseApi.saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateSuccessCourse(savedCourse))
          : dispatch(createSuccessCourse(savedCourse))
      })
      .catch(err => {
        throw err
      })
  }
}