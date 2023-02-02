import { initialState } from "../../utils/config";
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

export const federationReducers = (
  state = { ...initialState, federations: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_FEDERATIONS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_FEDERATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        federations: action.payload.info,
        success: true,
      };
    case GET_ALL_FEDERATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const singleFederationReducers = (
  state = { ...initialState, singleFederation: {} },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_FEDERATION:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_FEDERATION_SUCCESS:
      return {
        ...state,
        loading: false,
        singleFederation: action.payload.info[0],
        success: true,
      };
    case GET_SINGLE_FEDERATION_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const registerFederationReducers = (
  state = { ...initialState, fed: {} },
  action
) => {
  switch (action.type) {
    case REGISTER_FEDERATION:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_FEDERATION_SUCCESS:
      return {
        ...state,
        loading: false,
        fed: action.payload.info,
        success: true,
      };
    case REGISTER_FEDERATION_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const updateFederationReducers = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case UPDATE_FEDERATION:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_FEDERATION_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Federation updated successfully",
        success: true,
      };
    case UPDATE_FEDERATION_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const deleteFederationReducers = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case DELETE_FEDERATION:
      return {
        ...state,
        loading: true,
      };
    case DELETE_FEDERATION_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Federation deleted successfully",
        success: true,
      };
    case DELETE_FEDERATION_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
