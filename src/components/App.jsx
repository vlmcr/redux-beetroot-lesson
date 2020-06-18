import React from "react"

import { AsyncLoad, lazyLoad } from "./AsyncLoad"
import CoursesPage from "./courses/CoursesPage"

// const BooksPage = AsyncLoad(lazyLoad("./books/BooksPage"));
// const BookForm = AsyncLoad(lazyLoad("./books/BookForm"));

const App = props => (
  <div className="container">
    <CoursesPage />
  </div>
)

export default App