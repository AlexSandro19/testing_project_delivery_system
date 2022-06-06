import { combineReducers } from "redux";


import auth from "./auth";
import user from "./user";
import packages from "./packages";
import zipcities from "./zipcities";
import delivery from "./delivery";
import message from "./message";
export default combineReducers({
  auth,user,packages,zipcities,delivery,message
  });