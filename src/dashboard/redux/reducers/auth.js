import { initialState } from "../../utils/config";
import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
} from "../types";

export const loginReducers = (
  state = { ...initialState, user: {} },
  action
) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        success: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const logoutReducers = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        success: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
