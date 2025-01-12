// import React from "react";
// import Navbar from "../Components/Navbar";

// const Home = () => {
//   return (
//     <>
//       <div className="min-h-screen bg-blue-400">
//         <Navbar />
//       </div>
//     </>
//   );
// };

// export default Home;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const HomePage = () => {
  const cards = [
    {
      title: "Card 1",
      description: "This is a stunning card with an awesome design.",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
    },
    {
      title: "Card 2",
      description: "Another beautiful card to slide through.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Card 3",
      description: "Your content can look as amazing as this!",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Card 4",
      description: "Customize the cards as per your needs.",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className=" bg-blue-400">
      <Navbar />
      <div className="min-h-screen flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl text-black font-bold mb-10">
          Stunning Sliding Cards
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full max-w-xl"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold">{card.title}</h2>
                  <p className="text-gray-700 mt-2">{card.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
