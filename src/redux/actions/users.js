import { LOGIN_USER } from "../types/users";

export const loginUser = (data) => {
  return {
    type: LOGIN_USER,
    payload: data,
  };
};
