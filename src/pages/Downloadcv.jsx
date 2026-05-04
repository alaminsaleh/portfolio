import React from "react";
import { FaDownload } from "react-icons/fa";

const Downloadcv = () => {
  return (
    <div className="flex justify-center">
      <a
        href="/CV OF alamin.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-6 py-3 rounded-full
                   bg-primary text-white font-semibold
                   hover:bg-secondary transition-all duration-300
                   shadow-md hover:shadow-lg"
      >
        <FaDownload className="text-lg" />
        Download CV
      </a>
    </div>
  );
};

export default Downloadcv;