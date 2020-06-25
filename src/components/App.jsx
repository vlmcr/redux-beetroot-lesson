import React from "react"

import { AsyncLoad, lazyLoad } from "./AsyncLoad"
import {Route, Switch} from "react-router-dom"
import PageNotFound from "./PageNotFound"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Header = AsyncLoad(lazyLoad("./common/Header"));
const CoursesPage = AsyncLoad(lazyLoad("./courses/CoursesPage"));
const ManageCoursesPage = AsyncLoad(lazyLoad("./courses/ManageCoursesPage"));
const HomePage = AsyncLoad(lazyLoad("./home/HomePage"));
const AboutPage = AsyncLoad(lazyLoad("./about/AboutPage"));

const App = props => (
  <div className="container">
    <Header />
    <Switch>
      <Route path="/about">
        <AboutPage/>
      </Route>
      <Route path="/courses">
        <CoursesPage/>
      </Route>

      <Route path="/course/:slug" component={ManageCoursesPage} />
      <Route path="/course" component={ManageCoursesPage} />

      <Route component={PageNotFound} />
    </Switch>
    <ToastContainer autoClose={3000} hideProgressBar/>
  </div>
)

export default App