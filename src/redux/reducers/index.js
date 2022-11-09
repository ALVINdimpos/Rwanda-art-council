import { combineReducers } from "redux";
import { federationReducers } from "./federationReducer";

export default combineReducers({
  federation: federationReducers,
});
