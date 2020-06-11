import {createStore} from "redux"
import reducers from "../reducers"

const store = createStore(reducers)

window.store = store; //dev

export default store;