import axios from "axios";
import { API_URL, TOKEN } from "../../utils/config";
import {
  CREATE_ARTIST,
  CREATE_ARTIST_FAILURE,
  CREATE_ARTIST_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
  DELETE_EVENT,
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
import action from "./action";

export const getAllUnions = () => async (dispatch) => {
  try {
    dispatch(action(GET_ALL_UNIONS));
    axios({
      method: "get",
      url: `${API_URL}/Union/All`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        dispatch(action(GET_ALL_UNIONS_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(GET_ALL_UNIONS_FAILURE, error));
      });
  } catch (error) {
    dispatch(action(GET_ALL_UNIONS_FAILURE, error));
  }
};

export const getFederationUnions = (id) => async (dispatch) => {
  try {
    dispatch(action(GET_UNION_BY_FEDERATION));
    axios({
      method: "get",
      url: `${API_URL}/Fed/Get/Union/${id}`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        dispatch(action(GET_UNION_BY_FEDERATION_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(GET_UNION_BY_FEDERATION_FAILURE, error));
      });
  } catch (error) {
    dispatch(action(GET_UNION_BY_FEDERATION_FAILURE, error));
  }
};

export const getUnion = (id) => async (dispatch) => {
  try {
    dispatch(action(GET_SINGLE_UNION));
    axios({
      method: "get",
      url: `${API_URL}/Union/Get/${id}`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        dispatch(action(GET_SINGLE_FEDERATION_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(GET_SINGLE_UNION_FAILURE, error));
      });
  } catch (error) {
    dispatch(action(GET_SINGLE_UNION_FAILURE, error));
  }
};

export const registerUnion = (data) => async (dispatch) => {
  try {
    dispatch(action(REGISTER_UNION));
    axios({
      method: "post",
      url: `${API_URL}/Union/Register`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data,
    })
      .then((response) => {
        dispatch(action(REGISTER_UNION_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(REGISTER_UNION_FAILED, error));
      });
  } catch (error) {
    dispatch(action(REGISTER_UNION_FAILED, error));
  }
};

export const updateUnion = (id, data) => async (dispatch) => {
  try {
    dispatch(action(UPDATE_UNION));
    axios({
      method: "post",
      url: `${API_URL}/Uni/Update/${id}`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data,
    })
      .then((response) => {
        dispatch(action(UPDATE_UNION_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(UPDATE_UNION_FAILED, error));
      });
  } catch (error) {
    dispatch(action(UPDATE_UNION_FAILED, error));
  }
};

export const getArtistInUnion = (id) => async (dispatch) => {
  try {
    dispatch(action(GET_ARTISTS_IN_UNION));
    axios({
      method: "get",
      url: `${API_URL}/Union/Get/Artist/${id}`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        dispatch(action(GET_ARTISTS_IN_UNION_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(GET_ARTISTS_IN_UNION_FAILURE, error));
      });
  } catch (error) {
    dispatch(action(GET_ARTISTS_IN_UNION_FAILURE, error));
  }
};

export const createArtistInUnion = (data) => async (dispatch) => {
  try {
    dispatch(action(CREATE_ARTIST));
    axios({
      method: "post",
      url: `${API_URL}/Artist/Register`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data,
    })
      .then((response) => {
        dispatch(action(CREATE_ARTIST_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(CREATE_ARTIST_FAILURE, error));
      });
  } catch (error) {
    dispatch(action(CREATE_ARTIST_FAILURE, error));
  }
};

export const deleteUnion = (id) => async (dispatch) => {
  try {
    dispatch(action(DELETE_UNION));
    axios({
      method: "delete",
      url: `${API_URL}/Union/Delete/${id}`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        dispatch(action(DELETE_UNION_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(DELETE_UNION_FAILED, error));
      });
  } catch (error) {
    dispatch(action(DELETE_UNION_FAILED, error));
  }
};
