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
    const qrImageUrl = `https://chart.apis.google.com/chart?cht=qr&chl=Artist%20Number%3A%${encodeURI(
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
    axios({
      method: "post",
      url: "https://api.sendgrid.com/v3/mail/send",
      headers: {
        Authorization: `Bearer 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`,
        "Content-Type": "application/json",
      },
      data: {
        personalizations: [
          {
            to: [
              {
                email: res.data.info.email,
              },
            ],
            subject: "Artist Registration",
          },
        ],
        from: {
          email: "perfectgiftizihirwe@gmail.com",
          name: "Rwanda Arts Council",
        },
        content: [
          {
            type: "text/html",
            value: `
            <div style="background-color: #f5f5f5; padding: 20px;">
            <div style="background-color: #fff; padding: 20px; border-radius: 5px;">
            <h1 style="text-align: center; color: #000;">Artist Registration</h1>
            <p style="text-align: center; color: #000;">Thank you for registering with us. Please find your details below.</p>
            <div style="display: flex; justify-content: center; align-items: center;">
            <img src="${qrImageUrl}" alt="QR Code" style="width: 200px; height: 200px;"/>
            </div>
            <div style="display: flex; justify-content: center; align-items: center;">
            <table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
            <tr>
            <th style="border: 1px solid #000; padding: 10px;">Artist Number</th>
            <td style="border: 1px solid #000; padding: 10px;">${res.data.info.artist_no}</td>
            </tr>
            <tr>
            <th style="border: 1px solid #000; padding: 10px;">First Name</th>
            <td style="border: 1px solid #000; padding: 10px;">${res.data.info.fname}</td>
            </tr>
            <tr>
            <th style="border: 1px solid #000; padding: 10px;">Last Name</th>
            <td style="border: 1px solid #000; padding: 10px;">${res.data.info.lname}</td>
            </tr>
            <tr>
            <th style="border: 1px solid #000; padding: 10px;">Email</th>
            <td style="border: 1px solid #000; padding: 10px;">${res.data.info.email}</td>
            </tr>
            <tr>
            <th style="border: 1px solid #000; padding: 10px;">Phone Number</th>
            <td style="border: 1px solid #000; padding: 10px;">${res.data.info.phone}</td>
            </tr>
            <tr>
            <th style="border: 1px solid #000; padding: 10px;">Country</th>
            <td style="border: 1px solid #000; padding: 10px;">${res.data.info.country}</td>
            </tr>
            <tr>
            <th style="border: 1px solid #000; padding: 10px;">Province</th>
            <td style="border: 1px solid #000; padding: 10px;">${res.data.info.province}</td>
            </tr>
            <tr>
            <th style="border: 1px solid #000; padding: 10px;">District</th>
            <td style="border: 1px solid #000; padding: 10px;">${res.data.info.district}</td>
            </tr>
            <tr>
            <th style="border: 1px solid #000; padding: 10px;">Sector</th>
            <td style="border: 1px solid #000; padding: 10px;">${res.data.info.sector}</td>
            </tr>
            <tr>
            <th style="border: 1px solid #000; padding: 10px;">Cell</th>
            <td style="border: 1px solid #000; padding: 10px;">${res.data.info.cell}</td>
            </tr>
            <tr>
            <th style="border: 1px solid #000; padding: 10px;">Village</th>
            <td style="border: 1px solid #000; padding: 10px;">${res.data.info.village}</td>
            </tr>
            <tr>
            <th style="border: 1px solid #000; padding: 10px;">Date of Birth</th>
            <td style="border: 1px solid #000; padding: 10px;">${res.data.info.dob}</td>
            </tr>
            </table>
            </div>
            </div>
            </div>
            `,
          },
        ],
      },
    });
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
    const res = await axios.get(`${API_URL}/Artist/${id}`, {
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
