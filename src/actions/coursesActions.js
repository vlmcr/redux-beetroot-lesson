import constants from "../constants"

export const createCourse = course => ({
  type: constants.CREATE_COURSE,
  payload: course
})