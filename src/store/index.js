import {compose, createStore, applyMiddleware} from "redux"
import reducers from "../reducers"
import log from "../middlewares/log"

const middlewares = [log]
const composeEnhancers = window.__REDUX_DEVTOOLS_COMPOSE__ || compose;

export default function(initialState) {
  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  )
}