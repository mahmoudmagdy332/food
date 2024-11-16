// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { categoryType} from '../utils/types/types';

const initialState:{categories:categoryType[]|null}={ 
    categories:null,
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    }, 
  },
});

export const {
  setCategories,
} = categoriesSlice.actions;



export default categoriesSlice.reducer;

export const useCategoriesSliceSelector = useSelector.withTypes<RootState>()

