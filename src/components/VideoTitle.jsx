import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { AiFillCaretRight } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[30%] md:pt-[19%] absolute px-6 md:px-20 w-full aspect-video bg-gradient-to-br from-black text-white">
      <h1 className="font-bold text-2xl md:text-3xl">{title}</h1>
      <p className="hidden md:block py-6 text-md md:text-lg text-sm w-full md:w-1/3">{overview}</p>
      
      <div className="flex flex-col md:flex-row py-2 space-y-2 md:space-y-0 md:space-x-2">
        <button className="flex items-center bg-gray-100 px-4 md:px-10 py-1 md:py-2 text-sm md:text-lg bg-opacity-90 hover:bg-opacity-70 rounded-md text-black w-full md:w-auto">
          <AiFillCaretRight /> Play
        </button>
        <button className="flex items-center bg-gray-600 px-2 md:px-4 py-2 mx-2 text-sm md:text-lg bg-opacity-80 hover:bg-opacity-70 rounded-md w-full md:w-auto">
          <FiAlertCircle className="mr-2" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
