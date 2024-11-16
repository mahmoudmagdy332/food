// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { AboutSliceType } from "../utils/types/types";

const initialState: AboutSliceType = {
  About: null,
  Benefits: null,
};

const aboutUsSlice = createSlice({
  name: "AboutUs",
  initialState,
  reducers: {
    setAboutUs: (state, action) => {
      state.About = action.payload.aboutUs;
      state.Benefits = action.payload.benefits;
    },
  },
});

export const { setAboutUs } = aboutUsSlice.actions;

export default aboutUsSlice.reducer;

export const useAboutUsSliceSelector = useSelector.withTypes<RootState>();
