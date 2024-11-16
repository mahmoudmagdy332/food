// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';
import translationEN from '../local/en.json'
import translationAR from '../local/ar.json'
import { langInitialState } from '../type';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const initialState:langInitialState={ 
    lang:"en",
    translations:translationEN,
    languageLoading: false,
   }

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
 
    changeLanguage: (state, action) => {
      state.lang = action.payload;
      if(action.payload==='en'){
        state.translations=translationEN
      }else{
        state.translations=translationAR
      }
      window.localStorage.setItem("lang",action.payload);
    }
  },
});

export const {
changeLanguage,
} = languageSlice.actions;



export default languageSlice.reducer;

export const useLanguageSelector = useSelector.withTypes<RootState>()

