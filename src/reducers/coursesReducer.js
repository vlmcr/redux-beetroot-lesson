import constants from "../constants"

export default function (state = [], action) {
  const {type, payload} = action

  switch (type) {
    case constants.CREATE_COURSE:
      return [...state, payload]
    case constants.LOAD_COURSES_SUCCESS:
      return payload
    case constants.CREATE_COURSE_SUCCESS:
      return [...state, {...payload}]
    case constants.UPDATE_COURSE_SUCCESS:
      return state.map(course => (course.id === payload.id ? payload : course))
    case constants.DELETE_COURSE:
      return state.filter(course => course.id !== payload.id)
    default:
      return state
  }
}
