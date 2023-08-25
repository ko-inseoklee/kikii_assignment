import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TokenState {
    token: string | null | undefined;
}

const initState: TokenState = {
    token: localStorage.getItem('token') ?? null
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState: initState,
    reducers: {
      setToken: (state, action: PayloadAction<string>) => {
        localStorage.setItem('token', action.payload);
        state.token = action.payload;
      },
      removeToken: (state) => {
        localStorage.removeItem('token');
        state.token = null;
      },
    },
  });

export const { setToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;