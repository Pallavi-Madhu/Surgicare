import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import hex from "../assets/gold.png";
//import { motion } from "framer-motion";
import helena from "../assets/Equipments/helena.png";
import cocoon from "../assets/Equipments/cocoon.png";
import deSoutter from "../assets/Equipments/deSoutter.png";
import cirona from "../assets/Equipments/cirona.png";
import soClean from "../assets/Equipments/soClean.png";
import sunoptic from "../assets/Equipments/sunoptic.png";
import novita from "../assets/Equipments/novita.png";
import hico from "../assets/Equipments/hico.png";
import oxygenerator from "../assets/Equipments/oxygenerator.png";
import pro from "../assets/Neuro/Sunoptic/pro.png";
import aortic from "../assets/CardiacSurgery/Terumo/aortic.jpeg";


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText, Star, ChevronRight } from 'lucide-react';


const products = [
  {
    id: 1,
    name: "Helena",
    image: helena,
    k: "ACT Machine",
    category: "Diagnostics",
    description: "Advanced coagulation testing machine for accurate blood analysis",
    url: "https://www.helena.com/actalykemini2.htm",
  },
  {
    id: 2,
    name: "Cocoon",
    image: cocoon,
    k: "Warmer",
    category: "Patient Care",
    description: "Medical warming system for patient temperature management",
    url: "https://www.careessentials.com.au/product-category/warming-blankets-warming-machines/",
  },
  {
    id: 3,
    name: "HICO",
    image: hico,
    k: "Medical Equipments",
    category: "General Equipment",
    description: "Comprehensive range of medical equipment solutions",
    isPdf: true,
  },
  {
    id: 4,
    name: "Novita",
    image: novita,
    k: "Dehumidifiers",
    category: "Environment Control",
    description: "Advanced dehumidification systems for medical environments",
    url: "https://www.climatronics.in/product/compact-dehumidifiers/novita/",
  },
  {
    id: 5,
    name: "Sunoptic",
    image: sunoptic,
    k: "Headlight and Light Sources",
    category: "Surgical Equipment",
    description: "Professional surgical lighting solutions",
    url: "https://sunopticsurgical.com/products/",
  },
  {
    id: 6,
    name: "De Soutter",
    image: deSoutter,
    k: "Sternum Saw",
    category: "Surgical Tools",
    description: "Precision surgical cutting instruments",
    url: "https://www.de-soutter.com/US-products-power-tools-Cardiothoracic",
  },
  {
    id: 7,
    name: "So Clean",
    image: soClean,
    k: "X-ray viewer",
    category: "Diagnostic Equipment",
    description: "High-clarity X-ray viewing system for clinical use",
    url: "https://www.soclean.in/x-ray-view-box.html",
  },
  {
    id: 8,
    name: "Cirona",
    image:cirona,
    k: "DVT Machine",
    category: "Therapeutic Devices",
    description: "FDA-approved device for preventing deep vein thrombosis",
    url: "https://megamed.in/product/devon-cirona-6200-dvt-pump-ce-fda-approved/",
  },
  {
    id: 9,
    name: "Oxygenerator",
    image: oxygenerator,
    k: "Oxygenerator",
    category: "Respiratory Equipment",
    description: "Advanced oxygenation systems for cardiovascular procedures",
    url: "https://terumoindia.com/cardiovascular-division-terumo-cardiovascular/oxygenation-systems",
  },
  {
    id: 10,
    name: "GelweaveTM- Aortic Surgical Grafts",
    image: aortic,
    k: "Aortic Surgical Grafts",
    category: "Vascular Grafts",
    description: "Durable grafts for aortic surgical reconstruction",
    url: "https://terumoindia.com/vascular-graft-division-terumo-aortic",
  },
  {
    id: 11,
    name: "Pro300 Light Source",
    image: pro,
    k: "Pro300",
    category: "Surgical Lighting",
    description: "High-performance light source for surgical precision",
    url: "https://sunopticsurgical.com/products/pro300/",
  }
];

const MedicalEquipmentPage = () => {
  const [loading, setLoading] = useState(true);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleProductClick = (product) => {
    if (product.isPdf) {
      window.open("/public/HICO.pdf", "_blank");
    } else {
      window.open(product.url, "_blank");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-green-700 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-gray-600 text-lg">Loading Medical Equipment...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
    <Navbar />

    <div className="min-h-screen pb-48">
      
      <motion.div 
        className="bg-white shadow-lg bg-gradient-to-r from-gray-500 via-green-500 to-gray-500"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        
        <div className="container  mx-auto py-10 sm:py-16 lg:py-20 mt-16 sm:mt-20">
          
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold text-center text-white mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Medical Equipment
          </motion.h1>
          <motion.p 
            className="text-xl px-4 lg:text-3xl text-center text-gray-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover our comprehensive range of high-quality medical equipment designed to enhance patient care and improve healthcare outcomes
          </motion.p>
          
{/*           
          <motion.div 
            className="text-center mt-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-900 px-4 py-2 rounded-full">
              <span className="font-semibold">Click any card to explore</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </motion.div> */}
        </div>
      </motion.div>

            <div className="w-30 h-1  my-2 bg-gradient-to-r from-gray-500 via-green-500 to-gray-500 mx-auto rounded-full"></div>
     
      {/* Products Section */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              layout
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl flex flex-col"
              onClick={() => handleProductClick(product)}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative h-50 group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 transition-transform duration-500 group-hover:scale-110"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm  shadow-lg">
                    {product.category}
                  </span>
                </div>

                {/* Action Icon */}
                <div className="absolute top-4 right-4">
                  {product.isPdf ? (
                    <div className="bg-white backdrop-blur-sm p-2 rounded-full shadow-lg">
                      <FileText className="w-4 h-4 text-gray-700" />
                    </div>
                  ) : (
                    <div className="bg-white backdrop-blur-sm p-2 rounded-full shadow-lg">
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </div>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 text-black flex flex-col flex-grow">
                <div className=" items-center justify-between mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{product.name}</h3>
                </div>
                
                <p className="text-gray-900 text-lg sm:text-2xl f mb-4 line-clamp-2 flex flex-grow">{product.description}</p>
                

                {/* CTA */}
                <motion.button
                  className="w-full mt-auto text-lg sm:text-2xl  bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Click to know more
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default MedicalEquipmentPage;