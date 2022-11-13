import { initialState } from "../../utils/config";
import {
  GET_ALL_UNIONS,
  GET_ALL_UNIONS_FAILURE,
  GET_ALL_UNIONS_SUCCESS,
  GET_SINGLE_FEDERATION_SUCCESS,
  GET_SINGLE_UNION,
  GET_SINGLE_UNION_FAILURE,
  GET_UNION_BY_FEDERATION,
  GET_UNION_BY_FEDERATION_FAILURE,
  GET_UNION_BY_FEDERATION_SUCCESS,
} from "../types";

export const unionsReducers = (
  state = { ...initialState, unions: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_UNIONS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_UNIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        unions: action.payload.info,
        success: true,
      };
    case GET_ALL_UNIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const fedUnionsReducers = (
  state = { ...initialState, fedUnions: [] },
  action
) => {
  switch (action.type) {
    case GET_UNION_BY_FEDERATION:
      return {
        ...state,
        loading: true,
      };
    case GET_UNION_BY_FEDERATION_SUCCESS:
      return {
        ...state,
        loading: false,
        fedUnions: action.payload.info,
        success: true,
      };
    case GET_UNION_BY_FEDERATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const singleUnionReducers = (
  state = { ...initialState, union: {} },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_UNION:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_FEDERATION_SUCCESS:
      return {
        ...state,
        loading: false,
        union: action.payload.info[0],
        success: true,
      };
    case GET_SINGLE_UNION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const unionArtistsReducers = (
  state = { ...initialState, uniArtists: [] },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_UNION:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_FEDERATION_SUCCESS:
      return {
        ...state,
        loading: false,
        uniArtists: action.payload.info,
        success: true,
      };
    case GET_SINGLE_UNION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
