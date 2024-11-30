// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { settingType } from '../type'; 

const initialState:settingType={ 
    setting:null,
    loading:false,
    categories:[],
    ricee:[],
    braeds:[],
    drinks:[],
    salads:[]
}

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    createSetting: (state, action) => {

      state.setting = action.payload.setting;
      state.categories = action.payload.categories;
      state.ricee = action.payload.ricee;
      state.braeds = action.payload.braeds;
      state.drinks = action.payload.drinks;
      state.salads = action.payload.salads;

    },
    changeLoading: (state, action) => {
      console.log('action.payload',action.payload)
      state.loading = action.payload;
    }
  },
});

export const {
  createSetting,changeLoading,
} = settingSlice.actions;



export default settingSlice.reducer;

export const useSettingSliceSelector = useSelector.withTypes<RootState>()

