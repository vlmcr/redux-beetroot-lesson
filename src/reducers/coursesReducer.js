import constants from "../constants"
import {generate as id} from "shortid"

export default function(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case constants.CREATE_COURSE:
      return [...state, payload];
    case constants.LOAD_COURSES_SUCCESS:
      return payload;
    default:
      return state;
  }
}