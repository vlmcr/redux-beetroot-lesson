import constants from "../constants"

export default function(state = [], action) {
  const {type, payload} = action
  switch (type) {
    case constants.LOAD_AUTHOR_SUCCESS:
      return payload
    default:
      return state
  }
}