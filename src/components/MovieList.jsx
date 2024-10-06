import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css"; // Import the CSS file

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 overflow-hidden">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll custom-scroll cursor-pointer"> {/* Add the class 'custom-scroll' */}
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
