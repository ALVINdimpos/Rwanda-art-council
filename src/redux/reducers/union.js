import { initialState } from "../../utils/config";
import {
  CREATE_ARTIST,
  CREATE_ARTIST_FAILURE,
  CREATE_ARTIST_SUCCESS,
  DELETE_ARTIST,
  DELETE_ARTIST_FAILED,
  DELETE_ARTIST_SUCCESS,
  DELETE_UNION,
  DELETE_UNION_FAILED,
  DELETE_UNION_SUCCESS,
  GET_ALL_UNIONS,
  GET_ALL_UNIONS_FAILURE,
  GET_ALL_UNIONS_SUCCESS,
  GET_ARTISTS_IN_UNION,
  GET_ARTISTS_IN_UNION_FAILURE,
  GET_ARTISTS_IN_UNION_SUCCESS,
  GET_SINGLE_FEDERATION_SUCCESS,
  GET_SINGLE_UNION,
  GET_SINGLE_UNION_FAILURE,
  GET_UNION_BY_FEDERATION,
  GET_UNION_BY_FEDERATION_FAILURE,
  GET_UNION_BY_FEDERATION_SUCCESS,
  REGISTER_UNION,
  REGISTER_UNION_FAILED,
  REGISTER_UNION_SUCCESS,
  UPDATE_UNION,
  UPDATE_UNION_FAILED,
  UPDATE_UNION_SUCCESS,
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
        errors: action.payload,
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
        errors: action.payload,
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
        errors: action.payload,
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
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const registerUnionReducers = (
  state = { ...initialState, union: {} },
  action
) => {
  switch (action.type) {
    case REGISTER_UNION:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_UNION_SUCCESS:
      return {
        ...state,
        loading: false,
        union: action.payload.info,
        success: true,
      };
    case REGISTER_UNION_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const updateUnionReducers = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case UPDATE_UNION:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_UNION_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Union updated successfully",
        success: true,
      };
    case UPDATE_UNION_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const createArtistReducers = (
  state = { ...initialState, artist: {} },
  action
) => {
  switch (action.type) {
    case CREATE_ARTIST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ARTIST_SUCCESS:
      return {
        ...state,
        loading: false,
        artist: action.payload.info,
        success: true,
      };
    case CREATE_ARTIST_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const deleteUnionReducers = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case DELETE_UNION:
      return {
        ...state,
        loading: true,
      };
    case DELETE_UNION_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Union deleted successfully",
        success: true,
      };
    case DELETE_UNION_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const deleteArtistReducers = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case DELETE_ARTIST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ARTIST_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Union deleted successfully",
        success: true,
      };
    case DELETE_ARTIST_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
