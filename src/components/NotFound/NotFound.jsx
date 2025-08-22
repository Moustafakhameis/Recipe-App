import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-[#121212] font-[Poppins] overflow-hidden relative p-4">

      <Link
        to="/"
        className="fixed z-10 flex items-center gap-2 border-2 border-gray-600 text-gray-600 px-3 py-2 transition hover:bg-gray-200 hover:text-gray-900 hover:border-transparent rounded"
      >
        <svg
          height="0.8em"
          width="0.8em"
          viewBox="0 0 2 1"
          preserveAspectRatio="none"
        >
          <polyline
            fill="none"
            stroke="#777777"
            strokeWidth="0.1"
            points="0.9,0.1 0.1,0.5 0.9,0.9"
            className="transition group-hover:stroke-black"
          />
        </svg>
        Home
      </Link>


      <div className="relative w-full h-full select-none">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-35 text-[50rem] text-[#282828] tracking-wider m-0">
          404
        </h1>
      </div>


      <p className="fixed bottom-4 right-6 text-gray-200 text-[calc(1em+3vmin)] text-right m-0 drop-shadow-[0_0_2px_#121212] w-[70%] sm:w-1/2 lg:w-1/3 xl:w-1/4">
        The page you’re looking for does not exist.
      </p>
    </div>
  );
}
