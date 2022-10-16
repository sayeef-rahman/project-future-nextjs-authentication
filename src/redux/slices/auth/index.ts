import { bindActionCreators, createSlice } from "@reduxjs/toolkit";

interface typeInitial {
  userData: object;
}
interface typeAction {
  payload: object;
}

const initialState: typeInitial = {
  userData: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveAuth: (state, action) => {
      state.userData = action.payload;
    },
    logOut: (state) => {
      state.userData = {};
    },
  },
});

export const { saveAuth, logOut } = authSlice.actions;
export default authSlice.reducer;
