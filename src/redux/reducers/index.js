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
  pendingEventsReducer,
  publishedEventsReducer,
} from "./events";
import {
  getGalleryReducers,
  createOneGalleryReducers,
  deleteOneGalleryReducers,
} from "./gallery";
import {
  getCategoriesReducers,
  getCategoryReducers,
  createCategoryReducers,
  updateCategoryReducers,
  deleteCategoryReducers,
} from "./categories";
import { loginReducers, logoutReducers } from "./auth";

import { registerArtistReducer, getArtistReducer, singleArtistReducer } from "./artists";

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
  pendingEvents: pendingEventsReducer,
  publishedEvents: publishedEventsReducer,
  singleEvent: singleEventReducer,
  registerEvent: registerEventReducer,
  updateEvent: updateEventReducer,
  publishEvent: publishEventReducer,
  deleteEvent: deleteEventReducer,
  getGallery: getGalleryReducers,
  createOneInGallery: createOneGalleryReducers,
  deleteOneInGallery: deleteOneGalleryReducers,
  getCategories: getCategoriesReducers,
  getCategory: getCategoryReducers,
  createCategory: createCategoryReducers,
  updateCategory: updateCategoryReducers,
  deleteCategory: deleteCategoryReducers,
  registerArtist: registerArtistReducer,
  getArtist: getArtistReducer,
  singleArtist: singleArtistReducer,
});
