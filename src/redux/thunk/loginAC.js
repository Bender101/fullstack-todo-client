import { loginUser } from "../actions/users";

export const loginUserAC = (data) => async (dispatch) => {
  try {
    const response = await fetch("/auth/signin", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const result = await response.json();
      dispatch(loginUser(result));
      if (result.name) {
        const userState = { name: result.name, password: data.password };

        localStorage.setItem("userstate", JSON.stringify(userState));
      }
    } else {
      const message = document.querySelector(".message");
      message.innerHTML =
        "Неверное имя пользователя или пароль. Попробуйте еще раз";
      setTimeout(() => {
        message.innerHTML = "";
      }, 2000);
    }
  } catch (err) {
    console.log("Error login: ", err);
  }
};

export const checkUserAC = () => async (dispatch) => {
  const userState = localStorage.getItem("userstate")
    ? JSON.parse(localStorage.getItem("userstate"))
    : {};

  const values = {};
  values.name = userState.name;
  values.password = userState.password;
  dispatch(loginUserAC(values));

  const response = await fetch("/auth/checkiflogged", { method: "GET" });
  if (response.ok) {
    const result = await response.json();
    dispatch(loginUser(result));
  }
};

export const logoutUserAC = () => async (dispatch) => {
  localStorage.removeItem("userstate");
  const response = await fetch("/auth/signout", { method: "GET" });
  if (response.ok) {
    dispatch(loginUser({}));
  }
};
