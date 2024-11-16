// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { PackageSliceType } from "../utils/types/types";

const initialState: PackageSliceType = {
  month_package: null,
  year_package: null,
};

const PackagesSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    setPackages: (state, action) => {
      state.month_package = action.payload;
      state.year_package = action.payload;
    },
  },
});

export const { setPackages } = PackagesSlice.actions;

export default PackagesSlice.reducer;

export const usePackagesSliceSelector = useSelector.withTypes<RootState>();
