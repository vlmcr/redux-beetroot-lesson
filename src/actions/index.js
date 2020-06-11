import constants from "../constants"

export const selectBook = id => ({
  type: constants.SELECT_BOOK,
  payload: id,
})