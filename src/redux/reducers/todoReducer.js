import {
  EMAIL_ASC,
  EMAIL_DESC,
  NAME_ASC,
  NAME_DESC,
  STATUS_ASC,
  STATUS_DESC,
} from "../types/filters";
import {
  ADD_TODO,
  REMOVE_TODO,
  CHANGE_STATUS,
  ALL_TODO,
  UPDATE_TODO,
} from "../types/todos";

const todoReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ALL_TODO:
      return payload;

    case ADD_TODO:
      return [payload, ...state];

    case REMOVE_TODO:
      return state.filter((el) => el.id !== payload);

    case CHANGE_STATUS:
      return state.map((el) => {
        if (el.id === payload) {
          return {
            ...el,
            status: !el.status,
          };
        } else {
          return el;
        }
      });

    case UPDATE_TODO:
      return state.map((el) => {
        if (el.id === payload.id) {
          return {
            ...el,
            text: payload.text,
          };
        } else {
          return el;
        }
      });

    case NAME_ASC:
      return [...state].sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

    case NAME_DESC:
      return [...state].sort(function (a, b) {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });

    case EMAIL_ASC:
      return [...state].sort(function (a, b) {
        if (a.email > b.email) {
          return 1;
        }
        if (a.email < b.email) {
          return -1;
        }
        return 0;
      });

    case EMAIL_DESC:
      return [...state].sort(function (a, b) {
        if (a.email < b.email) {
          return 1;
        }
        if (a.email > b.email) {
          return -1;
        }
        return 0;
      });

    case STATUS_ASC:
      return [...state].sort(function (a, b) {
        if (a.status > b.status) {
          return 1;
        }
        if (a.status < b.status) {
          return -1;
        }
        return 0;
      });

    case STATUS_DESC:
      return [...state].sort(function (a, b) {
        if (a.status < b.status) {
          return 1;
        }
        if (a.status > b.status) {
          return -1;
        }
        return 0;
      });

    default:
      return state;
  }
};

export default todoReducer;
