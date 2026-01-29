import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/data/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Often needed when working with some API data formats
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
