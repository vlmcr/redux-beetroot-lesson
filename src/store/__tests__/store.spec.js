import { createStore } from "redux";
import rootReducer from "../../reducers";
import * as coursesActions from "../../actions/coursesActions";

test("should crate store", () => {
  const store = createStore(rootReducer, {});
  const course = { title: "Clean code" };

  const action = coursesActions.createCourse(course);

  store.dispatch(action);

  const createdCourse = store.getState().courses[0];

  expect(createdCourse).toEqual(course);
  expect(createdCourse).not.toEqual({ title: "Clean Code1" });
})