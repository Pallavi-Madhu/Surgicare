
import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Sinapi from "../../assets/Sinapi.png";
import DepNav from "../../Components/DepNav";
import chestdrain from "../../assets/Pulmo/chestdrain.png"
import { motion } from "framer-motion";
import bg from "../../assets/depBG.png";
const departments = [
  { id: "critical-care", name: "Critical Care" },
  { id: "cardiac-surgery", name: "Cardiac Surgery" },
  { id: "cardiology", name: "Cardiology" },
  { id: "neurosurgery", name: "Neurosurgery" },
  { id: "ophthalmology", name: "Ophthalmology" },
  { id: "pulmonology", name: "Pulmonology" },
  { id: "general-surgery", name: "General Surgery" },
  { id: "plastic-surgery", name: "Plastic Surgery" },
  { id: "orthopedic", name: "Orthopedic" },
  { id: "anesthesiology", name: "Anesthesiology" },
];

const card = {
  id: 1,
  image: chestdrain, 
  text: "Chest Drainage System 50ml,400ml,1000ml",
  url:"https://sinapibiomedical.com/"
};

export default function Pulmonology() {
  return (
    <>
     <div
            className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundColor: "rgba(255, 255, 255, 0)",
              backgroundBlendMode: "overlay",
            }}
          ><div className="relative  z-50">
            <Navbar />
          </div>

      {/* Pulmonology Page Content */}
       <div className=" sm:mt-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
              <h2 className="z-20 text-4xl sm:text-6xl font-bold text-left flex-1">
               PULMONOLOGY
              </h2>
                </div>

        {/* Company Details */}
        <div className="flex flex-col items-center mt-6">
          <img src={Sinapi} alt="Sinapi" className="h-40 w-auto" />
          <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
            Sinapi Biomedicals specializes in developing innovative and
            cost-effective medical devices, particularly in wound care, critical
            care, and surgical solutions. Their product range includes chest
            drains, urine meters, and negative pressure wound therapy systems,
            designed to enhance patient recovery and improve hospital
            efficiency.
          </p>
        </div>

        {/* Product Range Section */}
        <div className="flex mt-10 text-4xl font-bold justify-center items-center">
          Range of Products
        </div>

        {/* Card */}
        <div className="flex justify-center mt-10">
        
             <a
                                            key={card.id}
                                            href={card.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="no-underline"
                                          >
                                            <motion.div
                                              className="relative group h-auto w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
                                              whileHover={{ scale: 1.05 }}
                                            >
                                              <img
                                                src={card.image}
                                                alt={`Card ${card.text}`}
                                                className="object-cover transition duration-300 transform group-hover:brightness-50"
                                              />
                                              <motion.div
                                                className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300"
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                              >
                                                <span className="text-white text-3xl text-center font-bold">
                                                  {card.text}
                                                </span>
                                              </motion.div>
                                            </motion.div>
                                            <p className="flex justify-center text-gray-800 text-2xl p-6 text-center font-semibold">
                                              {card.text}
                                            </p>
                                          </a>
        
        </div>
      </div>

        {/* Read More Button */}
        <div className="flex justify-center mt-10 mb-14">
         <a
          href="https://t.sinapibiomedical.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-blue-300 hover:text-black text-blue-700 py-2 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700"
         >
         Read More
        </a>
        </div>

      <DepNav />
      <Footer />
       </div>
    </>
  );
}
