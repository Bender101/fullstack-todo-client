import "./TodoList.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTodoAC } from "../../redux/thunk/todoAC";
import Pagination from "../Pagination/Pagination";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import {
  emailAsc,
  emailDesc,
  nameAsc,
  nameDesc,
  statusAsc,
  statusDesc,
} from "../../redux/actions/filters";
import Login from "../Login/Login";

const TodoList = () => {
  const [currPage, setCurrPage] = useState(1);
  const [todosPerPage] = useState(3);

  const dispatch = useDispatch();
  const getTodos = useSelector((store) => store.todos);

 

  useEffect(() => {
    if (!getTodos.length) {
      dispatch(allTodoAC());
    }
  }, [getTodos]);

  const changeSelectHandler = (e) => {
    if (e.target.value === "name-asc") {
      dispatch(nameAsc());
    } else if (e.target.value === "name-desc") {
      dispatch(nameDesc());
    } else if (e.target.value === "email-asc") {
      dispatch(emailAsc());
    } else if (e.target.value === "email-desc") {
      dispatch(emailDesc());
    } else if (e.target.value === "status-asc") {
      dispatch(statusAsc());
    } else if (e.target.value === "status-desc") {
      dispatch(statusDesc());
    }
  };

  const lastTodoIndex = currPage * todosPerPage;
  const firstTodoIndex = lastTodoIndex - todosPerPage;
  const currTodo = getTodos.slice(firstTodoIndex, lastTodoIndex);

  const paginate = (pageNumber) => setCurrPage(pageNumber);

  return (
    <div>
      <div className="forms">
        <TodoForm />
        <Login />
      </div>
      <div>
        <select
          onChange={changeSelectHandler}
          className="form-select mb-5"
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT">Sort by</option>
          <option value="name-asc">Name ASC</option>
          <option value="name-desc">Name DESC</option>
          <option value="email-asc">Email ASC</option>
          <option value="email-desc">Email DESC</option>
          <option value="status-asc">Status ASC</option>
          <option value="status-desc">Status DESC</option>
        </select>
      </div>
      {currTodo?.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          email={todo.email}
          text={todo.text}
          status={todo.status}
        />
      ))}
      <Pagination
        todosPerPage={todosPerPage}
        totalTodos={getTodos.length}
        paginate={paginate}
      />
    </div>
  );
};

export default TodoList;
