import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DepNav from "../../Components/DepNav";
import bg from "../../assets/depBG.png";
import BL from "../../assets/BLLifsciences.png";
import Sinapi from "../../assets/Sinapi.png";
import toray from "../../assets/Toray.png";
import meditech from "../../assets/meditec.png";
import cocoon from "../../assets/Cocoon.png";
import hico from "../../assets/Hico.png";
import { motion } from "framer-motion";

import image1 from "../../assets/Anastesiology/pressurelines.png";
import image2 from "../../assets/Anastesiology/presseurtransducer.jpg";
import image3 from "../../assets/Anastesiology/hmefilter.png";
import image4 from "../../assets/Anastesiology/cables.png";
import image5 from "../../assets/Anastesiology/3waywithextension.jpeg";
import image7 from "../../assets/Anastesiology/lumen.jpg";
import image8 from "../../assets/Anastesiology/adultexpandable.jpg";
import image9 from "../../assets/Anastesiology/Lungexcerciser.jpg";
import chestdrain from "../../assets/Pulmo/chestdrain.png"
import ChestDrain from "../../assets/ChestDrain.pdf";
import cable from "../../assets/Cablecatalogue.pdf";

const DepartmentPage = ({ name, buttonImages }) => {
  const [selected, setSelected] = useState("BL");

  const cards1 = [
        //BL
        {
          id: 1,
          image: image1,
          text: "Pressure Monitoring Lines",
          url: "https://www.bllifesciences.com/products/invasive-pressure-system/",
        },
        {
          id: 2,
          image: image2,
          text: "Disposable pressure transducer",
          url: "https://www.bllifesciences.com/products/invasive-pressure-system/",
        },
        {
          id: 3,
          image: image3,
          text: "HME filter",
          url: "https://www.bllifesciences.com/products/anesthesia-and-critical-care/",
        },
        {
          id: 4,
          image: image4,
          text: "Inter phase cable suit with your monitor",
          url: cable
        },
        {
          id: 5,
          image: image5,
          text: "3 way with extension -10cm, 25/50cm",
          url: "https://www.bllifesciences.com/products/interventional-systems/",
        },
        {
          id: 6,
          image: "/Cardiology/IVset.png",
          text: "IV SET VENTED",
          url: "https://bllifesciences.com/wp-content/uploads/2022/08/BL-Lifesciences.pdf",
        },
        {
          id: 7,
          image: image7,
          text: "Central Venous Catheters",
          url: "https://www.bllifesciences.com/products/central-venous-catheters/",
        },
        {
          id: 8,
          image: image8,
          text: "ADULT EXPANDABLE CIRCUIT",
          url: "https://www.bllifesciences.com/products/anesthesia-and-critical-care/",
        },
        {
          id: 9,
          image: image9,
          text: "Lung Exerciser",
          url: "https://www.bllifesciences.com/products/anesthesia-and-critical-care/",
        },
      ]

    const cards2 = [
    {
       id: 1,
        image: chestdrain, 
        text: "Chest Drainage System 50ml,400ml,1000ml",
        url: ChestDrain
    }
    ] 


  const cards3 = [
    {
      id: 1,
      image: "/CriticalCare/hemofeel.png",
      text: "Hemofeel",
      url: "https://www.toray-medical.com/en/products/emergency/eme_0020.html",
    },
    {
      id: 2,
      image: "/CriticalCare/myxin.png",
      text: "Toraymyxin",
      url: "https://www.toray-medical.com/en/products/emergency/eme_0010.html",
    },
  ];
    const cards4 = [
      {
        id: 1,
        image: "/CriticalCare/airway.png",
        text: "Nasopharyngeal airway",
        url: "https://meditecdevices.com/products/search/?q=nasopharyngeal%20airway",
      },
      {
        id: 2,
        image: "/CriticalCare/bougie.png",
        text: "Bougie",
        url: "https://meditecdevices.com/products/search/?q=bougie",
      },
      {
        id: 3,
        image: "/CriticalCare/stylet.png",
        text: "Stylet",
        url: "https://meditecdevices.com/products/search/?q=stylet",                
      },
    ];
  const cards5 = [
    {
      id: 1,
      image: "/CriticalCare/cocoon.png",
      text: "Body Warmer",
      url: "https://www.careessentials.com.au/product/cws-5000/",
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
      // {
      //   id: 3,
      //   image: "/CriticalCare/hypo.png",
      //   text: "Hypotherm",
      //   url: "https://pdf.medicalexpo.com/pdf/hico/hico-hypotherm-680/68746-95065.html",
      // },
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
          <div className=" sm:mt-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
              <h2 className="z-20 text-5xl sm:text-6xl font-bold text-left flex-1">
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
               <div className="grid relative grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8">
            {buttonImages.map(({ src, alt, id }) => (
             <button
          key={id}
           onClick={() => setSelected(id)}
            className={`p-2 font-bold rounded-full text-black w-1/2 sm:w-3/4 lg:w-1/2 mx-14 h-14 border border-black flex justify-center items-center ${
           selected === id ? "bg-gray-500 text-white border-gray-500" : "bg-white"
         }` }
           >
                <img src={src} alt={alt} className="h-12  w-auto" />
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
                    <p className="text-center w-3/4 mt-4">
                    BL Lifesciences plays a vital role in critical care by providing
                    high-quality medical devices such as invasive pressure monitoring systems ,
                    anesthesia and ventilation circuits, and customized perfusion products. 
                    Their innovative and reliable solutions help improve patient monitoring,
                    respiratory support, and life-saving interventions in intensive care units. 
                    </p>
                  </>
                )}

                {selected === "Sinapi" && (
                  <>
                    <img
                      src={Sinapi}
                      alt="Sinapi"
                      className="h-40 w-auto m-10"
                    />
                    <p className="text-center w-3/4 mt-4">
                      The Sinapi Chest Drain plays a crucial role in critical care by
                      efficiently removing air, blood, or fluid from the pleural space,
                      helping re-expand the lungs and stabilize patients post-surgery or trauma.
                      Its reliable, lightweight design and advanced water-seal system
                      reduce infection risk and promote patient recovery. 
                      With user-friendly setup and monitoring, Sinapi enhances patient safety and
                      optimizes critical care outcomes.

                    </p>
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
                      src={meditech}
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

                {selected === "BL" &&
                  cards1.map((card) => (
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

                  {selected === "Sinapi" &&
                  cards2.map((card) => (
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
               {selected === "Cocoon" && (
  <div className="flex flex-wrap justify-center gap-6 my-10">
    {cards5.map((card) => (
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
        <p className="text-center text-gray-800 text-2xl pt-4 font-semibold">
          {card.text}
        </p>
      </a>
    ))}
  </div>
)}

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
           <div className="flex justify-center mt-10 mb-14">
          {selected === "BL" && (
            <>
              <a
                href="https://www.bllifesciences.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center "
              >
                <button className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out">
                  Read More
                </button>
              </a>
            </>
          )}
        {selected == "Sinapi" && (
          <>
          <a
          href="https://t.sinapibiomedical.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center mt-10"
        >
          <button className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out">
            Read More
          </button>
        </a>
        </>
        )}

          {selected === "Toray" && (
            <>
              <a
                href="https://www.toray-medical.com/en/products/index.html"
                target="_blank"
                rel="noopener noreferrer"
      className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out"
              >
                Read More
              </a>
            </>
          )}
          {selected === "Meditech" && (
            <>
              <a
                href="https://meditecdevices.com/"
                target="_blank"
                rel="noopener noreferrer"
className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out"
              >
                Read More
              </a>
            </>
          )}
          {selected === "Cocoon" && (
            <>
              <a
                href="https://www.careessentials.com.au/  "
                target="_blank"
                rel="noopener noreferrer"
className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out"
              >
                Read More
              </a>
            </>
          )}
          {selected === "HICO" && (
            <>
              <a
                href="https://www.hico.de/en/hico.html"
                target="_blank"
                rel="noopener noreferrer"
               className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out">
               Read More
              </a>
            </>
          )}
        </div>
        <DepNav />
        <Footer />
      </div>
      </div>
    </>
  );
};

export default function CriticalCare() {
  const buttonImages = [
    { id: "BL", src: BL, alt: "BL Lifesciences" },
    { id: "Sinapi", src: Sinapi, alt: "Sinapi" },
    { id: "Toray", src: toray, alt: "Toray" },
    { id: "Meditech", src: "/CriticalCare/meditech.png", alt: "Meditech devices" },
    { id: "Cocoon", src: cocoon, alt: "Cocoon" },
    { id: "HICO", src: hico, alt: "HICO" },
  ];

  return <DepartmentPage name="CRITICAL CARE" buttonImages={buttonImages} />;
}