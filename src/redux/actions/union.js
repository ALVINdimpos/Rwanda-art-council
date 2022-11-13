import axios from "axios";
import { API_URL, TOKEN } from "../../utils/config";
import {
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
