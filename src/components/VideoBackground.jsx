import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer'; // Import custom hook

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId); // Fetch trailer for the given movieId

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  if (!trailerVideo) {
    return (
      <div className="flex justify-center items-center w-screen h-screen bg-gray-800">
        {/* Loading spinner */}
        <div className="spinner-border animate-spin border-t-4 border-blue-500 w-16 h-16 rounded-full border-solid"></div>
      </div>
    ); // Show loading spinner while fetching
  }

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key  // Autoplay, mute, and loop parameters
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
