import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodoAC,
  changeStatusTodoAC,
  updateTodoAC,
} from "../../redux/thunk/todoAC";
import "./Todo.css";

const Todo = ({ id, name, email, text, status }) => {
  const [editStatus, setEditStatus] = useState(false);
  const [editInput, setEditInput] = useState(text);
  const users = useSelector((store) => store.users);

  const dispatch = useDispatch();

  const changeHandler = (id) => {
    dispatch(changeStatusTodoAC(id));
  };

  const deleteHandler = (data) => {
    dispatch(removeTodoAC(data));
  };

  const editTodoInput = (text) => {
    setEditStatus(true);
  };

  const editInputHandler = (e) => {
    setEditInput(e.target.value);
  };

  const submitEditHandler = (data) => {
    dispatch(updateTodoAC(data));
    setEditStatus(false);
  };

  let changeClass = (status) => {
    return status ? "completed" : "not-completed";
  };

  return (
    <div className="todo-container">
      <div className="form-check">
        {users.name ? (
          <input
            onChange={() => changeHandler(id)}
            className="form-check-input "
            type="checkbox"
            id="flexCheckDefault"
            checked={status ? "checked" : ""}
          />
        ) : (
          <div></div>
        )}
      </div>
      <div>
        <p className={changeClass(status)}>
          <b>{name}</b>
        </p>
        <p className={changeClass(status)}>
          <b>{email}</b>
        </p>
        {editStatus ? (
          <input onChange={editInputHandler} value={editInput} type="text" />
        ) : (
          <p className={changeClass(status)}>{text}</p>
        )}
        <p>{status ? "Выполнено" : "Не выполнено"}</p>
      </div>
      {users.name ? (
        <div>
          {editStatus ? (
            <button
              onClick={() => submitEditHandler({ id, editInput })}
              type="submit"
              className="btn btn-primary"
            >
              submit
            </button>
          ) : (
            <button
              onClick={editTodoInput}
              type="edit"
              className="btn btn-secondary"
            >
              Edit
            </button>
          )}

          <button
            onClick={() => deleteHandler(id)}
            type="delete"
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Todo;
