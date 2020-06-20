import reducer from "../reducers"
// import log from "../middlewares/log"
import logger from "redux-logger";
import {configureStore} from "@reduxjs/toolkit"

const middleware = [logger]

export default function(initialState) {
  return configureStore({
    reducer,
    middleware,
  })
}
