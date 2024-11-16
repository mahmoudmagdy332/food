// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import {  mylearningsType } from "../utils/types/types";

const initialState: mylearningsType = {
  mylearnings: {
    current_page: 1,
    data: [],
    last_page:1,
},
suggestions: []
};

const myLearningSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setMylearnings: (state, action) => {
      state.mylearnings = action.payload;
  },
  setCurrentPage: (state, action) => {
    state.mylearnings.current_page = action.payload;
},
  setLastPage: (state, action) => {
    state.mylearnings.last_page = action.payload;
  },
  setSuggestions: (state, action) => {
    state.suggestions = action.payload;
  },

  },
});

export const { setMylearnings,setCurrentPage,setLastPage,setSuggestions } = myLearningSlice.actions;

export default myLearningSlice.reducer;

export const useMylearningsSelector = useSelector.withTypes<RootState>();
