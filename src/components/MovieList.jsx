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
    <div className="px-6 overflow-hidden">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll custom-scroll cursor-pointer">
        <div className="flex space-x-4 sm:space-x-2">
          {movies?.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleCardClick(movie.title || movie.name)}
              className="flex-shrink-0 w-32 sm:w-36 md:w-40 lg:w-48" // Ensuring responsiveness
            >
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
