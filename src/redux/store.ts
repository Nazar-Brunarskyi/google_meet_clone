import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from './features/sidebar/sidebarSlice'
import optionsMenuSlice from './features/optionsMenu/optionsMenuSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    optionsMenu: optionsMenuSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch