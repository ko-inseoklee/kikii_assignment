import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user_slice";
import { tokenSlice } from "./slices/token_slice";
import { alertSlice } from "./slices/alert_slice";
import { dispatchModifactionModalSlice } from "./slices/dispatch_modification_modal_slice";

const reducers = combineReducers({
  user: userSlice.reducer,
  token: tokenSlice.reducer,
  alert: alertSlice.reducer,
  dispatchModal: dispatchModifactionModalSlice.reducer
});

const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch