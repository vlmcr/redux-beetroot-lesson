import React from "react"

import { AsyncLoad, lazyLoad } from "./AsyncLoad"
import CoursesPage from "./courses/CoursesPage"

const Header = AsyncLoad(lazyLoad("./common/Header"));

const App = props => (
  <div className="container">
    <Header />
    <CoursesPage />
  </div>
)

export default App