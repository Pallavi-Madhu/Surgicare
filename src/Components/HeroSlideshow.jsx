import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import hand from "../assets/hand.jpeg";
import vision from "../assets/see.png";
import pink from "../assets/pink.jpeg";

const CardsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const cards = [
        {
      id: 1,
      image: vision,
      title: "Ocean Retreat",
      description: "Relax by crystal clear waters and enjoy the peaceful sounds of ocean waves.",
    },
    {
      id: 2,
      image: hand,
      title: "Mountain Paradise",
      description: "Experience breathtaking views and serene mountain landscapes that will leave you speechless.",
    },

    {
      id: 3,
      image: pink,
      title: "Forest Adventure",
      description: "Immerse yourself in nature's beauty with hiking trails and wildlife encounters.",
    }
  ];

  const maxIndex = cards.length - 1;

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, maxIndex]);

  return (
    <div className="max-w-7xl w-full mt-16 md:mt-20 mx-auto bg-green-700  p-4 ">
      <div className="relative rounded-xl bg-white shadow-">
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <ChevronLeft size={24} className="text-gray-700 group-hover:text-green-700" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <ChevronRight size={24} className="text-gray-700 group-hover:text-green-700" />
        </button>

        {/* Card Display */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={cards[currentIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer r transition-all duration-500 scale-100 opacity-100"
            >


                  {/* Image */}
                  <div className="relative overflow-hidden">
<div className="relative">
  {/* Dark Overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(1, 2, 1, 0.2)',
      zIndex: 10,
      transition: 'opacity 0.3s ease-in-out',
    }}
    className='rounded-xl'
  />

  {/* Title Over Image */}
  <div className="absolute bottom-4 left-4 z-20">
    <h3 className="text-white text-2xl font-bold drop-shadow-md">{cards[currentIndex].title}</h3>
  </div>

  {/* Image */}
  <img
    src={cards[currentIndex].image}
    alt={cards[currentIndex].title}
    className="w-full rounded-t-xl h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
  />
</div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 pt-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center p-2">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isAutoPlay
                ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isAutoPlay ? 'Pause Auto-play' : 'Start Auto-play'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsSlider;
