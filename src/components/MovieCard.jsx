import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { FaYoutube } from "react-icons/fa"; // Using react-icons for the YouTube icon

const MovieCard = ({ posterPath, title, onTrailerClick }) => {
  if (!posterPath) return null;

  return (
    <div className="movie-card relative w-32 md:w-40 pr-3 md:pr-4 transition-transform transform hover:scale-110">
      <img
        alt="movie poster"
        className="rounded-md w-full object-cover pointer-events-none" // Disable click events for the image
        src={IMG_CDN_URL + posterPath}
      />
      <p className="text-gray-300 text-xs md:text-sm mt-2 truncate pointer-events-none">{title}</p> {/* Disable click events for the text */}

      {/* YouTube icon button, now it is the only clickable element */}
      <button
        onClick={onTrailerClick}
        className="absolute bottom-2 right-2 md:right-3 bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors z-10"
      >
        <FaYoutube className="text-white text-base md:text-lg" />
      </button>
    </div>
  );
};

export default MovieCard;
