import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer'; // Import custom hook

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId); // Fetch trailer for the given movieId

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  if (!trailerVideo) {
    return (
      <div className="flex justify-center items-center w-screen h-[60vh] bg-gray-900">
        {/* Loading spinner */}
        <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
