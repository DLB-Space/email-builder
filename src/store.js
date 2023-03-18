import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import headerImage from "./components/tools/cover-settings/headerImageSlice";
import preheaderSettings from "./components/tools/preheader-settings/preheaderSlice";
import utmSettings from "./components/tools/utm-settings/utmSlice";
import contentSlice from "./components/contentSlice";

const persistConfig = {
  timeout: 2000, //Set the timeout function to 2 seconds
  key: "root",
  storage,
};

const reducers = combineReducers({
  headerImage,
  preheaderSettings,
  utmSettings,
  contentSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
