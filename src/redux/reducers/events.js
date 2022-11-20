import {
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_FAILED,
  GET_ALL_EVENTS_SUCCESS,
  GET_SINGLE_EVENT,
  GET_SINGLE_EVENT_FAILED,
  GET_SINGLE_EVENT_SUCCESS,
  PUBLISH_EVENT,
  PUBLISH_EVENT_FAILED,
  PUBLISH_EVENT_SUCCESS,
  REGISTER_EVENT,
  REGISTER_EVENT_FAILED,
  REGISTER_EVENT_SUCCESS,
  UPDATE_EVENT,
  UPDATE_EVENT_FAILED,
  UPDATE_EVENT_SUCCESS,
  DELETE_EVENT,
  DELETE_EVENT_FAILED,
  DELETE_EVENT_SUCCESS,
} from "../types";
import { initialState } from "../../utils/config";

export const allEventsReducer = (
  state = { ...initialState, events: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload.event,
        success: true,
      };
    case GET_ALL_EVENTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const singleEventReducer = (
  state = { ...initialState, event: {} },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_EVENT:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        event: action.payload.event[0],
        success: true,
      };
    case GET_SINGLE_EVENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const registerEventReducer = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case REGISTER_EVENT:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Event registered successfully",
        success: true,
      };
    case REGISTER_EVENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateEventReducer = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case UPDATE_EVENT:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Event updated successfully",
        success: true,
      };
    case UPDATE_EVENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const publishEventReducer = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case PUBLISH_EVENT:
      return {
        ...state,
        loading: true,
      };
    case PUBLISH_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Event published successfully",
        success: true,
      };
    case PUBLISH_EVENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteEventReducer = (
  state = { ...initialState, message: "" },
  action
) => {
  switch (action.type) {
    case DELETE_EVENT:
      return {
        ...state,
        loading: true,
      };
    case DELETE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Event deleted successfully",
        success: true,
      };
    case DELETE_EVENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
