import axios from "axios";

export const API_URL = "https://api.rwandaartscouncil.rw/api";
// export const TOKEN =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5yd2FuZGFhcnRzY291bmNpbC5ydy9hcGkvVXNlci9Mb2dpbiIsImlhdCI6MTY3MTc3MTY2NiwiZXhwIjoxNjcxNzc1MjY2LCJuYmYiOjE2NzE3NzE2NjYsImp0aSI6ImJXWktza1VEU3YxeFFoeHkiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.6LFQw449aL_fytryrgLUQwIi-gS3hVz0AzqvP6Sf34A";
export const initialState = {
  loading: false,
  errors: {},
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
  baseURL: `https://api.rwandaartscouncil.rw/api`,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
