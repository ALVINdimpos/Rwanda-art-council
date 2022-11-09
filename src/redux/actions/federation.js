import {
  GET_ALL_FEDERATIONS,
  GET_ALL_FEDERATIONS_SUCCESS,
  GET_ALL_FEDERATIONS_FAILURE,
  REGISTER_FEDERATION,
  REGISTER_FEDERATION_SUCCESS,
  REGISTER_FEDERATION_FAILURE,
} from "../types";
import action from "./action";
import axios from "axios";
import { API_URL } from "../../config";

export const getAllFederation = () => async (dispatch) => {
  try {
    dispatch(action(GET_ALL_FEDERATIONS));
    axios
      .get(`${API_URL}/Federation/`)
      .then((response) => {
        dispatch(action(GET_ALL_FEDERATIONS_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(GET_ALL_FEDERATIONS_FAILURE, error));
      });
  } catch (error) {
    dispatch(action(GET_ALL_FEDERATIONS_FAILURE, error));
  }
};

export const registerFederation = (data) => async (dispatch) => {
  try {
    dispatch(action(REGISTER_FEDERATION));
    axios
      .post(`${API_URL}/Federation/Register`, data)
      .then((response) => {
        dispatch(action(REGISTER_FEDERATION_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(REGISTER_FEDERATION_FAILURE, error));
      });
  } catch (error) {
    dispatch(action(REGISTER_FEDERATION_FAILURE, error));
  }
};
