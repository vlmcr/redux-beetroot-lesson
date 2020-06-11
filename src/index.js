import React from "react"
import {render} from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./components/App"

// render(<App />, document.getElementById("root"))

// Actions
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_COURSE = "ADD_COURSE";

const actionAddTodo = todo => ({ type: ADD_TODO,  payload: {todo}});
const actionToggleTodo = id => ({ type: TOGGLE_TODO, payload: {id} });
const actionAddCourse = course => ({ type: ADD_COURSE,  payload: {course} });

// Reducer
function todos(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return [...state, payload.todo];
    default:
      return state;
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

const store = createStore(todos);
const unsubscribe = store.subscribe((state) => console.log(state))

store.dispatch(actionAddTodo({id: 1, title: "Todo 1", completed: false}));
store.dispatch(actionAddTodo({id: 1, title: "Todo 2", completed: false}));

unsubscribe()

store.dispatch(actionAddTodo({id: 1, title: "Todo 3", completed: false}));
