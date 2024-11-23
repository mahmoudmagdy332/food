import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import userSlice  from "./slices/userSlice"; 
import settingSlice from "./slices/settingSlice";



export const store = configureStore({
  reducer: {
    languageReducer: languageSlice,
    userReducer: userSlice,
    settingReducer: settingSlice,

 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
