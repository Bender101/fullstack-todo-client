import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAC } from "../../redux/thunk/todoAC";
import "./TodoForm.css";

const TodoForm = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      status: false,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodoAC(inputs));
  };

  return (
    <div className="todo-form mb-4">
      <form onSubmit={submitHandler} className="todo-form mb-4">
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            User name
          </label>
          <input
            onChange={inputHandler}
            name="name"
            type="name"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={inputHandler}
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputText1" className="form-label">
            Text
          </label>
          <input
            onChange={inputHandler}
            name="text"
            type="text"
            className="form-control"
            id="exampleInputText1"
            aria-describedby="textHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="form-message"></div>
      </form>
    </div>
  );
};

export default TodoForm;
