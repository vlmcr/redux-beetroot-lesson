import reducer from "../reducers"
import generateId from "../middlewares/generateId"
import logger from "redux-logger";
import {configureStore} from "@reduxjs/toolkit"
import thunk from "redux-thunk"

const middleware = [thunk, logger, generateId]

export default function(initialState) {
  return configureStore({
    reducer,
    middleware,
  })
}
