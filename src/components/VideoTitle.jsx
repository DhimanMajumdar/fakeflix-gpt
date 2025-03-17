import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { AiFillCaretRight } from "react-icons/ai";

const VideoTitle = ({ title, overview, trailerKey }) => {
  const youtubeUrl = `https://www.youtube.com/watch?v=${trailerKey}`;

  return (
    <div className="absolute top-0 left-0 w-full aspect-video flex flex-col justify-center items-start px-4 md:px-20 py-4 bg-gradient-to-b from-black/50 to-black/0 text-white z-20">
      <h1 className="font-bold text-xl md:text-4xl">{title}</h1>

      <p className="hidden md:block py-2 text-sm md:text-lg w-full md:w-1/3">{overview}</p>

      <div className="flex flex-row py-2 space-x-2">
        {/* Mobile-only Play button */}
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white text-black px-4 py-2 rounded-md md:hidden"
        >
          <AiFillCaretRight />
          <span className="ml-4">Play</span>
        </a>

        {/* Desktop-only buttons */}
        <div className="hidden md:flex space-x-2">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-100 px-6 py-2 text-lg bg-opacity-90 hover:bg-opacity-70 rounded-md text-black"
          >
            <AiFillCaretRight /> <span className="ml-2">Play on YT</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
