import VideoCard from './VideoCard.tsx';

function VideoGrid({ videos }) {
  return (
    <div className="grid grid-cols-auto-fill-w-80 gap-8 justify-items-center items-center">
      {videos.map(video => (
        <div key={video.id} className="w-full aspect-video flex justify-center content-center">
          <VideoCard video={video}/>
        </div>
      ))}
    </div>
  );
}

export default VideoGrid;
