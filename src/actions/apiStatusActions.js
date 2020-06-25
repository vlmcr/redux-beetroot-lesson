import constants from "../constants"

export const beginApiCall = () => ({
  type: constants.BEGIN_API_CALL,
})

export const apiCallError = () => ({
  type: constants.API_CALL_ERROR,
})