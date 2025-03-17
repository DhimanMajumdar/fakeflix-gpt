import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  if (!movies || movies.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-white text-xl font-semibold animate-pulse">
        Loading...
      </div>
    );
  }

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full">
      {/* 👇 Pass trailer key here */}
      <VideoTitle
        title={original_title}
        overview={overview}
        trailerKey={trailerVideo?.key}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
