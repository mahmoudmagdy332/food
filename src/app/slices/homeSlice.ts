// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { homeType } from "../utils/types/types";

const initialState: homeType = {
  newCourses: null,
  categories: null,
  content: null,
  partners:null,
  student_count: 0,
  course_count: 0,
  lesson_count: 0
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHome: (state, action) => {
      console.log("action.payload", action.payload);
      state.newCourses = action.payload["newCourses"]
      state.categories= action.payload["categorys"]
      state.content= action.payload["content"]
      state.partners=action.payload["partners"]
      state.student_count= action.payload["student_count"]
      state.course_count=action.payload["course_count"]
      state.lesson_count=action.payload["lesson_count"]
    },
  },
});

export const { setHome } = homeSlice.actions;

export default homeSlice.reducer;

export const useHomeSliceSelector = useSelector.withTypes<RootState>();
