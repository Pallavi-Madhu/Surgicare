import React, { useState } from "react";
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
  navigate(`/${departments[currentIndex].id}`);
};
return (
  <>
    {/* Department Navigation (Just Above Footer) */}
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
          className="p-4 w-60 h-14 rounded-3xl hover:text-white text-black border hover:bg-black bg-blue-300 transition text-lg font-bold"
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
