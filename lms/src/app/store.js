import { configureStore } from '@reduxjs/toolkit'
import UserSlice from "../features/user"
import LoginSlice from "../features/login"

export const store = configureStore({
  reducer: {
    app:UserSlice,
    login:LoginSlice
  },
})