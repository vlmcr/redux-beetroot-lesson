import { createStore } from "redux";
import rootReducer from "../../reducers";
import * as coursesActions from "../../actions/coursesActions";

test("should crate store", () => {
  const store = createStore(rootReducer, {});
  const course = { title: "Clean code" };

  const action = coursesActions.createCourse(course);

  store.dispatch(action);

  const createCourse = store.getState().courses[0];

  expect(createCourse).toEqual(course);
  expect(createCourse).not.toEqual({ title: "Clean Code1" });
})