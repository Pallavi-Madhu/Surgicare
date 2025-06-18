import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
//import hand from "../assets/hand.jpeg";
import vision from "../assets/perf.png";
import patient from "../assets/patient.jpg";
import doctor from "../assets/ffinal.png"
import hands from "../assets/hands.png"


const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const slides = [
    {
      image: hands,
      title: "Hands That Heal, Tools That Empower"
    },
    {
      image: vision,
      title: "Vision for Better Healthcare "
    },
    {
      image: doctor,
      title: "Precision in Every Touch"
    }
  ];

  const maxIndex = slides.length - 1;

  const nextSlide = () => {
    setImageLoaded(false);
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setImageLoaded(false);
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setImageLoaded(false);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlay || isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, maxIndex]);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  return (
    <div className="max-w-7xl w-full mt-16 md:mt-20 mx-auto p-4">
      <div 
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Main Container with advanced styling */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
          
          {/* Image Container */}
          
         <div className="relative w-full h-[500px] md:h-[700px] h-5xl xl:h-[1000px] overflow-hidden">
            
            {/* Loading Animation */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            )}
            
            {/* Main Image */}
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className={`w-full h-70 object-cover transition-all duration-1000 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              } group-hover:scale-105`}
              onLoad={() => setImageLoaded(true)}
            />
            
            
            {/* Animated Border */}
            <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            {/* Title with Enhanced Typography */}
            <div className="absolute bottom-12 left-12 z-10">
              <div className="space-y-2">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <h3 className="text-white lg:text-5xl sm:text-xl md:text-2xl font-black tracking-tight drop-shadow-2xl">
                  {slides[currentIndex].title.split(' ').map((word, index) => (
                    <span 
                      key={index} 
                      className="inline-block mr-3 transform transition-all duration-700 hover:scale-110"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: imageLoaded ? 'slideInUp 0.8s ease-out forwards' : 'none'
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </h3>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Enhanced */}
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 group/btn opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={28} className="text-white group-hover/btn:text-blue-400 transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 group/btn opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={28} className="text-white group-hover/btn:text-blue-400 transition-colors" />
          </button>
           

         
          {/* Auto-play Control */}
          <div className="absolute top-8 right-8 z-20">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="p-3 rounded-full bg-black/20 backdrop-blur-xl border border-white/20 hover:bg-black/30 transition-all duration-300 group/play"
            >
              {isAutoPlay ? (
                <Pause size={20} className="text-white group-hover/play:text-green-400" />
              ) : (
                <Play size={20} className="text-white group-hover/play:text-green-400" />
              )}
            </button>
          </div>

          
          {/* Advanced Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/30">
            <div className="relative h-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out relative"
                style={{ 
                  width: `${((currentIndex + 1) / slides.length) * 100}%`
                }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Floating Particles Animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Slideshow;








































// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
// import { AnimatePresence, motion } from 'framer-motion';
// import hand from "../assets/hand.jpeg";
// import vision from "../assets/see.png";
// import patient from "../assets/patient.jpg";
// import doctor from "../assets/doctor.png"

// const CardsSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlay, setIsAutoPlay] = useState(true);

//   const cards = [
//         {
//       id: 1,
//       image: vision,
//       title: "Ocean Retreat",
      
//     },
//     {
//       id: 2,
//       image: hand,
//       title: "Mountain Paradise",

//     },

//     {
//       id: 3,
//       image: doctor,
//       title: "Forest Adventure",
//     }
//   ];

//   const maxIndex = cards.length - 1;

//   const nextSlide = () => {
//     setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
//   };

//   useEffect(() => {
//     if (!isAutoPlay) return;
//     const interval = setInterval(nextSlide, 4000);
//     return () => clearInterval(interval);
//   }, [isAutoPlay, maxIndex]);

//   return (
//     <div className="max-w-7xl w-full mt-16 md:mt-20 mx-auto bg-green-700  p-4 ">
//       <div className="relative rounded-xl bg-white shadow-">
        
//         {/* Navigation Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
//         >
//           <ChevronLeft size={24} className="text-gray-700 group-hover:text-green-700" />
//         </button>
        
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
//         >
//           <ChevronRight size={24} className="text-gray-700 group-hover:text-green-700" />
//         </button>

//         {/* Card Display */}
//         <div className="overflow-hidden">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={cards[currentIndex].id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="group cursor-pointer r transition-all duration-500 scale-100 opacity-100"
//             >


//       {/* Image */}
//     <div className="relative ">
//       <div className="relative">
//         {/* Dark Overlay */}
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: 'rgba(1, 2, 1, 0.2)',
//             zIndex: 10,
//             transition: 'opacity 0.3s ease-in-out',
//           }}
//           className='rounded-xl'
//         />

//         {/* Title Over Image */}
//         <div className="absolute bottom-4 left-4 z-20">
//           <h3 className="text-white text-2xl font-bold drop-shadow-md">{cards[currentIndex].title}</h3>
//         </div>

//   {/* Image */}
//         <img
//           src={cards[currentIndex].image}
//           alt={cards[currentIndex].title}
//           className="w-full rounded-t-xl h-90 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//       </div>

//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center space-x-2 pt-2">
//           {cards.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentIndex
//                   ? 'bg-blue-600 scale-125'
//                   : 'bg-gray-300 hover:bg-gray-400'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Auto-play Toggle */}
//         <div className="text-center p-2">
//           {/* <button
//             onClick={() => setIsAutoPlay(!isAutoPlay)}
//             className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//               isAutoPlay
//                 ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
//                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//             }`}
//           >
//             {isAutoPlay ? 'Pause Auto-play' : 'Start Auto-play'}
//           </button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardsSlider;
