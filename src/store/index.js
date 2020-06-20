import reducer from "../reducers"
import generateId from "../middlewares/generateId"
import logger from "redux-logger";
import {configureStore} from "@reduxjs/toolkit"

const middleware = [logger, generateId]

export default function(initialState) {
  return configureStore({
    reducer,
    middleware,
  })
}
