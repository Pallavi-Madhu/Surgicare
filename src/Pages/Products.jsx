import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import hex from "../assets/gold.png";
import { motion } from "framer-motion";
import helena from "../assets/Equipments/helena.png";
import cocoon from "../assets/Equipments/cocoon.png";
import deSoutter from "../assets/Equipments/deSoutter.png";
import cirona from "../assets/Equipments/cirona.png";
import soClean from "../assets/Equipments/soClean.png";
import sunoptic from "../assets/Equipments/sunoptic.png";
import novita from "../assets/Equipments/novita.png";
import hico from "../assets/Equipments/HICO.png";

const products = [
  {
    id: 1,
    name: "Helena",
    image: helena,
    k: "ACT Machine",
    url: "https://www.helena.com/actalykemini2.htm",
  },
  {
    id: 2,
    name: "Cocoon",
    image: cocoon,
    k: "Warmer",
    url: "https://www.dispomed.com/products/cocoon-cws-5000-patient-warming-system/",
  },
  {
    id: 3,
    name: "HICO",
    image: hico,
    k: "Medical Equipments",
    url: "https://www.hicomedical.com/products",
  },
  {
    id: 4,
    name: "Novita",
    image: novita,
    k: "Dehumidifiers",
    url: "https://www.climatronics.in/product/compact-dehumidifiers/novita/novita-nd-12-8-dehumidifier/",
  },
  {
    id: 5,
    name: "Sunoptic",
    image: sunoptic,
    k: "Headlight and light sources",
    url: "https://sunopticsurgical.com/products/",
  },
  {
    id: 6,
    name: "De Soutter",
    image: deSoutter,
    k: "Sternum Saw",
    url: "https://www.de-soutter.com/US-products-power-tools-Cardiothoracic",
  },
  {
    id: 7,
    name: "So Clean",
    image: soClean,
    k: "X-ray viewer",
    url: "https://www.soclean.in/x-ray-view-box.html",
  },
  {
    id: 8,
    name: "Cirona",
    image: cirona,
    k: "DVT Machine",
    url: "https://megamed.in/product/devon-cirona-6200-dvt-pump-ce-fda-approved/?srsltid=AfmBOorjjAZjx1yf_HBcmfMIaGeQeH-SSyE-U3UHNP09yNY1BpdWlmSV",
  },
];

const openPdfInNewTab = () => {
  window.open("/public/HICO.pdf", "_blank");
};


const Products = () => {
  return (
    <>
      <div
        className="min-h-screen overflow-x-hidden bg-cover relative z-0 bg-fixed bg-center"
        style={{
          backgroundImage: `url(${hex})`,
          backgroundColor: "rgba(255, 255, 255, 0)",
          backgroundBlendMode: "overlay",
        }}
      >
        <Navbar />
        <div className="text-center font-semibold text-6xl py-4">
          Equipments
        </div>
        <div className="text-center text-3xl p-2 sm:p-4  text-black">
          Offering a wide range of high-quality medical equipment designed to
          enhance patient care and improve healthcare outcomes
          <br />
          <div className="p-4 font-bold">Click cards to know more!</div>
        </div>

        {/* Product Grid */}
        <div className="container mx-auto my-10 px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col items-center">
                {/* Conditional Click Behavior */}
                {product.name === "HICO" ? (
                  <div onClick={openPdfInNewTab} className="cursor-pointer">
                    <motion.div
                      className="relative group overflow-hidden rounded-lg shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-60 object-cover transition duration-300 transform group-hover:brightness-50"
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-white text-3xl text-center font-bold">
                          {product.k}
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>
                ) : (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-60 object-cover transition duration-300 transform group-hover:brightness-50"
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-white text-3xl text-center font-bold">
                          {product.k}
                        </span>
                      </motion.div>
                    </motion.div>
                  </a>
                )}

                {/* Small Name Below the Card */}
                <p className="mt-2 text-gray-800 text-2xl font-semibold">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Products;
