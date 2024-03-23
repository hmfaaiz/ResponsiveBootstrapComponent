import { configureStore } from '@reduxjs/toolkit'
import UserSlice from "../features/user"

export const store = configureStore({
  reducer: {
    app:UserSlice
  },
})