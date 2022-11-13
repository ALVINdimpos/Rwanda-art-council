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

export default combineReducers({
  federation: federationReducers,
  singleFederation: singleFederationReducers,
  unions: unionsReducers,
  fedUnions: fedUnionsReducers,
  singleUnion: singleUnionReducers,
  unionArtists: unionArtistsReducers,
});
