import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import * as Api from '../api/index.ts';
import { Video } from '../types/video.ts';

import { RootStore } from './store.ts';

// TODO switch to RTK Query and implement infinite scroll
export const fetchVideos = createAsyncThunk(
  'videos/fetchVideos',
  Api.Videos.getAll
);

export interface VideosState {
  loading: boolean;
  videos: Video[]; // TODO switch to entity adapter
}

const initialState: VideosState = {
  loading: false,
  videos: [],
};

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.videos = state.videos.concat(action.payload);
        state.loading = false;
      })
      .addCase(fetchVideos.rejected, (state) => {
        // TODO handle errors
        state.loading = false;
      });
  },
});
export default videosSlice.reducer;

export const selectVideos = (state: RootStore) => state.videos.videos;
