import constants from "../constants"

export const selectBook = id => ({
  type: constants.SELECT_BOOK,
  payload: id,
})

export const selectCategory = id => ({
  type: constants.SELECT_CATEGORY,
  payload: {id}
})

export const addBook = book => ({
  type: constants.ADD_BOOK,
  payload: book,
})

