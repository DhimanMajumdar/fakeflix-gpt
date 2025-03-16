import React from 'react';
import { useSelector } from 'react-redux';
import { AiFillCaretRight } from 'react-icons/ai';
import { FiAlertCircle } from 'react-icons/fi';
import useMovieTrailer from '../hooks/useMovieTrailer'; // Custom hook

const fallbackTrailer = {
  key: 'TcMBFSGVi1c', // Endgame official trailer
  title: 'Avengers: Endgame',
  overview:
    'After the devastating events of Avengers: Infinity War, the universe is in ruins. The Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
};

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId); // Custom hook to fetch trailer for given movieId
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  const videoData = trailerVideo || fallbackTrailer;

  const handlePlayClick = () => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoData.key}`;
    window.open(youtubeUrl, '_blank');
  };

  return (
    <div className="relative w-screen">
      {/* Background Trailer */}
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${videoData.key}?autoplay=1&mute=1&loop=1&playlist=${videoData.key}`}
        title={videoData.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Title and Description Overlay */}
      <div className="absolute top-0 left-0 px-4 pt-20 md:px-20 md:pt-[15%] w-full aspect-video bg-gradient-to-b from-black/70 text-white">
        <h1 className="font-bold text-xl md:text-4xl">{videoData.title}</h1>

        {/* Overview visible only on desktop */}
        <p className="py-2 text-sm md:text-lg w-full md:w-1/3 hidden md:block">{videoData.overview}</p>

        {/* Buttons visible on all screens */}
        <div className="flex flex-row py-2 space-x-2">
          <button
            onClick={handlePlayClick}
            className="flex items-center bg-gray-100 px-6 py-2 text-sm md:text-lg bg-opacity-90 hover:bg-opacity-70 rounded-md text-black"
          >
            <AiFillCaretRight /> <span className="ml-2">Play</span>
          </button>
          <button className="flex items-center bg-gray-600 px-4 py-2 text-sm md:text-lg bg-opacity-80 hover:bg-opacity-70 rounded-md text-white">
            <FiAlertCircle className="mr-2" /> More
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
