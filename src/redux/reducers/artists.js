import { initialState } from "../../utils/config";
import {
  ADD_ARTIST,
  ADD_ARTIST_FAILED,
  ADD_ARTIST_SUCCESS,
  GET_ARTIST,
  GET_ARTIST_SUCCESS,
  GET_ARTIST_FAILED,
  GET_SINGLE_ARTIST,
  GET_SINGLE_ARTIST_SUCCESS,
  GET_SINGLE_ARTIST_FAILED,
} from "../types";

export const registerArtistReducer = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case ADD_ARTIST:
      return {
        ...state,
        loading: true,
      };
    case ADD_ARTIST_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Created successfully",
        success: true,
      };
    case ADD_ARTIST_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const getArtistReducer = (
  state = { ...initialState, artists: [] },
  action
) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        loading: true,
      };
    case GET_ARTIST_SUCCESS:
      return {
        ...state,
        loading: false,
        artists: action.payload,
        success: true,
      };
    case GET_ARTIST_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const singleArtistReducer = (
  state = { ...initialState, singleArtist: {} },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_ARTIST:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_ARTIST_SUCCESS:
      return {
        ...state,
        loading: false,
        singleArtist: action.payload,
        success: true,
      };
    case GET_SINGLE_ARTIST_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
