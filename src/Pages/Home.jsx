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
import ParticleOverlay from '../Components/Particle';
import { useState, useEffect } from "react";
import HeroSlideshow from "../Components/HeroSlideshow";

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById(`section-${delay}`);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [delay]);
  
  return (
    <div 
      id={`section-${delay}`}
      className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  return (<>   
     <Navbar />
     <div className="bg-gradient-to-r from-gray-900 via-green-400 to-gray-900 "> 
      <HeroSlideshow />
      </div>
         
    <div
      className=" overflow-x-hidden bg-cover bg-fixed bg-center"
      style={{
        //backgroundImage: `url(${bg})`,
        //backgroundColor: "white",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className=" overflow-x-hidden">
        {/* <div className="w-full h-1 bg-gradient-to-r from-green-500 to-green-600 bg-white "></div> */}
        <div className="relative inset-0  px-10">
          <br />

 <AnimatedSection className="max-w-7xl mx-auto px-4 lg:my-10" delay={0}>
        <div className="grid lg:grid-cols-2 items-center ">
           <motion.div
               initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
            >
            <div className="space-y-6 ">
              
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                About Nandana Surgi Care
              </div>
                <div className="w-30 h-1 bg-gradient-to-r my-2 from-green-500 to-green-900 mx-auto rounded-full"></div>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 leading-tight">
                World-Class <span className="text-green-700">Biomedical Equipment</span> Distribution
              </h2>
              <p className="lg:text-xl text-sm sm:text-lg font-sans font-extralight text-gray-900 leading-relaxed">
                At Nandana SurgiCare, we take pride in being a trusted distributor of world-class biomedical equipment, 
                enabling healthcare professionals to deliver exceptional patient care. With our strong focus on quality, 
                innovation, and reliability, we offer a comprehensive range of medical instruments and devices from some 
                of the most respected brands in the industry.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Cardiology', 'Thoracic Surgery', 'Neurosurgery', 'Plastic Surgery'].map((specialty) => (
                  <span key={specialty} className="text-sm sm:text-lg lg:text-xl px-4 py-2 bg-green-50 text-green-900 rounded-lg font-bold">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            </motion.div>

            <motion.div
            className="flex flex-col lg:flex-row md:mx-20 p-6 gap-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
           >
            <div className="relative ">
              <div className="absolute  -inset-4  rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                <div className="  bg-gradient-to-br from-green-100 to-slate-100 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500"> 
                    <motion.img
              src={positive}
              className="w-auto p-2 m-auto h-80 sm:h-96 lg:h-full max-w-sm rounded-2xl shadow-lg"
               />
              </span>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </AnimatedSection>
          <br />

          

             <AnimatedSection className=" max-w-7xl mx-auto md:py-20" delay={0}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-40 items-center">
            <motion.div
            className="flex flex-col lg:flex-row md:mx-20 p-6 gap-4"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
           >
            <div className="relative ">
              <div className="absolute  -inset-4  rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                <div className="  bg-gradient-to-br from-green-100 to-slate-100 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500"> 
                    <motion.img
              src={dist}
              className="w-auto p-2 m-auto h-60 sm:h-96  max-w-sm rounded-2xl shadow-lg"
               />
              </span>
                </div>
              </div>
            </div>
            </motion.div>
           
           <motion.div
               initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
            >
            <div className="space-y-6 mx-4 sm:mx-0">
              <div className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm  font-semibold">
              Global Synergy
              </div>
                <div className="w-30 h-1 bg-gradient-to-r my-2 from-green-500 to-green-900 mx-auto rounded-full"></div>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Strategic <span className="text-green-700">      Global Partnerships</span> 
              </h2>
              
              <p className="lg:text-xl text-sm sm:text-lg font-sans font-extralight text-gray-900 leading-relaxed">
                Our strategic partnerships with leading global 
                  manufacturers ensure that we provide the latest and most 
                  reliable medical technologies. From advanced ECMO machines to surgical instruments and disposables, 
                  we're here to support healthcare professionals in their mission to save lives and improve patient outcomes.
               </p>
                             <div className="grid grid-cols-2 gap-4 ">
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <div className="text-2xl font-bold text-green-700">100+</div>
                    <div className="text-sm text-gray-900">Global Partners</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <div className="text-2xl font-bold text-green-700">500+</div>
                    <div className="text-sm text-gray-900">Products</div>
                  </div>
                </div>
            </div>
            </motion.div>
           
          </div>
        </AnimatedSection>

            {/* Second Section */}
            
            {/* <div  className="min-h-screen bg-gradient-to-b  from-green-50 to-slate-50">
              <div className="flex flex-col px-4 py-12 sm:py-16  lg:py-20 items-center justify-center">

                  <AnimatedSection className=" py-20" delay={200}>
                       <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
          >
          <div className="max-w-7xl mt-20">
            <div className="grid lg:grid-cols-2 lg:gap-40 items-center">
       <div className="relative order-2 lg:order-1">
  
            <motion.div
            className="flex flex-col lg:flex-row md:mx-1 p-20"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
           >
            <div className="relative ">
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                <div className=" bg-gradient-to-br from-green-100 to-slate-100 rounded-xl flex items-center justify-center ">
                  <span className="text-gray-500 mx-1"> 
                    <motion.img
                      src={dist}
                      className=" m-auto p-2 h-60 sm:h-96 max-w-sm rounded-2xl shadow-lg"
                    />
                </span>
                </div>
              </div>
              </div>
            
            </motion.div>
          </div>

          <div className="space-y-6 order-1 mr-0 sm:mr-0 lg:order-2 text-left items-center lg:items-start flex flex-col">
     <div className="inline-block px-4 py-2 my-2 sm:my-0 bg-slate-100 text-slate-800 rounded-full bg-gray-200 text-sm font-semibold">
                  Global Partnerships
                </div>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
            >
             
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 text-left mx-20 sm:mx-10 lg:mx-4 leading-tight">
                  Strategic <span className="text-green-700">Global Partnerships</span>
                </h2>
                </motion.p>
              <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
              >
                <div className=" flex justify-center sm:justify-start">
                          <p className="lg:text-xl text-left mx-20 sm:mx-10 lg:mx-4 text-sm sm:text-lg font-sans font-extralight text-gray-600 leading-relaxed">
                  Our strategic partnerships with leading global 
                  manufacturers ensure that we provide the latest and most 
                  reliable medical technologies. From advanced ECMO machines to surgical instruments and disposables, 
                  we're here to support healthcare professionals in their mission to save lives and improve patient outcomes.
                </p>
                </div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 ">
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <div className="text-2xl font-bold text-green-700">100+</div>
                    <div className="text-sm text-gray-900">Global Partners</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <div className="text-2xl font-bold text-green-700">500+</div>
                    <div className="text-sm text-gray-900">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        </AnimatedSection>
      </div>
      </div> */}
        </div>
        <br />
        <AnimatedSection  delay={400}>
          <div className="max-w-7xl  mx-auto  lg:h-auto sm:mb-40 lg:mt-20 lg:mb-80 pt-20 px-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4">
                Why Choose <span className="text-green-600">Us?</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto"></div>
            </div>
            
            <div className="grid  md:grid-cols-3 gap-14">
              {[
                {
                  title: "Quality Assurance",
                  description: "We offer only top-tier products from globally recognized brands, ensuring the highest standards in patient care.",
                  icon: "✓",
                  gradient: "from-green-600 to-green-800"
                },
                {
                  title: "End-to-End Solutions",
                  description: "From delivery and installation to training and support, we provide comprehensive services to healthcare providers.",
                  icon: "⚡",
                  gradient: "from-green-600 to-green-800"
                },
                {
                  title: "Customer-Centric ",
                  description: "We are dedicated to understanding your unique needs and offering tailored solutions for your hospital or clinic.",
                  icon: "♥",
                  gradient: "from-green-600 to-green-800"
                }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                  <div className="relative  bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className={`sm:w-16 sm:h-16 mx-auto w-12  h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl text-center font-bold text-gray-800 mb-4">{item.title}</h3>
                    <p className="text-gray-600 text-lg text-center font-sans font-light sm:text-2xl leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

    

        <motion.div
          className="flex flex-col mt-20"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          //viewport={{ once: true }}
        >
          {/* Animated Heading */}
          <motion.h2
            className="text-4xl lg:text-5xl text-center font-bold text-gray-800 pb-7 px-4 pt-6 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Explore Our <span className="text-green-700">Principal Firms</span>
          </motion.h2>

          {/* Animated Paragraph */}
          <motion.p
            className="p-6 font-sans text-center text-xl md:text-2xl mx-auto max-w-4xl text-gray-800 drop-shadow-md"
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            Partnering with globally renowned manufacturers, we bring
            cutting-edge biomedical technology to healthcare providers. Explore
            our trusted principal companies and their innovative medical
            solutions.
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
    </>
  );
};

export default Home;