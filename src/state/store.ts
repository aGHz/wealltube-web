import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import videos from './videos.ts';

const store = configureStore({
  reducer: {
    videos,
  },
});

export default store;

// State type for selectors
export type RootStore = ReturnType<typeof store.getState>

// Properly typed dispatch hook
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
