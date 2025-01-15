import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Cards";
import blue from "../assets/world.png";
import { cards } from "../Data/dataHome";
import surgeryVideo from "../assets/Surgeryequip.mp4";


const Home = () => {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${blue})`,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="relative w-full mt-20">
          <video
            className="w-full h-96 object-cover blur-md"
            autoPlay
            muted
            loop
          >
            <source src={surgeryVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <span className="text-white text-6xl font-black drop-shadow-lg">
              "Delivering health solutions
              <br />
              for a better tomorrow."
            </span>
          </div>
        </div>
        <div className="relative px-6 py-8">
          <p className="text-lg text-black leading-relaxed  font-bold mx-auto max-w-3xl mt-8 mb-12">
            At Nandana SurgiCare, we take pride in being a trusted distributor
            of world-class biomedical equipment, enabling healthcare
            professionals to deliver exceptional patient care. With our strong
            focus on quality, innovation, and reliability, we offer a
            comprehensive range of medical instruments and devices from some of
            the most respected brands in the industry. Whether you're looking
            for critical solutions in Cardiology, Vascular, Anesthesia, or
            Neurology, we have the right equipment to meet the needs of
            healthcare providers in both government and private sectors.
          </p>
          <p className="text-lg text-black leading-relaxed font-bold mx-auto max-w-3xl">
            Our strategic partnerships with leading global manufacturers ensure
            that we provide the latest and most reliable medical technologies.
            From advanced ECMO machines to surgical instruments and disposables,
            we’re here to support healthcare professionals in their mission to
            save lives and improve patient outcomes.
          </p>
        </div>
        <div className="text-7xl text-black font-bold text-center">
          <h1>Why choose us?</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-gray-300 p-6 rounded-lg shadow-md hover:bg-gray-200 transition-all mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Quality Assurance
            </h3>
            <p className="text-gray-800">
              We offer only top-tier products from globally recognized brands,
              ensuring the highest standards in patient care.
            </p>
          </div>

          <div className="bg-gray-300 p-6 rounded-lg shadow-md hover:bg-gray-200 transition-all mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              End-to-End Solutions
            </h3>
            <p className="text-gray-800">
              From delivery and installation to training and support, we provide
              comprehensive services to healthcare providers.
            </p>
          </div>

          <div className="bg-gray-300 p-6 rounded-lg shadow-md hover:bg-gray-200 transition-all mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Customer-Centric Approach
            </h3>
            <p className="text-gray-800">
              We are dedicated to understanding your unique needs and offering
              tailored solutions for your hospital or clinic.
            </p>
          </div>
          <div className="text-center mt-12 mb-16">
            <h2 className="text-5xl font-bold text-gray-800 ">
              Explore Our Principal Firms
            </h2>
            {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the innovative medical equipment and devices we supply.
              We are committed to helping healthcare professionals across Kerala
              and beyond access the best in biomedical technology.
            </p> */}
          </div>
        </div>
        <div className=" min-h-screen flex flex-col items-center justify-center py-10">
          {/* <h1 className="text-4xl text-black font-bold mb-10 text-center">
            Our Principal Firms
          </h1> */}
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
            className="w-full max-w-xl " //p-x-4
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
