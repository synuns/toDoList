import { createStore } from "redux";
import { combineReducers } from "redux";
import toDoList from "../modules/toDoList";


const rootReducer = combineReducers({
  toDoList
}); 
const store = createStore(rootReducer); 

export default store;