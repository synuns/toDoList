const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

export const createToDo = (toDo) => {
  return {
    type: CREATE_TODO,
    payload : toDo,
  };
};

export const toggleToDo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload : { id },
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    payload : { id },
  };
};

const initialState = [];

const toDoList = (toDos = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [ ...toDos, action.payload ];
    case TOGGLE_TODO:
      return toDos.map((toDo) =>
        toDo.id === action.payload.id ? { ...toDo, isDone: !toDo.isDone } : toDo,
      );
    case DELETE_TODO:
      return toDos.filter((toDo) => toDo.id !== action.payload.id);
    default:
      return toDos;
  }
};

export default toDoList;