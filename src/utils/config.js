export const API_URL = "http://art-council.herokuapp.com/api";
export const initialState = {
  loading: false,
  error: "",
  success: false,
};
const userData = JSON.parse(localStorage.getItem("user"));
export const TOKEN = userData ? userData.access_token : "";
export const USER = userData ? userData.info : "";
