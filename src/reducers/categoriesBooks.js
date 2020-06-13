import {categories} from '../books';
import { selectCategory } from '../actions';
import {arrToMap} from "../utils"

const initialState = {
  categories: arrToMap(categories),
  selectedCategory: null,
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case selectCategory:
      return {...state, selectedCategory: payload.id}
    default:
      return state;
  }
}