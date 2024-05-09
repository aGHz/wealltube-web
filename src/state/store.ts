import { configureStore } from '@reduxjs/toolkit';

import videos from './videos.ts';

export default configureStore({
  reducer: {
    videos,
  },
});

