import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    deleteUserStart: (state) => {

      state.loading = true;

    },
    deleteUserFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutUserStart: (state) => {

      state.loading = true;

    },
    signOutUserFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },




  },
});

export const { signInStart, signInSuccess, signInFail, updateUserSuccess, updateUserFail, updateUserStart, deleteUserStart, deleteUserFail, deleteUserSuccess ,signOutUserStart,signOutUserSuccess,signOutUserFail } = userSlice.actions;

export default userSlice.reducer;