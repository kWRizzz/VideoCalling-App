import { configureStore } from '@reduxjs/toolkit'
import authReducer  from "../redux/authReducers/authSlice.js";

export const store = configureStore({
  reducer: {
    auth:authReducer
  },
})