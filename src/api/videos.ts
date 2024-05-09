import { Video } from '../types/video.ts';

interface PexelsVideoFile {
  width: number;
  link: string;
}

interface PexelsVideo {
  id: number;
  url: string;
  image: string;
  video_files: PexelsVideoFile[];
}

interface PexelsResponse {
  videos: PexelsVideo[];
}

export async function getAll() {
  const response = await fetch(
    'https://api.pexels.com/videos/search?query=Nature&orientation=landscape&per_page=50',
    {
      headers: {
        Authorization: 'L7lce58SLsjP2w5pzphMrzikfzXqLSOmHQsO8VJzBRyVUcFLms4aQYQw',
      }
    }
  );

  const data: PexelsResponse = await response.json();

  const videos = data.videos.map(video => {
    const { id, image, url, video_files: videoFiles } = video;

    // Pexels doesn't provide a video title, we extract it from the URL's slug
    const path = (new URL(url)).pathname;
    const slug = path.split('/').filter(Boolean).at(-1) ?? '';
    const words = slug.split('-').slice(0, -1); // exclude the numeric id from the slug
    const title = words.map(w => `${w[0].toUpperCase()}${w.slice(1)}`).join(' ');

    // Index videos by resolution
    const files = videoFiles.reduce((acc, file) => ({ ...acc, [file.width]: file.link}), {});

    return { id, title, image, files } as Video;
  });

  return videos;
}
