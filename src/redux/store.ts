import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from './features/sidebar/sidebarSlice'
import usersSlice from './features/users/usersSlice'

export const store = configureStore({
  reducer: {
    users: usersSlice,
    sidebar: sidebarSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch