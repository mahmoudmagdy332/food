import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { useSelector } from "react-redux";
import { RootState } from "../store";

import { UserState } from "../type";

const initialState: UserState = {
  user: null,
  orders:[]
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      const { user, token } = action.payload;
      if (token) {
        state.user = user;
        Cookies.set("access_token", token);

        localStorage.setItem("user", JSON.stringify(user));
      }
    },
    updateUser: (state, action) => {
      state.user = action.payload.user;
      state.orders = action.payload.meals;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    changeImage: (state, action) => {
      if (state.user) state.user.image = action.payload;
    },
    removeUser: (state) => {
      state.user = null;

      Cookies.remove("access_token");
      localStorage.setItem("user", "");
    },



  },
});

export const {
  setUser,
  updateUser,
  changeImage,
  removeUser,
} = userSlice.actions;
export default userSlice.reducer;
export const useUserSliceSelector = useSelector.withTypes<RootState>();
