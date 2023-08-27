import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../../../apis/auth/user_model";

interface UserState {
  currentUser: UserModel | null;
}

const initState: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<UserModel | null>) => {
      state.currentUser = action.payload;
    },
    removeUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
