import { combineReducers } from "redux";


import auth from "./auth";
import user from "./user";
import packages from "./packages"
export default combineReducers({
  auth,user,packages
  });