import { LOGIN_USER } from "../types/users";

const usersReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      return payload;

    default:
      return state;
  }
};

export default usersReducer;
