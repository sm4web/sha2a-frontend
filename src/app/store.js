import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import drawerSlice from "../features/drawer/drawerSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import propertySlice from "../features/createProperty/createPropertySlice";
import getPropertiesSlice from "../features/getProperties/getPropertiesSlice";

const rootReducer = combineReducers({
  user: userSlice,
  drawer: drawerSlice,
  property: propertySlice,
  properties: getPropertiesSlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: [""],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
