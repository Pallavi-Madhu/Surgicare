import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import equipments from "../assets/equipments.png";
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
  { id: 1, name: "Helena", image: helena },
  { id: 2, name: "Cocoon", image: cocoon },
  { id: 3, name: "HICO", image: hico },
  { id: 4, name: "Novita", image: novita },
  { id: 5, name: "Sunoptic", image: sunoptic },
  { id: 6, name: "De Soutter", image: deSoutter },
  { id: 7, name: "So Clean", image: soClean },
  { id: 8, name: "Cirona", image: cirona },
];

const Products = () => {
  return (
    <>
      <div
        className="min-h-screen overflow-x-hidden bg-cover relative z-0 bg-fixed bg-center"
        style={{
          backgroundImage: `url(${equipments})`,
         backgroundColor: "rgba(255, 255, 255, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <Navbar />
        <div className="text-center font-semibold text-4xl py-8">
          Equipments
        </div>

        {/* Product Grid */}
        <div className="container mx-auto my-10 px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col items-center">
                {/* Image Card with Hover Effect */}
                <motion.div
                  className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover transition duration-300 transform group-hover:brightness-50"
                  />

                  {/* Hover Effect - Product Name */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <span className="text-white text-xl font-bold">
                      {product.name}
                    </span>
                  </motion.div>
                </motion.div>

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
