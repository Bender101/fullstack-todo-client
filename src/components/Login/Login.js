import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAC, logoutUserAC } from "../../redux/thunk/loginAC";
import "./Login.css";

const Login = () => {
  const [login, setLogin] = useState({});
  const [showLoginForm, setShowLoginForm] = useState(false);

  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  
  const loginHandler = (e) => {
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const changeLoginForm = (e) => {
    e.preventDefault();
    setShowLoginForm(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserAC(login));
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutUserAC());
    setShowLoginForm(false);
  };
  if (showLoginForm || users.name) {
    return (
      <div className="login-container">
        {users.name === 'admin' ? (
          <div>
            <button
              onClick={logoutHandler}
              type="button"
              className="btn  btn-primary"
            >
              logout
            </button>
          </div>
        ) : (
          <form onSubmit={submitHandler} className="login-form">
            <div className="mb-3">
              <label htmlFor="exampleInputLogin1" className="form-label">
                Login
              </label>
              <input
                onChange={loginHandler}
                type="login"
                className="form-control"
                id="exampleInputLogin1"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                onChange={loginHandler}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <div className="login-message"></div>
          </form>
        )}
      </div>
    );
  } else {
    return (
      <div className="login-btn">
        <button
          onClick={changeLoginForm}
          type="button"
          className="btn  btn-primary"
        >
          Login
        </button>
      </div>
    );
  }
};

export default Login;
