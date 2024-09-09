import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modal/modalSlise";
import { userAuthReducer } from "./userAuth/userAuthSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filters/filterSlice";
import { statisticsReducer } from "./statistics/statisticsSlice";
import { wordsReducer } from "./word/wordSlice";

const authUserPersistConfig = {
  key: "authUser",
  storage,
  whitelist: ["token"],
};

const persistedAuthUserReducer = persistReducer(
  authUserPersistConfig,
  userAuthReducer
);

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    userAuth: persistedAuthUserReducer,
    filters: filterReducer,
    statistics: statisticsReducer,
    words: wordsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
