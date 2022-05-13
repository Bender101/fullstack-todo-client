import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import usersReducer from "./usersReducer";


const rootReducer = combineReducers({
  todos: todoReducer,
  users: usersReducer,
  
});

export default rootReducer
