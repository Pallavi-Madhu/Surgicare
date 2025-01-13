import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import scope from "../assets/scope.jpg";
import image1 from "../assets/BL LifSciences.png";
import image2 from "../assets/Baxter.png";
import image3 from "../assets/Scanlan.png";
import image4 from "../assets/Terumo.png";
import image5 from "../assets/Artivion.png";
import image6 from "../assets/Grena.png";
import image7 from "../assets/Halyard.png";
import image8 from "../assets/Sinapi.png";
import image9 from "../assets/Syncromax.png";
import image10 from "../assets/Mizuho.png";
import image11 from "../assets/deSoutter.png";
import image12 from "../assets/Sunoptic.png";
import image13 from "../assets/Helena.png";
import image14 from "../assets/Cocoon.png";
import image15 from "../assets/Toray.png";

const Home = () => {
  const cards = [
    {
      description: "Innovative medical technology for improved patient care.",
      image: image1,
    },
    {
      description: "Global leader in healthcare solutions and medical devices.",
      image: image2,
    },
    {
      description: "Trusted provider of high-quality surgical instruments.",
      image: image3,
    },
    {
      description:
        "Leading the way in medical devices and healthcare innovations.",
      image: image4,
    },
    {
      description: "Pioneering heart valve technologies for better outcomes.",
      image: image5,
    },
    {
      description: "Cutting-edge solutions in medical devices and diagnostics.",
      image: image6,
    },
    {
      description:
        "Trusted medical solutions for hospitals and healthcare professionals.",
      image: image7,
    },
    {
      description:
        "Advanced healthcare products designed for better patient care.",
      image: image8,
    },

    {
      description:
        "Innovative products improving surgical precision and outcomes.",
      image: image9,
    },
    {
      description:
        "Delivering high-quality medical devices with global impact.",
      image: image10,
    },
    {
      description: "Precision-driven surgical instruments for advanced care.",
      image: image11,
    },
    {
      description:
        "Specializing in optical and medical equipment for healthcare.",
      image: image12,
    },
    {
      description:
        "Healthcare solutions focused on blood transfusion and diagnostics.",
      image: image13,
    },
    {
      description:
        "Innovative technology solutions in medical and healthcare sectors.",
      image: image14,
    },
    {
      description:
        "Global leader in high-performance materials and medical products.",
      image: image15,
    },
  ];

  return (
    <div
            className="min-h-screen bg-cover bg-fixed bg-center"
            style={{
              backgroundImage: `url(${scope})`,
              backgroundColor: "rgba(255, 255, 255, 0.5)", // Transparent white overlay
              backgroundBlendMode: "overlay", // Combine the image and color
            }}
          >
      <div className="min-h-screen grid grid-rows-[1fr_auto]">
        <Navbar />
        <div className="min-h-screen flex-grow flex flex-col items-center justify-center">
          <h1 className="text-4xl text-black font-bold mb-10">
            Our Principal Firms
          </h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
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
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
                  <img
                    src={card.image}
                    className="{/*object-contain max-h-full w-38 h-38 md:w-50 md:h-46 rounded-lg mb-4*/} object-contain w-50 h-40 rounded-lg mb-4"
                    //className="w-full h-30 object-contain"
                  />
                  <div className="p-4 flex-row text-center">
                    <p className="text-gray-800 text-xl font-bold flex-col mt-2 mb-4">
                      {card.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
