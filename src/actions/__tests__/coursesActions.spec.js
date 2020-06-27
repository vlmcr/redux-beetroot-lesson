import * as coursesActions from "../coursesActions"
import constants from "../../constants"
import {courses} from "../../mockData"
import thunk from "redux-thunk"
import configureStore from "redux-mock-store"
import fetchMock from "fetch-mock"

test("create course success", () => {
  const course = courses[0]
  const expectedAction = {
    type: constants.CREATE_COURSE,
    payload: course,
  }

  const action = coursesActions.createCourse(course)
  expect(expectedAction).toEqual(action)
})

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore()
  })


  test("should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS actions", () => {
    fetchMock.mock("*", {
      body: courses,
      headers: {"content-type": "application/json"},
    })
    const expectedActions = [
      {
        type: constants.BEGIN_API_CALL,
      },
      {
        type: constants.LOAD_COURSES_SUCCESS,
        payload: courses
      }
    ];

    const store = mockStore({courses: []})


    store.dispatch(coursesActions.loadCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
