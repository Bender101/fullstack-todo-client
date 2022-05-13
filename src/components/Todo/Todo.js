import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodoAC,
  changeStatusTodoAC,
  updateTodoAC,
} from "../../redux/thunk/todoAC";
import "./Todo.css";

const Todo = ({ id, name, email, text, status, updated }) => {
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
    if (!users) {
      alert("Сначала авторизуйтесь");
    } else {
      dispatch(updateTodoAC(data));
      setEditStatus(false);
    }
  };

  let changeClass = (status) => {
    return status ? "completed" : "not-completed";
  };

  const updatedTodoByAdmin = updated ? (
    <div className="updated-status">Отредактировано администратором</div>
  ) : (
    ""
  );

  return (
    <div className="todo-container">
      <div className="form-check">
        <input
          disabled={!users.name}
          onChange={() => changeHandler(id)}
          className="form-check-input "
          type="checkbox"
          id="flexCheckDefault"
          checked={status ? "checked" : ""}
        />
      </div>
      <div className="todo-content">
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
        {updatedTodoByAdmin}
        <div className="updated-status"></div>
      </div>

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
            disabled={!users.name}
            onClick={editTodoInput}
            type="edit"
            className="btn btn-secondary"
          >
            Edit
          </button>
        )}

        <button
          disabled={!users.name}
          onClick={() => deleteHandler(id)}
          type="delete"
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
