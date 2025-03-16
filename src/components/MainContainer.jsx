import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-white text-xl font-semibold animate-pulse">
        Loading...
      </div>
    );
  }

  const mainMovie = movies[0];

  if (!mainMovie) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-white text-lg">
        No movie data found.
      </div>
    );
  }

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
