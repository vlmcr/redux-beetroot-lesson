export default  store => dispatch => action => {
  console.group(action.type)
  console.log("Prev state: ", store.getState());
  console.log("Dispatching: ", action);

  let result = dispatch(action)

  console.log("Next state: ", store.getState());
  console.groupEnd();
  return result;
}