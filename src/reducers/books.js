import {defaultBooks} from "../books"
import constants from "../constants"
import {generate as id} from "shortid"

export default (state = defaultBooks, action) => {
  const { type, payload } = action;

  switch (type) {
    case constants.ADD_BOOK:
      if (payload._id) {
        return state.map(book => book._id === payload._id ? payload : book)
      } else {
        return [{...payload,  _id: id() }, ...state]
      }
    default:
      return state;
  }
}