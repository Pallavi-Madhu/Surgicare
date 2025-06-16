import React, { useState,useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import departments from "../Data/departments";

const DepNav = () => {const [currentIndex, setCurrentIndex] = useState(0);

const navigate = useNavigate();

const handleNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % departments.length);
};

const handlePrev = () => {
  setCurrentIndex(
    (prevIndex) => (prevIndex - 1 + departments.length) % departments.length
  );
};

const handleNavigate = () => {
  console.log("Navigating to:", `/${departments[currentIndex].id}`);
  navigate(`/${departments[currentIndex].id}`);
};

 useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);


return (
  <>
    {/* Department Navigation  */}
    <div className="mt-10 mb-20 flex flex-col items-center">
      <div className="flex items-center gap-6">
        <button
          onClick={handlePrev}
          className="p-4 rounded-full  border-black hover:bg-gray-300"
        >
          <FaArrowLeft className="h-6 w-6" />
        </button>

        {/* Department Button */}
        <button
          onClick={handleNavigate}
          className="p-4 w-60 h-14 rounded-3xl hover:text-white text-white border hover:bg-black bg-green-400 transition text-lg font-bold"
        >
          {departments[currentIndex].name}
        </button>

        <button
          onClick={handleNext}
          className="p-4 rounded-full  border-black hover:bg-gray-200"
        >
          <FaArrowRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  </>
);
};

export default DepNav;
