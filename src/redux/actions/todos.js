import {
  ADD_TODO,
  REMOVE_TODO,
  CHANGE_STATUS,
  UPDATE_TODO,
  ALL_TODO,
} from "../types/todos.js";

export const allTodo = (data) => {
  return {
    type: ALL_TODO,
    payload: data,
  };
};

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const updateTodo = (data) => {
  return {
    type: UPDATE_TODO,
    payload: data,
  };
};

export const changeStatusTodo = (id) => {
  return {
    type: CHANGE_STATUS,
    payload: id,
  };
};
