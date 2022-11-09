import {
  REGISTER_FEDERATION,
  REGISTER_FEDERATION_SUCCESS,
  REGISTER_FEDERATION_FAILURE,
} from "../types";

const initialState = {
  loading: false,
  federation: [],
  error: "",
  success: false,
};

export const federationReducers = (state = initialState, action) => {
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
        federation: action.payload,
        success: true,
      };
    case REGISTER_FEDERATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
