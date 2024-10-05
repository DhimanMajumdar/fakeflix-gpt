import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer'; // Import custom hook

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId); // Fetch trailer for the given movieId

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  if (!trailerVideo) {
    return <div>Loading trailer...</div>; // Show loading state while fetching
  }

  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1" // Autoplay and mute parameters in the URL
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
