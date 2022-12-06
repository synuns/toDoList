import { createStore } from "redux";
import { combineReducers } from "redux";
import toDoList from "../modules/toDoList";

const TODOS_STORAGE_KEY = "toDos";

const rootReducer = combineReducers({
  toDoList
}); 

const persistedState = localStorage.getItem(TODOS_STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY))
  : [];

const store = createStore(rootReducer, persistedState); 

store.subscribe(() => {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(store.getState()))
})

export default store;