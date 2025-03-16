import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const handleCardClick = (movieTitle) => {
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      movieTitle + " trailer"
    )}`;
    window.open(youtubeSearchUrl, "_blank");
  };

  return (
    <div className="relative px-4 sm:px-6 overflow-hidden mt-0 sm:mt-0">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl py-4 text-white">{title}</h1>

      {/* Scroll icons */}
      <button
        onClick={() => handleScroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full"
      >
        <FiChevronLeft className="text-white w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      <button
        onClick={() => handleScroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full"
      >
        <FiChevronRight className="text-white w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Movie cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll custom-scroll cursor-pointer space-x-3 sm:space-x-4"
      >
        {movies?.map((movie) => (
          <div key={movie.id} className="flex-shrink-0">
            <MovieCard
              posterPath={movie.poster_path}
              title={movie.title || movie.name}
              onTrailerClick={() => handleCardClick(movie.title || movie.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
