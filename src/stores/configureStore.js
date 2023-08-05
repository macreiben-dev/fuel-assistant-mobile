import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import laptimeSlice from "./consumption/reducers/laptimeSlice";

const rootReducer = combineReducers({ consumption: laptimeSlice });

const setupStore = () => {
  return configureStore({ reducer: rootReducer });
};

export default setupStore;
