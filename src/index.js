import React from "react"
import {render} from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./components/App"
import {Provider} from "react-redux"
import store from './store'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)