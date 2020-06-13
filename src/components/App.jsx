import React from "react"

import { AsyncLoad, lazyLoad } from "./AsyncLoad"
import Menu from "./Menu"
import {Route} from "react-router-dom"

const BooksPage = AsyncLoad(lazyLoad("./books/BooksPage"));
const FormBook = AsyncLoad(lazyLoad("./books/FormBook"));

const App = props => (
  <div className="container">
    <Menu/>
    <div className="row">
      <Route exact path={"/"} component={BooksPage} />
      <Route path={"/add-book"} component={FormBook} />
    </div>
  </div>
)

export default App