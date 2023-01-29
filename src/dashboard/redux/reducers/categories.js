import { initialState } from "../../utils/config";
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

export const getCategoriesReducers = (
  state = { ...initialState, categories: [] },
  action
) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload.quotes,
        success: true,
      };
    case GET_CATEGORIES_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const getCategoryReducers = (
  state = { ...initialState, category: null },
  action
) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload.info,
        success: true,
      };
    case GET_CATEGORIES_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const createCategoryReducers = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Created successfull",
        success: true,
      };
    case CREATE_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const updateCategoryReducers = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case UPDATE_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Updated successfully",
        success: true,
      };
    case UPDATE_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const deleteCategoryReducers = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case DELETE_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Deleted successfully",
        success: true,
      };
    case DELETE_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
