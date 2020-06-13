import React from "react"
import {render} from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./components/App"
import {Provider} from "react-redux"
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)