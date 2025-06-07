import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Cards";
import bg from "../assets/bg.png";
import { cards } from "../Data/dataHome";
import surgeryVideo from "../assets/Surgeryequip.mp4";
import positive from "../assets/positive.png"
import dist from "../assets/dist.png"
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="relative w-full ">
          <video
            className="w-full h-96 object-cover opacity-80"
            autoPlay
            muted
            loop
          >
            <source src={surgeryVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <span className="text-white text-3xl sm:text-6xl text-center font-black drop-shadow-lg">
              "Delivering health solutions
              <br />
              for a better tomorrow."
            </span>
          </div>
        </div>

        <div className="relative px-10">
          {/* First Section */}
          <motion.div
            className="bg-gradient-to-r from-blue-300 to-white flex flex-col-reverse lg:flex-row md:mx-20 gap-6 mt-10 p-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
            //viewport={{ once: true }}
          >
            <motion.p
              className="text-2xl text-black text-center leading-relaxed font-bold max-w-3xl mt-6 lg:mt-28"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
              //viewport={{ once: true }}
            >
              At Nandana SurgiCare, we take pride in being a trusted distributor
              of world-class biomedical equipment, enabling healthcare
              professionals to deliver exceptional patient care. With our strong
              focus on quality, innovation, and reliability, we offer a
              comprehensive range of medical instruments and devices from some
              of the most respected brands in the industry. Whether you're
              looking for critical solutions in <span className="font-bold text-3xl text-blue-900">Cardiology, Thoracic Surgery,
              Neurosurgery, or Plastic Surgery</span>, we have the right equipment to meet the
              needs of healthcare providers in both government and private
              sectors.
            </motion.p>
            <motion.img
              src={positive}
              className="w-full m-auto h-auto max-w-sm rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.3 }}
              //viewport={{ once: true }}
            />
          </motion.div>

          <br />
          <br />

          {/* Second Section */}
          <motion.div
            className="bg-gradient-to-l from-blue-300 to-white flex flex-col lg:flex-row md:mx-20 p-6 gap-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
            //viewport={{ once: true }}
          >
            <motion.img
              src={dist}
              className="w-full m-auto h-auto max-w-sm rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.3 }}
              //viewport={{ once: true }}
            />
            <motion.p
              className="text-2xl text-black text-center leading-relaxed font-bold max-w-3xl mt-6 lg:mt-14"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
              //viewport={{ once: true }}
            >
              Our strategic partnerships with leading global manufacturers
              ensure that we provide the latest and most reliable medical
              technologies. From advanced ECMO machines to surgical instruments
              and disposables, we’re here to support healthcare professionals in
              their mission to save lives and improve patient outcomes.
            </motion.p>
          </motion.div>
        </div>
        <br />
        <br />
        <br />

        <div className="text-7xl text-black font-bold text-center p-10">
          <h1>Why choose us?</h1>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-3 px-10 gap-8">
          {/* Quality Assurance */}
          <motion.div
            className="p-14  rounded-lg shadow-md hover:bg-gray-200 transition-all mt-8"
            initial={{ opacity: 0, translateY: 50, background: "white" }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              background: "linear-gradient(to bottom, #BFDBFE, white)", // Blue-300 to White gradient
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            //viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Quality Assurance
            </h3>
            <p className="text-gray-800">
              We offer only top-tier products from globally recognized brands,
              ensuring the highest standards in patient care.
            </p>
          </motion.div>

          {/* End-to-End Solutions */}
          <motion.div
            className="p-10 rounded-lg shadow-md hover:bg-gray-200 transition-all mt-8"
            initial={{ opacity: 0, translateY: 50, background: "white" }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              background: "linear-gradient(to bottom, #BFDBFE, white)", // Blue-300 to White gradient
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            //viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              End-to-End Solutions
            </h3>
            <p className="text-gray-800">
              From delivery and installation to training and support, we provide
              comprehensive services to healthcare providers.
            </p>
          </motion.div>

          {/* Customer-Centric Approach */}
          <motion.div
            className="p-10 rounded-lg shadow-md hover:bg-gray-200 transition-all mt-8"
            initial={{ opacity: 0, translateY: 50, background: "white" }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              background: "linear-gradient(to bottom, #BFDBFE, white)", // Blue-300 to White gradient
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            //viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Customer-Centric Approach
            </h3>
            <p className="text-gray-800">
              We are dedicated to understanding your unique needs and offering
              tailored solutions for your hospital or clinic.
            </p>
          </motion.div>
        </div>
        <br />
        <br />
        <br />

        <motion.div
          className="flex flex-col mt-20"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          //viewport={{ once: true }}
        >
          {/* Animated Heading */}
          <motion.h2
            className="text-5xl text-center font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent pb-7 pt-6 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Explore Our Principal Firms
          </motion.h2>

          {/* Animated Paragraph */}
          <motion.p
            className="p-6 sm: font-semibold text-center text-2xl mx-auto max-w-4xl text-gray-800 drop-shadow-md"
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            "Partnering with globally renowned manufacturers, we bring
            cutting-edge biomedical technology to healthcare providers. Explore
            our trusted principal companies and their innovative medical
            solutions."
          </motion.p>
        </motion.div>
        <div className="flex flex-col p-10 items-center justify-center py-20">
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
            className="w-full max-w-sm sm:max-w-md md:max-w-xl px-4" // Adjusted max-width for better centering
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <a href={card.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <Card image={card.image} description={card.description} />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;