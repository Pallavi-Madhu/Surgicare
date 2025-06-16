import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight,} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import departments from "../Data/departments";

const DepNav = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

    const navigate = useNavigate();

  const handleChoose = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
    setCurrentIndex(index);
    setIsTransitioning(false);
    }, 150);
  };


  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % departments.length);
      setIsTransitioning(false);
    }, 150);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + departments.length) % departments.length
      );
      setIsTransitioning(false);
    }, 150);
  };

  const handleNavigate = () => {
    navigate(`/${departments[currentIndex].id}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const Icon = departments[currentIndex].icon;

  return (
    <div className="mt-10 mb-20 flex flex-col items-center">
      <div className="flex items-center gap-8">
        <button
          onClick={handlePrev}
          className="group relative p-5 rounded-full bg-white border-2 transition-all duration-300 hover:scale-110 hover:border-green-500 hover:shadow-lg"
        >
          <FaArrowLeft className="h-6 w-6 text-green-700 group-hover:text-green-900 transition-colors duration-300" />
          <div className="absolute inset-0 rounded-full bg-green-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>

        <button
          onClick={handleNavigate}
          className={`relative w-80 h-16 hover:bg-green-50 hover:text-green-900 rounded-full bg-white text-green-800 border-2 border-green-500 hover:border-green-600 transition-all duration-500 text-xl font-bold shadow-lg hover:shadow-2xl hover:shadow-green-300/50 hover:scale-105 overflow-hidden  ${
            isTransitioning ? 'scale-95 opacity-80' : ''
          }`}
        >
              <span className="relative flex items-center justify-center gap-2">
            <Icon className="text-green-800 text-xl" />
            {departments[currentIndex].name}
          </span>
        </button>

        <button
          onClick={handleNext}
          className="group relative p-5 rounded-full bg-white border-2 transition-all duration-300 hover:scale-110 hover:border-green-500 hover:shadow-lg"
        >
          <FaArrowRight className="h-6 w-6 text-green-700 group-hover:text-green-900 transition-colors duration-300" />
          <div className="absolute inset-0 rounded-full bg-green-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      </div>
      
      <div className="flex gap-2 mt-6">
  {departments.map((_, index) => (
    <div
      key={index}
      onClick={() => handleChoose(index)} 
      className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-500 ${
        index === currentIndex
          ? 'bg-green-700 shadow-lg scale-125'
          : 'bg-green-300 hover:bg-green-500'
      }`}
    />
  ))}
</div>

    </div>
  );
};

export default DepNav;