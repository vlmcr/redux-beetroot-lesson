import constants from "../constants"
import {generate as id} from "shortid"

export default store => dispatch => action => {
  if (action.type.indexOf(constants.CREATE) !== -1) {
    action = { ...action, payload: { ...action.payload, id: id() } }
  }
  return dispatch(action);
}