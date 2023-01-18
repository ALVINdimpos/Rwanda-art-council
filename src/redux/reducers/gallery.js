import { initialState } from "../../utils/config";
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

export const getGalleryReducers = (
  state = { ...initialState, gallery: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_GALLERY:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_GALLERY_SUCCESS:
      return {
        ...state,
        loading: false,
        gallery: action.payload.galleries,
        success: true,
      };
    case GET_ALL_GALLERY_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const createOneGalleryReducers = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case CREATE_NEW_GALLERY:
      return {
        ...state,
        loading: true,
      };
    case CREATE_NEW_GALLERY_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Created successfully",
        success: true,
      };
    case CREATE_NEW_GALLERY_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const deleteOneGalleryReducers = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case DELETE_ONE_IN_GALLERY:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ONE_IN_GALLERY_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Deleted successfully",
        success: true,
      };
    case DELETE_ONE_IN_GALLERY_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
