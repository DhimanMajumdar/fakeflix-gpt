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
    <div className="bg-stone-950 relative z-20 
      -mt-16 sm:-mt-20 md:-mt-28 lg:-mt-36 xl:-mt-44 2xl:-mt-52 
      pb-8">
      {/* Optional top gradient for smooth overlap */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/70 to-transparent z-10"></div>

      <div className="relative pl-4 md:pl-12 mt-4 md:mt-8 z-20">
        {nowPlayingMovies && (
          <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies} />
        )}
        {upcomingMovies && (
          <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
        )}
        {popularMovies && (
          <MovieList title={"Popular Movies"} movies={popularMovies} />
        )}
        {topRatedMovies && (
          <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
        )}
        
      </div>
    </div>
  );
};

export default SecondaryContainer;
