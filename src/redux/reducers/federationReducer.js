import { initialState } from "../../utils/config";
import {
  REGISTER_FEDERATION,
  REGISTER_FEDERATION_SUCCESS,
  REGISTER_FEDERATION_FAILURE,
  GET_ALL_FEDERATIONS,
  GET_ALL_FEDERATIONS_SUCCESS,
  GET_ALL_FEDERATIONS_FAILURE,
  GET_SINGLE_FEDERATION,
  GET_SINGLE_FEDERATION_SUCCESS,
  GET_SINGLE_FEDERATION_FAILURE,
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
        error: action.payload,
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
        error: action.payload,
      };
    default:
      return state;
  }
};
