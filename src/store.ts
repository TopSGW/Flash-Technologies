import { configureStore } from '@reduxjs/toolkit'
import translateSlice from './Slice/translateSlice'

export const store = configureStore({
  reducer: {
    translate : translateSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store