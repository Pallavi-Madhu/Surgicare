import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DepNav from "../../Components/DepNav";
import bg from "../../assets/depBG.png";
import BL from "../../assets/BL Lifsciences.png";
import sinapi from "../../assets/Sinapi.png";
import toray from "../../assets/Toray.png";
import meditech from "../../assets/Meditech.png";
import cocoon from "../../assets/Cocoon.png";
import hico from "../../assets/Hico.png";
import { motion } from "framer-motion";

const DepartmentPage = ({ name, buttonImages }) => {
  const [selected, setSelected] = useState("BL");


  const cards3 = [
    {
      id: 1,
      image: "/CriticalCare/hemofeel.png",
      text: "Hemofeel",
      url: "https://www.toray.com/global/products/pharmaceuticals-medical/medical013.html",
    },
    {
      id: 2,
      image: "/CriticalCare/myxin.png",
      text: "Toraymyxin",
      url: "https://www.toraymyxin.toray/en/",
    },
  ];
    const cards4 = [
      {
        id: 1,
        image: "/CriticalCare/airway.png",
        text: "Nasopharyngeal airway",
        url: "",
      },
    ];
  const cards5 = [
    {
      id: 1,
      image: "/CriticalCare/cocoon.png",
      text: "Body Warmer",
      url: "https://www.dispomed.com/products/cocoon-cws-5000-patient-warming-system/",
    },
  ];
    const cards6 = [
      {
        id: 1,
        image: "/CriticalCare/vari.png",
        text: "Variotherm",
        url: "https://www.hico.de/en/hico-variotherm-550.html",
      },
      {
        id: 2,
        image: "/CriticalCare/aqua.png",
        text: "Aquatherm",
        url: "https://www.hico.de/en/hico-aquatherm-660.html",
      },
      {
        id: 3,
        image: "/CriticalCare/hypo.png",
        text: "Hypotherm",
        url: "https://pdf.medicalexpo.com/pdf/hico/hico-hypotherm-680/68746-95065.html",
      },
    ];

  return (
    <>
      <div>
        <div
          className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: "rgba(255, 255, 255, 0)",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="relative  z-50">
            {" "}
            <Navbar />
          </div>
          <div className=" mt-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
              <h2 className="z-20 text-6xl font-bold text-left flex-1">
                {name}
              </h2>
              {/* <img
              src={heart}
              alt={name}
              className="absolute -top-20 -right-4 opacity-70  transform -rotate-45 w-4/5 sm:w-3/5 lg:w-1/3 rounded-3xl shadow-2xl z-0"
            /> */}
            </div>
            <div
              className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundColor: "rgba(255, 255, 255, 0)",
                backgroundBlendMode: "overlay",
              }}
            >
              {/* Buttons  */}
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

              {/* Conditionally Rendered Content */}
              <div className="flex z-50 flex-col justify-center items-center mt-6">
                {selected === "BL" && (
                  <>
                    <img
                      src={BL}
                      alt="BL Lifesciences"
                      className="h-20 w-auto m-10"
                    />
                    <p className="text-center w-3/4 mt-4">
                      Baxter TISSEEL is a fibrin sealant used in surgical
                      procedures to control bleeding and support wound healing.
                      It mimics the body’s natural clotting process by combining
                      fibrinogen and thrombin to form a stable fibrin clot.
                    </p>
                  </>
                )}
                {selected === "Synkromax" && (
                  <>
                    <img
                      src={Sunkromax}
                      alt="Synkromax"
                      className="h-20 w-80 flex m-10"
                    />
                    <p className="text-center w-3/4 mt-4">
                      SynkroMax's Synkroscaff is a tissue-engineered,
                      decellularized bovine pericardial patch designed for
                      surgical anatomical repairs.
                    </p>
                  </>
                )}
                {selected === "Surgiwear" && (
                  <>
                    <img
                      src={Surgiwear}
                      alt="Surgiwear"
                      className="h-20 w-80 flex m-10"
                    />
                    <p className="text-center w-3/4 mt-4">
                      Surgiwear's G-Dress is a sterilized adhesive bandage made
                      from SMS non-woven fabric, featuring a fluid-resistant
                      middle layer that allows for regular activities like
                      bathing without compromising the dressing. <br />
                      G-Plast is Surgiwear's surgical tape, designed to secure
                      dressings and medical devices to the skin, providing
                      reliable adhesion while being gentle on the skin. <br />
                      Finally Burnmesh by Surgiwear is a paraffin gauze dressing
                      designed to protect burn wounds, minimize pain, and
                      prevent adherence to the wound.
                    </p>
                  </>
                )}
              </div>

              {/* Hover Cards (Conditionally Rendered) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 my-20 gap-6 p-10">
                {selected === "HICO" &&
                  cards6.map((card) => (
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
                      <p className="flex justify-start text-gray-800 text-2xl p-6 text-center font-semibold">
                        {card.text}
                      </p>
                    </a>
                  ))}

                {selected === "Toray" &&
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
                {selected === "Cocoon" &&
                  cards5.map((card) => (
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
                {selected === "Meditech" &&
                  cards4.map((card) => (
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
                      <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                        {card.text}
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <DepNav />
        <Footer />
      </div>
    </>
  );
};

export default function CriticalCare() {
  const buttonImages = [
    { id: "BL", src: BL, alt: "BL Lifesciences" },
    { id: "Sinapi", src: sinapi, alt: "Sinapi" },
    { id: "Toray", src: toray, alt: "Toray" },
    { id: "Meditech", src: meditech, alt: "Meditech devices" },
    { id: "Cocoon", src: cocoon, alt: "Cocoon" },
    { id: "HICO", src: hico, alt: "HICO" },
  ];

  return <DepartmentPage name="CRITICAL CARE" buttonImages={buttonImages} />;
}
