import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "./services/pokemon";
// import rootReducer from "./reducers";
import { useDispatch } from "react-redux";
import authSlice from "./slices/auth";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  // middleware: [logger],
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

// export const store = configureStore({
//   reducer: {
//     // rootReducer,
//     [pokemonApi.reducerPath]: pokemonApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(pokemonApi.middleware),
// });

// setupListeners(store.dispatch);

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
