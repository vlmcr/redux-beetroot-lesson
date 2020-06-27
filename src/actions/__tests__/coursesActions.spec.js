import * as coursesActions from "../coursesActions"
import constants from "../../constants"
import { courses } from "../../mockData"

test("create course success", () => {
  const course = courses[0];
  const expectedAction = {
    type: constants.CREATE_COURSE,
    payload: course
  }

  const action = coursesActions.createCourse(course);
  expect(expectedAction).toEqual(action);
})