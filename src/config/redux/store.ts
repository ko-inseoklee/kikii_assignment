import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { tokenSlice } from "./slices/tokenSlice";
import { alertSlice } from "./slices/alertSlice";

const reducers = combineReducers({
  user: userSlice.reducer,
  token: tokenSlice.reducer,
  alert: alertSlice.reducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch