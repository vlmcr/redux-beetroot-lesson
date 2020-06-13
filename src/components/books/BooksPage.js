import React from "react";
import Categories from "./Categories";
import BooksList from "./BooksList";

const BooksPage = () => {
  return (
    <>
      <div className="col-sm-3">
        <h2>Categories</h2>
        <Categories />
      </div>
      <div className="col-sm-9">
        <BooksList />
      </div>
    </>
  );
};

export default BooksPage;