import React from "react"

import { AsyncLoad, lazyLoad } from "./AsyncLoad"
import {Route, Switch} from "react-router-dom"

const Header = AsyncLoad(lazyLoad("./common/Header"));
const CoursesPage = AsyncLoad(lazyLoad("./courses/CoursesPage"));
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

      <Route path="/">
        <HomePage/>
      </Route>
    </Switch>
  </div>
)

export default App