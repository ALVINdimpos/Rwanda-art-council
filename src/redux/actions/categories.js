import axios from "axios";
import { API_URL, TOKEN, userData } from "../../utils/config";
import action from "./action";
import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILED,
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILED,
} from "../types";

export const getAllCategories = () => async (dispatch) => {
  dispatch(action(GET_CATEGORIES));
  axios({
    method: "get",
    url: `${API_URL}/Category`,
    headers: {
      Authorization: `Bearer ${userData.access_token}`,
    },
  })
    .then((response) => {
      dispatch(action(GET_CATEGORIES_SUCCESS, response.data));
    })
    .catch((error) => {
      dispatch(action(GET_CATEGORIES_FAILED, error));
    });
};

export const getOneCategory = (id) => async (dispatch) => {
  dispatch(action(GET_CATEGORY));
  axios({
    method: "get",
    url: `${API_URL}/Category/getById/${id}`,
    headers: {
      Authorization: `Bearer ${userData.access_token}`,
    },
  })
    .then((response) => {
      dispatch(action(GET_CATEGORY_SUCCESS, response.data));
    })
    .catch((error) => {
      dispatch(action(GET_CATEGORY_FAILED, error));
    });
};

export const createCategory = (data) => async (dispatch) => {
  dispatch(action(CREATE_CATEGORY));
  axios({
    method: "post",
    url: `${API_URL}/Category/create`,
    headers: {
      Authorization: `Bearer ${userData.access_token}`,
    },
    data,
  })
    .then((response) => {
      dispatch(action(CREATE_CATEGORY_SUCCESS, response.data));
    })
    .catch((error) => {
      dispatch(action(CREATE_CATEGORY_FAILED, error));
    });
};

export const updateCategory = (id, data) => async (dispatch) => {
  dispatch(action(UPDATE_CATEGORY));
  axios({
    method: "put",
    url: `${API_URL}/Category/update/${id}`,
    headers: {
      Authorization: `Bearer ${userData.access_token}`,
    },
    data,
  })
    .then((response) => {
      dispatch(action(UPDATE_CATEGORY_SUCCESS, response.data));
    })
    .catch((error) => {
      dispatch(action(UPDATE_CATEGORY_FAILED, error));
    });
};

export const deleteCategory = (id) => async (dispatch) => {
  dispatch(action(DELETE_CATEGORY));
  axios({
    method: "delete",
    url: `${API_URL}/Category/delete/${id}`,
    headers: {
      Authorization: `Bearer ${userData.access_token}`,
    },
  })
    .then((response) => {
      dispatch(action(DELETE_CATEGORY_SUCCESS, response.data));
    })
    .catch((error) => {
      dispatch(action(DELETE_CATEGORY_FAILED, error));
    });
};
