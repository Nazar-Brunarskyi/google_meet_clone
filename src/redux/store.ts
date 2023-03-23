import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from './features/sidebar/sidebarSlice'
import usersSlice from './features/users/usersSlice'

export const store = configureStore({
  reducer: {
    users: usersSlice,
    sidebar: sidebarSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch