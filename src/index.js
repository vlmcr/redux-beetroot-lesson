import React from "react"
import {render} from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./components/App"

// render(<App />, document.getElementById("root"))

// Actions
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_COURSE = "ADD_COURSE";
const DELETE_TODO = "DELETE_TODO"

const actionAddTodo = todo => ({ type: ADD_TODO,  payload: {todo}});
const actionToggleTodo = id => ({ type: TOGGLE_TODO, payload: {id} });
const actionAddCourse = course => ({ type: ADD_COURSE,  payload: {course} });
const actionDeleteTodo = id => ({
  type: DELETE_TODO,
  payload: {id}
});

// Reducer
function app(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    courses: courses(state.courses, action),
  }
}

function todos(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return [...state, payload.todo];
    case TOGGLE_TODO:
      return state.map(todo => todo.id !== payload.id ? todo : {...todo, completed: !todo.completed})
    case DELETE_TODO:
      return state.filter(todo => todo.id !== payload.id)
    default:
      return state;
  }
}

function courses(state = [], action){
  const { type, payload } = action;
  switch (type) {
    case ADD_COURSE:
      return [...state, payload.course]
    default: return state;
  }
}

function createStore(reducer) {
  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(listenerItem => listenerItem !== listener)
    }
  }

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(l => l(state))
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

const store = createStore(app);
const unsubscribe = store.subscribe((state) => console.log(state))

store.dispatch(actionAddTodo({id: 1, title: "Todo 1", completed: false}));
store.dispatch(actionAddTodo({id: 2, title: "Todo 2", completed: false}));
store.dispatch(actionAddTodo({id: 3, title: "Todo 3", completed: false}));

store.dispatch(actionToggleTodo(1));

store.dispatch(actionToggleTodo(1));

store.dispatch(actionDeleteTodo(1));


store.dispatch(actionAddCourse({id: 1, title: "Course 1"}));
store.dispatch(actionAddCourse({id: 2, title: "Course 2"}));

