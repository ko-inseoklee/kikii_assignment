import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AlertState {
    showAlert: boolean;
    message: string | null;
}

const initState: AlertState = {
    showAlert: false,
    message: ""
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState: initState,
    reducers: {
      showAlert: (state, action: PayloadAction<string>) => {
        state.showAlert = true;
        state.message = action.payload;
      },
      closeAlert: state => {
        state.showAlert = false;
        state.message = "";
      }
    },
  });

export const { showAlert, closeAlert } = alertSlice.actions;

export default alertSlice.reducer;