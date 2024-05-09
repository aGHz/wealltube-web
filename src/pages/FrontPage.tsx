import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootStore, useAppDispatch } from '../state/store.ts';
import { fetchVideos, selectVideos } from '../state/videos.ts';

import VideoGrid from '../components/VideoGrid.tsx';

function FrontPage() {
  const dispatch = useAppDispatch();

  const videos = useSelector(selectVideos);
  const isLoadingVideos = useSelector((state: RootStore) => state.videos.loading);

  useEffect(() => {
    if (isLoadingVideos) return;
    if (videos.length) return;

    dispatch(fetchVideos());
  }, [videos, isLoadingVideos, dispatch]);

  useEffect(() => {
    if (!videos.length) return;

    console.log(videos[0]);
  }, [videos]);

  return (
    <div className="flex-1 bg-parchment-50 p-8">
      <VideoGrid videos={videos}/>
    </div>
  );
}

export default FrontPage;
