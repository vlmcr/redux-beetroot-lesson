import constants from "../constants";
import * as authorApi from "../api/authorApi";
import {apiCallError, beginApiCall} from "./apiStatusActions"

export function loadAuthors() {

  return function(dispatch) {
    dispatch(beginApiCall())
    return authorApi
      .getAuthors()
      .then(authors => {
        dispatch({
          type: constants.LOAD_AUTHOR_SUCCESS,
          payload: authors,
        })
      })
      .catch(err => {
        dispatch(apiCallError(err))
        throw err
      })
  }
}