import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const {
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
  } = useSelector((store) => store.movies);

  return (
    <div className="bg-stone-950">
      {/* Conditional margin */}
      <div className="relative z-20 md:-mt-52 pl-4 md:pl-12">
        {nowPlayingMovies && (
          <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies} />
        )}
        {popularMovies && (
          <MovieList title={"Popular Movies"} movies={popularMovies} />
        )}
        {topRatedMovies && (
          <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
        )}
        {upcomingMovies && (
          <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
