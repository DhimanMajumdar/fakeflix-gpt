import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative w-full min-h-screen pt-24 md:pt-28 ">
      {/* Background Image */}
      <div className="brightness-50 -z-10 fixed inset-0 w-full h-full">
        <img
          className="object-cover w-full h-full"
          src={BG_URL}
          alt="background"
        />
      </div>

      {/* Search Bar */}
      <div className="relative z-10">
        <GptSearchBar />
      </div>

      {/* Suggestions */}
      <div className="relative z-10">
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
