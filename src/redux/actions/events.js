import axios from "axios";
import { API_URL, TOKEN, userData } from "../../utils/config";
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
  GET_PENDING_EVENTS,
  GET_PENDING_EVENTS_FAILED,
  GET_PENDING_EVENTS_SUCCESS,
  GET_PUBLISHED_EVENTS,
  GET_PUBLISHED_EVENTS_FAILED,
  GET_PUBLISHED_EVENTS_SUCCESS,
} from "../types";
import action from "./action";

export const getAllEvents = () => async (dispatch) => {
  dispatch(action(GET_ALL_EVENTS));
  axios({
    method: "get",
    url: `${API_URL}/Event/All/Fed`,
    headers: {
      Authorization: `Bearer ${userData.access_token}`,
    },
  })
    .then((response) => {
      dispatch(action(GET_ALL_EVENTS_SUCCESS, response.data));
    })
    .catch((error) => {
      dispatch(action(GET_ALL_EVENTS_FAILED, error));
    });
};

export const getPendingEvents = () => async (dispatch) => {
  dispatch(action(GET_PENDING_EVENTS));
  axios({
    method: "get",
    url: `${API_URL}/Event/Pending`,
    headers: {
      Authorization: `Bearer ${userData.access_token}`,
    },
  })
    .then((response) => {
      console.log(response.data);
      dispatch(action(GET_PENDING_EVENTS_SUCCESS, response.data));
    })
    .catch((error) => {
      dispatch(action(GET_PENDING_EVENTS_FAILED, error));
    });
};

export const getPublishedEvents = () => async (dispatch) => {
  dispatch(action(GET_PUBLISHED_EVENTS));
  axios({
    method: "get",
    url: `${API_URL}/Event`,
    headers: {
      Authorization: `Bearer ${userData.access_token}`,
    },
  })
    .then((response) => {
      dispatch(action(GET_PUBLISHED_EVENTS_SUCCESS, response.data));
    })
    .catch((error) => {
      dispatch(action(GET_PUBLISHED_EVENTS_FAILED, error));
    });
};

export const getSingleEvent = (id) => async (dispatch) => {
  try {
    dispatch(action(GET_SINGLE_EVENT));
    axios({
      method: "get",
      url: `${API_URL}/Event/Show/${id}`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        dispatch(action(GET_SINGLE_EVENT_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(GET_SINGLE_EVENT_FAILED, error));
      });
  } catch (error) {
    dispatch(action(GET_SINGLE_EVENT_FAILED, error));
  }
};

export const registerEvent = (data) => async (dispatch) => {
  try {
    dispatch(action(REGISTER_EVENT));
    axios({
      method: "post",
      url: `${API_URL}/Event/Create`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data,
    })
      .then((response) => {
        dispatch(action(REGISTER_EVENT_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(REGISTER_EVENT_FAILED, error));
      });
  } catch (error) {
    dispatch(action(REGISTER_EVENT_FAILED, error));
  }
};

export const updateEvent = (id, data) => async (dispatch) => {
  try {
    dispatch(action(UPDATE_EVENT));
    axios({
      method: "post",
      url: `${API_URL}/Event/Update/${id}`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data,
    })
      .then((response) => {
        dispatch(action(UPDATE_EVENT_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(UPDATE_EVENT_FAILED, error));
      });
  } catch (error) {
    dispatch(action(UPDATE_EVENT_FAILED, error));
  }
};

export const publishEvent = (id) => async (dispatch) => {
  try {
    dispatch(action(PUBLISH_EVENT));
    axios({
      method: "post",
      url: `${API_URL}/Event/Publish/${id}`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        dispatch(action(PUBLISH_EVENT_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(PUBLISH_EVENT_FAILED, error));
      });
  } catch (error) {
    dispatch(action(PUBLISH_EVENT_FAILED, error));
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch(action(DELETE_EVENT));
    axios({
      method: "delete",
      url: `${API_URL}/Event/Delete/${id}`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        dispatch(action(DELETE_EVENT_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(DELETE_EVENT_FAILED, error));
      });
  } catch (error) {
    dispatch(action(DELETE_EVENT_FAILED, error));
  }
};
