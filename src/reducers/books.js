import {defaultBooks} from "../books"
import constants from "../constants"
import {generate as id} from "shortid"

export default (state = defaultBooks, action) => {
  const { type, payload } = action;

  switch (type) {
    case constants.ADD_BOOK:
      return [{ _id: id(), ...payload}, ...state]
    default:
      return state;
  }
}