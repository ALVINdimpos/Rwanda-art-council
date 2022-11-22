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

export const loginUser = (data) => async (dispatch) => {
  console.log(data, "-----------------------------");
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
  console.log("test");
  // try {
  //   dispatch(action(LOGOUT));
  //   axios({
  //     method: "post",
  //     url: `${API_URL}/User/Logout`,
  //   })
  //     .then((response) => {
  //       dispatch(action(LOGIN_SUCCESS, response.data));
  //     })
  //     .catch((error) => {
  //       dispatch(action(LOGIN_FAILED, error));
  //     });
  // } catch (error) {
  //   dispatch(action(LOGIN_FAILED, error));
  // }
};
