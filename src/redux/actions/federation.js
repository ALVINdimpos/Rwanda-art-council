import {
  GET_ALL_FEDERATIONS,
  GET_ALL_FEDERATIONS_SUCCESS,
  GET_ALL_FEDERATIONS_FAILURE,
  REGISTER_FEDERATION,
  REGISTER_FEDERATION_SUCCESS,
  REGISTER_FEDERATION_FAILURE,
  GET_SINGLE_FEDERATION,
  GET_SINGLE_FEDERATION_SUCCESS,
  GET_SINGLE_FEDERATION_FAILURE,
  UPDATE_FEDERATION,
  UPDATE_FEDERATION_SUCCESS,
  UPDATE_FEDERATION_FAILURE,
  DELETE_FEDERATION,
  DELETE_FEDERATION_SUCCESS,
  DELETE_FEDERATION_FAILURE,
} from "../types";
import action from "./action";
import axios from "axios";
import { API_URL, TOKEN } from "../../utils/config";

export const getAllFederation = () => async (dispatch) => {
  try {
    dispatch(action(GET_ALL_FEDERATIONS));
    axios({
      method: "get",
      url: `${API_URL}/Federation/All`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
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

export const getSingleFederation = (id) => async (dispatch) => {
  try {
    dispatch(action(GET_SINGLE_FEDERATION));
    axios({
      method: "get",
      url: `${API_URL}/Federation/Get/${id}`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        dispatch(action(GET_SINGLE_FEDERATION_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(GET_SINGLE_FEDERATION_FAILURE, error));
      });
  } catch (error) {
    dispatch(action(GET_SINGLE_FEDERATION_FAILURE, error));
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

export const updateFederation = (id, data) => async (dispatch) => {
  try {
    dispatch(action(UPDATE_FEDERATION));
    axios
      .put(`${API_URL}/Fed/Update/${id}`, data)
      .then((response) => {
        dispatch(action(UPDATE_FEDERATION_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(UPDATE_FEDERATION_FAILURE, error));
      });
  } catch (error) {
    dispatch(action(UPDATE_FEDERATION_FAILURE, error));
  }
};

export const deleteFederation = (id) => async (dispatch) => {
  try {
    dispatch(action(DELETE_FEDERATION));
    axios
      .delete(`${API_URL}/Federation/Delete/${id}`)
      .then((response) => {
        dispatch(action(DELETE_FEDERATION_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(DELETE_FEDERATION_FAILURE, error));
      });
  } catch (error) {
    dispatch(action(DELETE_FEDERATION_FAILURE, error));
  }
};
