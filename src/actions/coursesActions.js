import constants from "../constants"
import * as courseApi from "../api/courseApi";

export const createCourse = course => ({
  type: constants.CREATE_COURSE,
  payload: course
})

export function loadCourses() {
  return function(dispatch) {
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