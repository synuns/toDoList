const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

export const createToDo = () => {
  return {
    type: CREATE_TODO,
  };
};

export const toggleToDo = () => {
  return {
    type: TOGGLE_TODO,
  };
};

export const deleteToDo = () => {
  return {
    type: DELETE_TODO,
  };
};

const initialState = {
  toDos: [],
};

const toDoList = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {

      };
    case TOGGLE_TODO:
      return {

      };
    case DELETE_TODO:
      return {
        
      };
    default:
      return state;
  }
};

export default toDoList;