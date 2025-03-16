import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const GptMovieSuggestionList = ({ title, movies }) => {

    const handleTrailerClick = (movieTitle) => {
        const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
            movieTitle + " trailer"
        )}`;
        window.open(youtubeSearchUrl, "_blank");
    };

    return (
        <div className="py-2 px-2 md:p-4 bg-black bg-opacity-60 rounded-lg">
            <h1 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-white">{title}</h1>
            <div className="flex flex-row overflow-x-scroll scrollbar space-x-3 md:space-x-4">
                {movies && movies.length > 0 ? (
                    movies.map((movie, index) => (
                        <MovieCard
                            id={movie?.id}
                            posterPath={movie?.backdrop_path || movie?.poster_path}
                            title={movie?.title || movie?.name}
                            description={movie?.overview}
                            releaseDate={movie?.release_date}
                            key={index}
                            onTrailerClick={() => handleTrailerClick(movie?.title || movie?.name)}
                        />
                    ))
                ) : (
                    <p className="text-white text-sm md:text-lg">No movies to display</p>
                )}
            </div>
        </div>
    );
};

export default GptMovieSuggestionList;
