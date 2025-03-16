import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css"; // Import the CSS file

const MovieList = ({ title, movies }) => {
  const handleCardClick = (movieTitle) => {
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      movieTitle + " trailer"
    )}`;
    window.open(youtubeSearchUrl, "_blank");
  };

  return (
    <div className="px-4 sm:px-6 overflow-hidden">
      <h1 className="text-2xl sm:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll custom-scroll cursor-pointer">
        <div className="flex space-x-3 sm:space-x-4">
          {movies?.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0"
            >
              <MovieCard
                posterPath={movie.poster_path}
                title={movie.title || movie.name}
                onTrailerClick={() => handleCardClick(movie.title || movie.name)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
