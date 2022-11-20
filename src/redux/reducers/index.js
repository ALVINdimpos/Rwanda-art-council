import { combineReducers } from "redux";
import {
  federationReducers,
  singleFederationReducers,
} from "./federationReducer";
import {
  fedUnionsReducers,
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

export default combineReducers({
  federation: federationReducers,
  singleFederation: singleFederationReducers,
  unions: unionsReducers,
  fedUnions: fedUnionsReducers,
  singleUnion: singleUnionReducers,
  unionArtists: unionArtistsReducers,
  events: allEventsReducer,
  singleEvent: singleEventReducer,
  registerEvent: registerEventReducer,
  updateEvent: updateEventReducer,
  publishEvent: publishEventReducer,
  deleteEvent: deleteEventReducer,
});
