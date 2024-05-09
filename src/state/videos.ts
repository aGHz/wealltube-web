import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

// TODO switch to RTK Query and implement infinite scroll
export const fetchVideos = createAsyncThunk(
  'videos/fetchVideos',
  async () => {
    const response = await fetch(
      'https://api.pexels.com/videos/search?query=Nature&orientation=landscape&per_page=20',
      {
        headers: {
          Authorization: 'L7lce58SLsjP2w5pzphMrzikfzXqLSOmHQsO8VJzBRyVUcFLms4aQYQw',
        }
      }
    );

    return response.json();
  },
);

export interface Video {
  title: string;
  image: string;
  files: Record<number, string>;
}

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
        const videos = action.payload.videos.map(video => {
          const { image, url, video_files: videoFiles } = video;

          // Pexels doesn't provide a video title, we extract it from the URL's slug
          const path = (new URL(url)).pathname;
          const slug = path.split('/').filter(Boolean).at(-1);
          const words = slug.split('-').slice(0, -1); // exclude the numeric id from the slug
          const title = words.map(w => `${w[0].toUpperCase()}${w.slice(1)}`).join(' ');

          const files = videoFiles.reduce((acc, file) => ({ ...acc, [file.width]: file.link}), {});
          return { title, image, files } as Video;
        });
        state.videos = state.videos.concat(videos);
        state.loading = false;
      })
      .addCase(fetchVideos.rejected, (state) => {
        // TODO handle errors
        state.loading = false;
      });
  },
});
export default videosSlice.reducer;

export const selectVideos = state => state.videos.videos;

