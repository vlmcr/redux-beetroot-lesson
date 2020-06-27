import coursesReducer from "../coursesReducer"
import * as coursesActions from "../../actions/coursesActions"

test("should create course when pass CREATE_COURSE_SUCCESS", () => {
  const initData = [
    { title: "A"}, { title: "B" }
  ]
  const newCourse = { title: "C" }

  const action = coursesActions.createCourse(newCourse);

  const newState = coursesReducer(initData, action);

  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
  expect(newState[2].title).not.toEqual("A");
});

test("should update course when pass UPDATE_COURSE_SUCCESS", () => {
  const initData = [
    { id: 1, title: "A"}, { id: 2, title: "B" }, { id: 3, title: "C" }
  ];

  const updatedCourse = { id: 2, title: "New title" };

  const action = coursesActions.updateSuccessCourse(updatedCourse);

  const newState = coursesReducer(initData, action);

  expect(newState[0].title).toEqual("A")
  expect(newState[1].title).toEqual("New title")
  expect(newState[2].title).toEqual("C")
  expect(newState[1].title).not.toEqual("B")
})
