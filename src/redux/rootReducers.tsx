import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/auth";

const rootReducers = combineReducers({ authSlice });

export type RootState = ReturnType<typeof rootReducers>

export default rootReducers;
