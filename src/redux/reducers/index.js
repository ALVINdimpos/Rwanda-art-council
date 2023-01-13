import { combineReducers } from "redux";
import {
  federationReducers,
  registerFederationReducers,
  singleFederationReducers,
} from "./federationReducer";
import {
  fedUnionsReducers,
  registerUnionReducers,
  singleUnionReducers,
  unionArtistsReducers,
  unionsReducers,
} from "./union";
import {
  allEventsReducer,
  singleEventReducer,
  registerEventReducer,
  updateEventReducer,
  publishEventReducer,
  deleteEventReducer,
} from "./events";
import { loginReducers, logoutReducers } from "./auth";

export default combineReducers({
  login: loginReducers,
  logout: logoutReducers,
  federation: federationReducers,
  singleFederation: singleFederationReducers,
  registerFederation: registerFederationReducers,
  unions: unionsReducers,
  fedUnions: fedUnionsReducers,
  singleUnion: singleUnionReducers,
  registerUnion: registerUnionReducers,
  unionArtists: unionArtistsReducers,
  events: allEventsReducer,
  singleEvent: singleEventReducer,
  registerEvent: registerEventReducer,
  updateEvent: updateEventReducer,
  publishEvent: publishEventReducer,
  deleteEvent: deleteEventReducer,
});
