import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { FaYoutube } from "react-icons/fa";

const MovieCard = ({ posterPath, title, onTrailerClick }) => {
  if (!posterPath) return null;

  return (
    <div className="movie-card relative w-32 md:w-40 pr-3 md:pr-4 transition-transform transform hover:scale-110 hover:shadow-lg">
      <img
        alt="movie poster"
        className="rounded-md w-full object-cover pointer-events-none"
        src={IMG_CDN_URL + posterPath}
      />
      <p className="text-gray-300 text-xs md:text-sm mt-2 truncate pointer-events-none">{title}</p>

      <button
        onClick={onTrailerClick}
        aria-label={`Watch trailer for ${title}`}
        className="absolute bottom-2 right-2 md:right-3 bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors z-10 cursor-pointer"
      >
        <FaYoutube className="text-white text-base md:text-lg" />
      </button>
    </div>
  );
};

export default MovieCard;
