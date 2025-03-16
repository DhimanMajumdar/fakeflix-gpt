import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { AiFillCaretRight } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 px-4 pt-20 md:px-20 md:pt-[15%] w-full aspect-video bg-gradient-to-b from-black text-white">
      {/* Title */}
      <h1 className="font-bold text-xl md:text-4xl">{title}</h1>

      {/* Overview - always visible */}
      <p className="py-2 text-sm md:text-lg w-full md:w-1/3">{overview}</p>

      {/* Buttons - only visible on desktop */}
      <div className="hidden md:flex md:flex-row py-2 space-x-2">
        <button className="flex items-center bg-gray-100 px-6 py-2 text-lg bg-opacity-90 hover:bg-opacity-70 rounded-md text-black">
          <AiFillCaretRight /> <span className="ml-2">Play</span>
        </button>
        <button className="flex items-center bg-gray-600 px-4 py-2 text-lg bg-opacity-80 hover:bg-opacity-70 rounded-md text-white">
          <FiAlertCircle className="mr-2" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
