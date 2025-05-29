import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DepNav from "../../Components/DepNav";
import bg from "../../assets/depBG.png";
import BL from "../../assets/BLLifsciences.png";
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
      {
        id: 2,
        image: "/CriticalCare/bougie.png",
        text: "Bougie",
        url: "https://www.meditechsystems.co.uk/product/bougie-coude-tip-introducers/",
      },
      {
        id: 3,
        image: "/CriticalCare/stylet.png",
        text: "Stylet",
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
                    className={`p-4 rounded-full text-white w-3/4 mx-4 h-14 border flex justify-center items-center  ${
                      selected === id ? "bg-blue-600" : "bg-blue-300"
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
                      className="h-40 w-auto m-10"
                    />
                  </>
                )}
                {selected === "Toray" && (
                  <>
                    <img
                      src={toray}
                      alt="Toray"
                      className="h-40 w-auto flex m-10"
                    />
                    <p className="text-center w-3/4 mt-4">
                      HEMOFEEL CH is a polymethylmethacrylate (PMMA) hemofilter
                      designed for continuous renal support, offering excellent
                      biocompatibility and cytokine adsorption. <br />
                      TORAYMYXI (PMX™) is an extracorporeal hemoperfusion
                      cartridge that removes endotoxins from the blood, using
                      polymyxin B-immobilized fibers to treat sepsis and septic
                      shock caused by Gram-negative bacterial infections.
                    </p>
                  </>
                )}
                {selected === "Meditech" && (
                  <>
                    <img
                      src="/CriticalCare/meditech.png"
                      alt="meditech"
                      className="h-30 w-auto flex m-10"
                    />
                    <p className="text-center w-3/4 mt-4">
                      ​Meditech offers a range of airway management devices,
                      including bougies, stylets, and nasopharyngeal airways
                      <br />
                      Bougies: These single-use, latex-free devices assist in
                      the placement of endotracheal tubes during challenging
                      intubations by facilitating positive tracheal location.
                      <br />
                      Stylets: Designed to aid intubation, Meditech's stylets
                      are malleable, allowing clinicians to shape them as needed
                      for optimal tube placement.
                      <br />
                      Nasopharyngeal Airways: These single-use airways are
                      blue-colored for easy identification and are intended to
                      maintain an open airway by inserting through the nasal
                      passage.
                    </p>
                  </>
                )}
                {selected === "Cocoon" && (
                  <>
                    <img
                      src={cocoon}
                      alt="Toray"
                      className="h-20 w-auto flex m-10"
                    />
                    <p className="text-center w-3/4 mt-4">
                      The Cocoon Convective Patient Warming System helps
                      maintain patient normothermia using a
                      microprocessor-controlled warming unit and specialized
                      blankets. It ensures uniform heat distribution, is
                      lightweight, and meets FDA, CE, and TGA standards for
                      safety.
                    </p>
                  </>
                )}
                {selected === "HICO" && (
                  <>
                    <img
                      src={hico}
                      alt="Toray"
                      className="h-40 w-auto flex m-10"
                    />
                    <p className="text-center w-3/4 mt-4">
                      ​HICO offers a range of patient temperature management
                      devices designed to prevent hypothermia and maintain
                      normothermia during medical procedures
                    </p>
                  </>
                )}
              </div>

              {/* Hover Cards (Conditionally Rendered) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:mt-20 sm:mb-20 lg:grid-cols-3 my-20 gap-28 sm:m-4 sm:gap-20 m-10 lg:p-20">
                {selected === "HICO" &&
                  cards6.map((card) => (
                    <a key={card.id} href={card.url} className="no-underline">
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
                    <a key={card.id} href={card.url} className="no-underline">
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
                {selected === "Cocoon" &&
                  cards5.map((card) => (
                    <a key={card.id} href={card.url} className="no-underline">
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
                    <a key={card.id} href={card.url} className="no-underline">
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
          {/* conditionally rendered read more */}
          {selected === "BL" && (
            <>
              <a
                href="https://www.bllifesciences.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center "
              >
                <button className=" hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 my-20 rounded-3xl border font-bold hover:border-black border-blue-700">
                  Read More
                </button>
              </a>
            </>
          )}

          {selected === "Toray" && (
            <>
              <a
                href="https://www.toray.com/global/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center "
              >
                <button className=" hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700">
                  Read More
                </button>
              </a>
            </>
          )}
          {selected === "Meditech" && (
            <>
              <a
                href="https://meditechintl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center "
              >
                <button className=" hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700">
                  Read More
                </button>
              </a>
            </>
          )}
          {selected === "Cocoon" && (
            <>
              <a
                href="https://www.minogue-med.com/product/cocoon-convective-patient-warming-system/?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center "
              >
                <button className=" hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700">
                  Read More
                </button>
              </a>
            </>
          )}
          {selected === "HICO" && (
            <>
              <a
                href="https://www.hico.de/en/hico.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center "
              >
                <button className=" hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700">
                  Read More
                </button>
              </a>
            </>
          )}
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
    { id: "Meditech", src: "/CriticalCare/meditech.png", alt: "Meditech devices" },
    { id: "Cocoon", src: cocoon, alt: "Cocoon" },
    { id: "HICO", src: hico, alt: "HICO" },
  ];

  return <DepartmentPage name="CRITICAL CARE" buttonImages={buttonImages} />;
}
