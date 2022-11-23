import axios from "axios";
import { API_URL } from "../../utils/config";
import action from "./action";
import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
} from "../types";

export const loginUser = (data) => (dispatch) => {
  try {
    dispatch(action(LOGIN));
    axios({
      method: "post",
      url: `${API_URL}/User/Login`,
      data,
    })
      .then((response) => {
        dispatch(action(LOGIN_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(LOGIN_FAILED, error));
      });
  } catch (error) {
    dispatch(action(LOGIN_FAILED, error));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(action(LOGOUT));
    axios({
      method: "get",
      url: `${API_URL}/User/Logout`,
    })
      .then((response) => {
        dispatch(action(LOGOUT_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(LOGOUT_FAILED, error));
      });
  } catch (error) {
    dispatch(action(LOGOUT_FAILED, error));
  }
};
