import React from "react"

import {newCourse, courses, authors} from "../../../mockData";
import { ManageCoursesPage } from "../ManageCoursesPage";

import { render, fireEvent } from "@testing-library/react";

const renderComponent = args => {
  const defaultProps = {
    courses,
    authors,
    course: newCourse,
    loadCoursesAction: jest.fn(),
    loadAuthorsAction: jest.fn(),
    saveCoursesAction: jest.fn(),
    history: {},
    match: {},
  }

  const props = {...defaultProps, args};

  return render(<ManageCoursesPage {...props} />);
}


test("should connect to redux", () => {
  const {getByTestId} = renderComponent();

  const form = getByTestId("course-form");
  fireEvent.submit(form);
  const titleBox = getByTestId("title-box");

  expect(titleBox.classList.contains("has-error")).toBe(true)
  // expect(titleBox).toHaveClass("has-error");
})

