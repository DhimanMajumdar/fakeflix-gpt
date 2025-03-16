import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import model from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const geminiQuery =
      "Act as a movie recommendation system and suggest five movie names for the query: " +
      searchText.current.value +
      ". Only return the names of 5 movies, comma-separated, with no additional text.";

    const result = await model.generateContent(geminiQuery);
    const textResponse = result.response.text();
    const gptMovies = textResponse
      .split(",")
      .map((movie) => movie.trim())
      .filter((movie) => movie.length > 0);

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div className="pt-[30%] md:pt-[20%] flex justify-center px-4">
      <form
        className="w-full md:w-1/2 bg-slate-950 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 md:p-4 m-2 md:m-4 col-span-8 md:col-span-9 text-sm md:text-base rounded-md"
          placeholder={
            lang[langkey]?.gptSearchPlaceholder ||
            "What would you like to see today?"
          }
        />
        <button
          className="px-2 py-2 md:px-4 md:py-2 bg-red-700 text-white rounded-lg col-span-4 md:col-span-3 m-2 md:m-4 text-xs md:text-base"
          onClick={handleGptSearchClick}
        >
          {lang[langkey]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
