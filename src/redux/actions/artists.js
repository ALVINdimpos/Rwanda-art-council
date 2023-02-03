import axios from "axios";
import { API_URL, TOKEN, userData } from "../../utils/config";
import action from "./action";

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

export const registerArtist = (data) => async (dispatch) => {
  console.log(data);
  dispatch(action(ADD_ARTIST));
  try {
    const res = await axios.post(`${API_URL}/Artist/Register`, data, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    console.log(res.data);
    const qrImageUrl = `https://chart.apis.google.com/chart?cht=qr&chl=Artist%20Number%3A%20${encodeURI(
      res.data.info.artist_no
    )}%0AFirst%20Name%3A%20${encodeURI(
      res.data.info.fname
    )}%0ALast%20Name%3A%20${encodeURI(
      res.data.info.lname
    )}%0AEmail%3A%20${encodeURI(
      res.data.info.email
    )}%0APhone%20number%3A%20${encodeURI(
      res.data.info.phone
    )}%0ACountry%3A%20${encodeURI(
      res.data.info.country
    )}%0AProvince%3A%20${encodeURI(
      res.data.info.province
    )}%0ADistrict%3A%20${encodeURI(
      res.data.info.district
    )}%0ASector%3A%20${encodeURI(res.data.info.sector)}%0ACell%3A%20${encodeURI(
      res.data.info.cell
    )}%0AVillage%3A%20${encodeURI(
      res.data.info.village
    )}%0ADate%20of%20birth%3A%20${encodeURI(res.data.info.dob)}&chs=248`;
    console.log(qrImageUrl);

    await axios({
      method: "post",
      url: `${API_URL}/Artist/QRCode/${res.data.info.id}`,
      data: {
        qrcode: qrImageUrl,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch(action(ADD_ARTIST_SUCCESS, res.data));
  } catch (error) {
    console.log(error);
    dispatch(action(ADD_ARTIST_FAILED, error.response.data));
  }
};

export const getArtist = () => async (dispatch) => {
  dispatch(action(GET_ARTIST));
  try {
    const res = await axios.get(`${API_URL}/Artist/All`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    dispatch(action(GET_ARTIST_SUCCESS, res.data.info));
    console.log(res.data.info);
  } catch (error) {
    dispatch(action(GET_ARTIST_FAILED, error.response.data));
    console.log(error);
  }
};

export const getSingleArtist = (id) => async (dispatch) => {
  dispatch(action(GET_SINGLE_ARTIST));
  try {
    const res = await axios.get(`${API_URL}/Artist/Get/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    dispatch(action(GET_SINGLE_ARTIST_SUCCESS, res.data.info));
    console.log(res.data.info);
  } catch (error) {
    dispatch(action(GET_SINGLE_ARTIST_FAILED, error.response.data));
    console.log(error);
  }
};
