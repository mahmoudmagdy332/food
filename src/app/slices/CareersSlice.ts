// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CareersSliceType } from "../utils/types/types";

const initialState: CareersSliceType = {
  careers: null,
};

const FQsSlice = createSlice({
  name: "careers",
  initialState,
  reducers: {
    setCareers: (state, action) => {
      state.careers = action.payload.careers;
    },
  },
});

export const { setCareers } = FQsSlice.actions;

export default FQsSlice.reducer;

export const useCareerSliceSelector = useSelector.withTypes<RootState>();
