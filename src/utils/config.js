import axios from "axios";

export const API_URL = "http://art-council.herokuapp.com/api";
export const initialState = {
  loading: false,
  error: "",
  success: false,
};
const userData = JSON.parse(localStorage.getItem("user"));
let TOKEN;
let USER;
if (userData) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;
  TOKEN = userData.access_token;
  USER = userData.info;
}
export { TOKEN, USER, userData };
export const http = axios.create({
  baseURL: `http://art-council.herokuapp.com/api`,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
