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
      image: hand,
      title: "Mountain Paradise",
      description: "Experience breathtaking views and serene mountain landscapes that will leave you speechless.",
      location: "Swiss Alps",
      rating: 4.9,
      price: "$299",
      category: "Adventure"
    },
    {
      id: 2,
      image: vision,
      title: "Ocean Retreat",
      description: "Relax by crystal clear waters and enjoy the peaceful sounds of ocean waves.",
      location: "Maldives",
      rating: 4.8,
      price: "$599",
      category: "Luxury"
    },
    {
      id: 3,
      image: pink,
      title: "Forest Adventure",
      description: "Immerse yourself in nature's beauty with hiking trails and wildlife encounters.",
      location: "Amazon Rainforest",
      rating: 4.7,
      price: "$399",
      category: "Nature"
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
    <div className="w-full mt-14 lg:mt-20 max-w-7xl bg-green-700 mx-auto p-6">
      <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl">
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <ChevronLeft size={24} className="text-gray-700 group-hover:text-blue-600" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <ChevronRight size={24} className="text-gray-700 group-hover:text-blue-600" />
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
              className="group cursor-pointer transition-all duration-500 scale-100 opacity-100"
            >
              <div className="p-[2px] bg-gradient-to-tr from-blue-400 via-pink-400 to-yellow-300 rounded-2xl">
                <div className="bg-white rounded-[inherit] shadow-xl overflow-hidden hover:shadow-2xl hover:ring-2 hover:ring-blue-200 transition-all duration-500 group-hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={cards[currentIndex].image}
                      alt={cards[currentIndex].title}
                      className="w-full h-72 sm:h-96 lg:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                        {cards[currentIndex].category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 group/heart">
                        <Heart size={16} className="text-gray-600 group-hover/heart:text-red-500 group-hover/heart:fill-red-500 transition-all duration-300" />
                      </button>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
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
        <div className="text-center mt-4">
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
