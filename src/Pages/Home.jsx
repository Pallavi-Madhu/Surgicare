import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Cards";
import scope from "../assets/scope.jpg";
import { cards } from "../Data/dataHome";

const Home = () => {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${scope})`,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="min-h-screen grid grid-rows-[1fr_auto] w-full">
        <Navbar />
        <div className="min-h-screen flex-grow flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl text-black font-bold mb-10 text-center">
            Our Principal Firms
          </h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
            }}
            className="w-full max-w-xl px-4"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <Card image={card.image} description={card.description} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;