import {
  NAME_ASC,
  NAME_DESC,
  EMAIL_ASC,
  EMAIL_DESC,
  STATUS_ASC,
  STATUS_DESC
} from "../types/filters";

export const nameAsc = (data) => {
  return {
    type: NAME_ASC,
    payload: data,
  };
};

export const nameDesc = (data) => {
  return {
    type: NAME_DESC,
    payload: data,
  };
};

export const emailAsc = (data) => {
  return {
    type: EMAIL_ASC,
    payload: data,
  };
};

export const emailDesc = (data) => {
  return {
    type: EMAIL_DESC,
    payload: data,
  };
};

export const statusAsc = (data) => {
  return {
    type: STATUS_ASC,
    payload: data,
  };
};

export const statusDesc = (data) => {
  return {
    type: STATUS_DESC,
    payload: data,
  };
};
