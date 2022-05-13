import {
  allTodo,
  addTodo,
  removeTodo,
  updateTodo,
  changeStatusTodo,
} from "../actions/todos.js";

export const allTodoAC = () => async (dispatch) => {
  try {
    const response = await fetch("/todos/alltodos");

    if (response.ok) {
      const result = await response.json();
      dispatch(allTodo(result));
    }
  } catch (error) {
    console.log(error);
  }
};

export const addTodoAC = (data) => async (dispatch) => {
  try {
    const response = await fetch("/todos/addtodo", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const result = await response.json();
      dispatch(addTodo(result));
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeTodoAC = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/todos/removetodo/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      dispatch(removeTodo(id));
    }
  } catch (error) {
    console.log(error);
  }
};

export const changeStatusTodoAC = (id) => async (dispatch) => {
  try {
    const response = await fetch('/todos/changestatus/', {
      method: 'PATCH',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({id:id}),
    })
    if (response.ok) {
      const result = await response.json();
      dispatch(changeStatusTodo(result.id))
    }
  } catch (error) {
    console.log(error);
  }
}

export const updateTodoAC = (data) => async (dispatch) => {
  try {
    const response = await fetch('/todos/updatetodo', {
      method: 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data)
    })
    if (response.ok) {
      const result = await response.json();
      dispatch(updateTodo(result))
    }
  } catch (error) {
    console.log(error);
  }
}
