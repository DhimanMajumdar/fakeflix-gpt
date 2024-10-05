import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;

  return (
    <div className="movie-card w-40  pr-4 transition-transform transform hover:scale-110">
      <img
        alt="movie poster"
        className="rounded-md hover:cursor-pointer"
        src={IMG_CDN_URL + posterPath}
      />
      <p className="text-gray-300 text-sm mt-2">{title}</p>
    </div>
  );
};

export default MovieCard;
