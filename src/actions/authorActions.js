import constants from "../constants"
import * as authorApi from "../api/authorApi";

export function loadAuthors() {
  return function(dispatch) {
    return authorApi
      .getAuthors()
      .then(authors => {
        dispatch({
          type: constants.LOAD_AUTHOR_SUCCESS,
          payload: authors,
        })
      })
      .catch(err => {
        throw err
      })
  }
}