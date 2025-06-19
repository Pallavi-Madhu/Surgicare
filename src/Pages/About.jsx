import * as React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import scope from "../assets/hos.png";
import AccordionSection from "../Components/Accordion"; // Import the AccordionSection
import StatsSection from "../Components/StatsSection";
import { motion } from "framer-motion";
import { Heart } from 'lucide-react';


const About = () => {
  return (
    <>
           <Navbar />
      <div
        className="min-h-screen mt-20 overflow-x-hidden bg-cover bg-fixed bg-center"
      >
     <div className="">  
       <motion.div
                className="text-center bg-gradient-to-r from-gray-500 via-green-500 to-gray-500 py-10 px-2 sm:py-24"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
                  Welcome to
                </h1>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
                  Nandana Surgi Care
                </h1>
                
              </motion.div>
      <div className="w-30 h-1  my-2 bg-gradient-to-r from-gray-500 via-green-500 to-gray-500 mx-auto rounded-full"></div>
 
       
           {/* Stats section */}
          <StatsSection /></div>

        {/* Enhanced Content Section */}
        
            <div className="space-y-8 text-lg sm:text-xl px-4 sm:px-20 mt-20 lg:px-80  leading-relaxed">
                <h2 className="text-3xl sm:text-4xl px-2 font-bold text-slate-800 mb-8">
                About Our <span className="text-green-700">Company</span>
              </h2>
                <motion.div
                  className="bg-white p-6  rounded-xl border-l-4 border-green-500 shadow-lg hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                >
                  <p className="text-gray-700  leading-8">
                    
                    We are a <span className="font-semibold text-green-800">trusted distributor</span> based in 
                    <span className="font-semibold text-green-800"> Kochi, Kerala</span>, specializing in a comprehensive range of 
                    medical equipment, instruments, devices, and disposables.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-xl border-l-4 border-green-600 shadow-lg hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                >
                  <p className="text-gray-700 leading-8 mb-4">
                    Our expertise lies in serving the critical needs of specialized departments including:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Cardiology', 'Thoracic Surgery', 'Neurosurgery', 'Plastic Surgery'].map((specialty, index) => (
                      <div
                        key={specialty}
                        className="bg-green-800 text-white px-4 py-2 rounded-lg font-semibold text-center shadow-sm hover:bg-green-700 transition-colors duration-200 cursor-pointer"
                        style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                      >
                        {specialty}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 mt-4 text-center italic">
                    Serving both government and private hospitals
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-gray-500 via-green-500 to-gray-500 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">                 
                      <Heart className="w-6 h-6 text-white" fill="white" />

                    </div>
                    <h3 className="text-xl font-bold">Our Core Focus</h3>
                  </div>
                  <p className="text-center text-lg leading-7">
                    <span className="font-semibold">Cardiac Surgery Products</span> - 
                    ensuring high-quality solutions that meet the demanding standards of this critical field.
                  </p>
                </motion.div>
              </div>

        
     
<section className="py-20 sm:mt-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
                 initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
          <div className="text-center mb-16">
            {/* <span className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full mb-4">
              INDUSTRY PARTNERSHIPS
            </span> */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
               <span className="text-gray-800">Key Companies</span> we Represent
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl  text-gray-600 max-w-3xl mx-auto">
              We collaborate with world-renowned medical technology companies to deliver 
              innovative healthcare solutions and maintain the highest standards of quality.
            </p>
          </div>
          </motion.div>
          <AccordionSection />
        </div>
      </section>
     

        <Footer />
      </div>
    </>
  );
};

export default About;