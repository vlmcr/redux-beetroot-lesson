import {categories} from '../books';
import {arrToMap} from "../utils"
import constants from "../constants"


const initialState = {
  categories: arrToMap(categories),
  selectedCategory: null,
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case constants.SELECT_CATEGORY:
      return {...state, selectedCategory: payload.id}
    default:
      return state;
  }
}