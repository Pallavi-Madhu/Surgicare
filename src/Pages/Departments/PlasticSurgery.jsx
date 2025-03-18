import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DepNav from "../../Components/DepNav";
import bg from "../../assets/depBG.png";
import Baxter from "../../assets/Baxter.png";
import Sunkromax from "../../assets/Syncromax.png";
import Surgiwear from "../../assets/Surgiwear.png";

import { motion } from "framer-motion";

import heart from "../../assets/heart.png";

const DepartmentPage = ({ name, buttonImages }) => {
  const [selected, setSelected] = useState("Baxter");

  const cards1 = [
    {
      id: 1,
      image: "/Ophthalmology/Tiseel.jpg", // Change this to the correct image
      text: "Tiseel",
      url: "https://www.baxter.com/healthcare-professionals/surgical-care/tisseel-fibrin-sealant",
    },
  ];
  const cards2 = [
    {
      id: 1,
      image: "", // Change this to the correct image
      text: "Burn Mesh",
      url: "",
    },
  ];

  const cards3 = [
    {
      id: 1,
      image: "", // Change this to the correct image
      text: "G Plast",
      url: "",
    },
    {
      id: 2,
      image: "", // Change this to the correct image
      text: "G Dress",
      url: "",
    },
    {
      id: 3,
      image: "", // Change this to the correct image
      text: "Bovine Patch",
      url: "",
    },
  ];

  return (
    <>
      <div className="relative z-50">
        <Navbar />
      </div>
      <div
        className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundColor: "rgba(255, 255, 255, 0)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className=" mt-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
            <h2 className="z-20 text-6xl font-bold text-left flex-1">{name}</h2>
            <img
              src={heart}
              alt={name}
              className="absolute -top-20 -right-4 opacity-70  transform -rotate-45 w-4/5 sm:w-3/5 lg:w-1/3 rounded-3xl shadow-2xl z-0"
            />
          </div>

          {/* Buttons for BL and Insightra */}
          <div className="z-0 relative grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
            {buttonImages.map(({ src, alt, id }) => (
              <button
                key={id}
                onClick={() => setSelected(id)}
                className={`p-4 rounded-3xl text-white w-full h-14 border flex justify-center items-center border-black ${
                  selected === id ? "bg-blue-300" : "bg-white"
                }`}
              >
                <img src={src} alt={alt} className="h-12 w-auto" />
              </button>
            ))}
          </div>

          {/* Hover Cards (Conditionally Rendered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-20 gap-28 sm:m-4 sm:gap-20 m-10 lg:p-20">
            {selected === "Baxter" &&
              cards1.map((card) => (
                <a
                  key={card.id}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <motion.div
                    className="relative group h-60 w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={card.image}
                      alt={`Card ${card.text}`}
                      className="w-full h-full object-cover transition duration-300 transform group-hover:brightness-50"
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
              ))}

            {selected === "Synkromax" &&
              cards2.map((card) => (
                <a
                  key={card.id}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <motion.div
                    className="relative group h-60 w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={card.image}
                      alt={`Card ${card.text}`}
                      className="w-full h-full object-cover transition duration-300 transform group-hover:brightness-50"
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
              ))}

            {selected === "Surgiwear" &&
              cards3.map((card) => (
                <a
                  key={card.id}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <motion.div
                    className="relative group h-60 w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={card.image}
                      alt={`Card ${card.text}`}
                      className="w-full h-full object-cover transition duration-300 transform group-hover:brightness-50"
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
              ))}
          </div>
        </div>
      </div>
      <DepNav />
      <Footer />
    </>
  );
};

export default function PlasticSurgery() {
  const buttonImages = [
    { id: "Baxter", src: Baxter, alt: "Baxter" },
    { id: "Synkromax", src: Sunkromax, alt: "Synkromax" },
    { id: "Surgiwear", src: Surgiwear, alt: "Surgiwear" },
  ];
  return <DepartmentPage name="PLASTIC SURGERY" buttonImages={buttonImages} />;
}
