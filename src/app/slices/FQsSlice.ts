// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { FQsSliceType } from "../utils/types/types";

const initialState: FQsSliceType = {
  Questions: null,
};

const FQsSlice = createSlice({
  name: "fQs",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.Questions = action.payload.questions;
    },
  },
});

export const { setQuestions } = FQsSlice.actions;

export default FQsSlice.reducer;

export const useFQsSliceSelector = useSelector.withTypes<RootState>();
