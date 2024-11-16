// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ArticleCatSliceType } from "../utils/types/types";

const initialState: ArticleCatSliceType = {
  ArticleCategory: null,
  name: undefined,
};

const ArticleCategorySlice = createSlice({
  name: "ArticleCategory",
  initialState,
  reducers: {
    setArticleCat: (state, action) => {
      state.ArticleCategory = action.payload;
    },

    setSearch: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setArticleCat, setSearch } = ArticleCategorySlice.actions;

export default ArticleCategorySlice.reducer;

export const useArticleCategorySliceSelector =
  useSelector.withTypes<RootState>();
