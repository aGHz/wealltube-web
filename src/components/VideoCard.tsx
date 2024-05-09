import { Video } from '../types/video.ts';

interface VideoCardProps {
  video: Video;
}

function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="w-80 h-48 cursor-pointer select-none hover:shadow-xl bg-cover" style={{ backgroundImage: `url('${video.image}')`}} >
      <div className="w-full h-full flex flex-col justify-end font-sofia-condensed text-xl hover:text-2xl text-atlantis-100 py-2 px-4 bg-gradient-to-b from-transparent via-transparent via-50% to-atlantis-950-a0.8">
        {video.title}
      </div>
    </div>
  );
}

export default VideoCard;
