import React from "react"

import { AsyncLoad, lazyLoad } from "./AsyncLoad"
import Menu from "./Menu"
import {Route, Switch} from "react-router-dom"
import FormBook from "./books/BookForm"

const BooksPage = AsyncLoad(lazyLoad("./books/BooksPage"));
const BookForm = AsyncLoad(lazyLoad("./books/BookForm"));

const App = props => (
  <div className="container">
    <Menu/>
    <div className="row">
      <Switch>
        <Route exact path={"/"} component={BooksPage} />
        <Route exact path={"/add-book"} component={BookForm} />
        <Route path="/add-book/:id?" component={FormBook} />
      </Switch>
    </div>
  </div>
)

export default App