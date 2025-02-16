import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import Footer from './Footer'; // ✅ Import Footer

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        {showGptSearch ? <GptSearch /> : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
      <Footer /> {/* ✅ Footer only appears in Browse */}
    </div>
  );
};

export default Browse;
