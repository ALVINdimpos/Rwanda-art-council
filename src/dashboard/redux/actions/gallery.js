import axios from "axios";
import { API_URL, TOKEN } from "../../utils/config";
import action from "./action";
import {
  GET_ALL_GALLERY,
  GET_ALL_GALLERY_FAILED,
  GET_ALL_GALLERY_SUCCESS,
  CREATE_NEW_GALLERY,
  CREATE_NEW_GALLERY_FAILED,
  CREATE_NEW_GALLERY_SUCCESS,
  DELETE_ONE_IN_GALLERY,
  DELETE_ONE_IN_GALLERY_FAILED,
  DELETE_ONE_IN_GALLERY_SUCCESS,
} from "../types";

export const getAllGallery = () => async (dispatch) => {
  try {
    dispatch(action(GET_ALL_GALLERY));
    axios({
      method: "get",
      url: `${API_URL}/gallery`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        dispatch(action(GET_ALL_GALLERY_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(GET_ALL_GALLERY_FAILED, error));
      });
  } catch (error) {
    dispatch(action(GET_ALL_GALLERY_FAILED, error));
  }
};

export const createNewGallery = (data) => async (dispatch) => {
  try {
    dispatch(action(CREATE_NEW_GALLERY));
    axios({
      method: "post",
      url: `${API_URL}/gallery/create`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "multipart/form-data",
      },
      data,
    })
      .then((response) => {
        dispatch(action(CREATE_NEW_GALLERY_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(CREATE_NEW_GALLERY_FAILED, error));
      });
  } catch (error) {
    dispatch(action(CREATE_NEW_GALLERY_FAILED, error));
  }
};

export const deleteOneInGallery = (id) => async (dispatch) => {
  try {
    dispatch(action(DELETE_ONE_IN_GALLERY));
    axios({
      method: "delete",
      url: `${API_URL}/gallery/delete/${id}`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        dispatch(action(DELETE_ONE_IN_GALLERY_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(DELETE_ONE_IN_GALLERY_FAILED, error));
      });
  } catch (error) {
    dispatch(action(DELETE_ONE_IN_GALLERY_FAILED, error));
  }
};
