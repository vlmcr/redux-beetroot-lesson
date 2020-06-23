import constants from "../constants"

function actionTypeEndsToSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS"
}

export default function(state = 0, {type}) {
  if (type === constants.BEGIN_API_CALL) {
    return state + 1;
  } else if (actionTypeEndsToSuccess(type)) {
    return state - 1;
  }
  return state;
}