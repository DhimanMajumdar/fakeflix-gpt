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
      <div className="-mt-52 pl-12 relative z-20">
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
