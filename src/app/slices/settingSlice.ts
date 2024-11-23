// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { settingType } from '../type'; 

const initialState:settingType={ 
    setting:null,
    loading:false,
    categories:[]
}

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    createSetting: (state, action) => {

      state.setting = action.payload.settings;
      state.categories = action.payload.categories;

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

