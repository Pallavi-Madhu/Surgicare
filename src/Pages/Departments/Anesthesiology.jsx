import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import { motion } from "framer-motion";


import Cocoon from "../../assets/Cocoon.png";
import BL from "../../assets/BL Lifsciences.png";
import Meditech from "../../assets/Meditech.png";
import Aero from "../../assets/Aero.png";
import Rusch from "../../assets/Rusch.png";
import Medisafe from "../../assets/Medisafe.png";
import Suretech from "../../assets/suretech.webp";
import Venticare from "../../assets/Venticare.png";
import Portex from "../../assets/Portex.png";
import DepNav from "../../Components/DepNav";

import image1 from "../../assets/Anastesiology/PressureMonitoringLines_Main.jpg";
import image2 from "../../assets/Anastesiology/presseurtransducer.jpg";
import image3 from "../../assets/Anastesiology/hmefilter.jpg";
import image4 from "../../assets/Anastesiology/interphasecable.jpg";
import image5 from "../../assets/Anastesiology/3waywithextension.jpeg";
import image7 from "../../assets/Anastesiology/lumen.jpg";
import image8 from "../../assets/Anastesiology/adultexpandable.jpg";
import image9 from "../../assets/Anastesiology/Lungexcerciser.jpg";
import image10 from "../../assets/Anastesiology/warmingblanket.jpg";

import image11 from "../../assets/Anastesiology/nebulizer.jpeg";
import image12 from "../../assets/Anastesiology/Ventilator-Plain-Circuit.jpg";

import image13 from "../../assets/Anastesiology/bronchial.webp";
import image14 from "../../assets/Anastesiology/cuff-meter.webp";
import image15 from "../../assets/Anastesiology/Nasopharyngeal.jpg";

import image16 from "../../assets/Anastesiology/BainCircuit.jpg";
import image17 from "../../assets/Anastesiology/adultbreathablecircuit.webp";
import image18 from "../../assets/Anastesiology/circuit.jpg";
import image19 from "../../assets/Anastesiology/breathingcircuitwhite.jpg";
import image20 from "../../assets/Anastesiology/ReusableAdult.png";
import image21 from "../../assets/Anastesiology/BVL-Filter.jpg";
import image22 from "../../assets/Anastesiology/cpap.jpeg";
import image23 from "../../assets/Anastesiology/harness2.jpg";
import image24 from "../../assets/Anastesiology/pediatric.jpg";
import image25 from "../../assets/Anastesiology/pediatricbreathing.jpg";
import image26 from "../../assets/Anastesiology/tconnector.jpeg";

import image27 from "../../assets/Anastesiology/bougie.avif";

const DepartmentPage = ({ name, image, buttonImages }) => {
  const [selected, setSelected] = useState("BL");

  const cards = [       //BL
    {
      id: 1,
      image: image1,
      text: "Pressure Monitoring Lines",
      //url: "https://www.bllifesciences.com/products/invasive-pressure-system/",
    },
    {
      id: 2,
      image: image2,
      text: "Disposable pressure transducer",
      //url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 3,
      image: image3,
      text: "HME filter",
      //url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 4,
      image: image4,
      text: "Inter phase cable suit with your monitor",
      // url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 5,
      image: image5,
      text: "3 way with extension -10cm, 25/50cm",
      //url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 6,
      image: "/Cardiology/IVset.png",
      text: "IV SET VENTED",
      //url: "https://bllifesciences.com/wp-content/uploads/2022/08/BL-Lifesciences.pdf",
    },
    {
      id: 7,
      image: image7,
      text: "1 Lumen CVP CATH",
      //url: "https://www.bllifesciences.com/wp-content/uploads/2022/06/24_IFU_Inflation_device.pdf",
    },
    {
      id: 8,
      image: image8,
      text: "ADULT EXPANDABLE CIRCUIT",
      //url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 9,
      image: image9,
      text: "Lung Exerciser",
      //url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
  ];
  const cards1 = [             //VENTICARE
    {
      id: 1,
      image: image11,
      text: "Adult Nebulizer Mask Kit (3026)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 2,
      image: image12,
      text: "VENTILATOR CIRCUIT PLAIN ADULT",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
  ];
   const cards2 = [          //COCOON
     {
       id: 1,
       image: image10,
       text: "Warming Blankets",
       //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
     },
   ];
   const cards3 = [
     //AERO
     {
       id: 1,
       image: image16,
       text: "ADULT BAINS CIRCUIT-AERO (2001)",
       //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
     },
     {
       id: 2,
       image: image17,
       text: "ADULT BREATHING CIRCUIT-EXPANDABLE (1010-E)",
       //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
     },
     {
       id: 3,
       image: image18,
       text: "ADULT BREATHING CIRCUIT EXP.WITH EXTRA LIMB &CONCTR (1010-01-E)",
       //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
     },
     {
       id: 4,
       image: image19,
       text: "ADULT BREATHING CIRCUIT-WHITE (REF:1010)",
       //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
     },
     {
       id: 5,
       image: image20,
       text: "Adult Double Water Trap Ventilator Circuit (REF:1012)",
       //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
     },
     {
       id: 6,
       image: image21,
       text: "BVL FILTER AERO (2010)",
       //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
     },

     {
       id: 7,
       image: image22,
       text: "CPAP CIRCUIT (SMOOTH BORE TUBING) 1.8 MTR (4000)",
       //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
     },
     {
       id: 8,
       image: image23,
       text: "Cpap Circuit with Mask and Harness-Adult",
       //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
     },
     {
       id: 9,
       image: image24,
       text: "PAEDIATRIC BAIN CIRCUIT-JACKSON REES (2002)",
       //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
     },
     {
       id: 10,
       image: image25,
       text: "PEADIATRIC BREATHING CIRUIT (1020)",
       //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
     },
     {
       id: 11,
       image: image26,
       text: "T- CONNECTOR (1500)",
       //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
     },
   ];
   const cards4 = [
     //PORTEX
     {
       id: 1,
       image: image27,
       text: "Bougie (Adult) ",
       //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
     },
   ];
    const cards6 = [           //RUSCH
      {
        id: 1,
        image: image13,
        text: "Bronchial Double Lumen Tube",
        //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
      },
      {
        id: 2,
        image: image14,
        text: "Cuff measuring meter for E.T.Tube",
        //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
      },
      {
        id: 3,
        image: image15,
        text: "Nasopharyngeal Air way 28,30,34",
        //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
      },
    ];

  return (
    <>
      <div className="relative z-50">
        <Navbar />
      </div>
      <div
        className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
        //add bg image
      >
        <div className=" mt-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
            <h2 className="z-20 text-6xl font-bold text-left flex-1">{name}</h2>
            {/* <img
              src={heart}
              alt={name}
              className="absolute -top-20 -right-4 opacity-70  transform -rotate-45 w-4/5 sm:w-3/5 lg:w-1/3 rounded-3xl shadow-2xl z-0"
            /> */}
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

          {/* Conditionally Rendered Content */}
          <div className="flex z-50 flex-col justify-center items-center mt-6">
            {selected === "Venticare" && (
              <>
                <img
                  src={Venticare}
                  alt="Venticare"
                  className="h-40 w-auto m-10"
                />
                <p className="text-center mt-4">
                  Hico specializes in temperature management solutions in
                  anesthesiology, offering advanced warming and cooling systems.
                  Their devices help maintain patient normothermia during
                  surgeries, reducing the risk of hypothermia-related
                  complications. Hico’s solutions enhance patient safety and
                  recovery in operating rooms and intensive care settings.
                </p>
              </>
            )}
            {selected === "Cocoon" && (
              <>
                <img
                  src={Cocoon}
                  alt="Cocoon"
                  className="h-20 w-80 flex m-10"
                />
                <p className="text-center mt-4">
                  Cocoon specializes in patient warming solutions for
                  anesthesiology, helping to maintain normothermia during
                  surgeries. Their advanced warming blankets and systems prevent
                  hypothermia, improving patient safety and recovery outcomes.
                  Cocoon’s products are widely used in operating rooms and
                  intensive care units for effective thermal management.
                </p>
              </>
            )}
            {selected === "BL" && (
              <>
                <img src={BL} alt="BL" className="h-20 w-80 flex m-10" />
                <p className="text-center mt-4">
                  BL Lifesciences contributes to anesthesiology by providing
                  advanced anesthesia delivery systems, breathing circuits, and
                  airway management solutions. Their products ensure precise gas
                  delivery, patient safety, and optimal ventilation during
                  surgical procedures. BL Lifesciences also offers high-quality
                  monitoring accessories to enhance anesthesia care.
                </p>
              </>
            )}
            {selected === "Meditech" && (
              <>
                <img
                  src={Meditech}
                  alt="Meditech"
                  className="h-20 w-80 flex m-10"
                />
                <p className="text-center mt-4">
                  Meditech is a private company specializing in representing
                  medical device manufacturers. Since 1979, they have
                  exclusively represented innovative solutions for the hospital
                  industry, providing equipment and instruments that enhance
                  patient safety and clinical outcomes.
                </p>
              </>
            )}
            {selected === "Aero" && (
              <>
                <img src={Aero} alt="Aero" className="h-20 w-80 flex m-10" />
                <p className="text-center mt-4">
                  AERO is a medical equipment manufacturer specializing in
                  anesthesia and respiratory care solutions. They provide
                  high-quality breathing circuits, ventilator accessories, and
                  CPAP systems for hospitals and clinics. Their products ensure
                  efficient and safe patient care in anesthesiology and critical
                  care settings.
                </p>
              </>
            )}
            {selected === "Portex" && (
              <>
                <img
                  src={Portex}
                  alt="Portex"
                  className="h-20 w-80 flex m-10"
                />
                <p className="text-center mt-4">
                  Portex, a brand under ICU Medical, specializes in
                  manufacturing anesthesia and respiratory care products. Their
                  offerings include epidural catheters, anesthesia breathing
                  circuits, and spinal anesthesia trays, all designed to meet
                  the specific needs of anesthesia departments.
                </p>
              </>
            )}
            {selected === "Rusch" && (
              <>
                <img src={Rusch} alt="Rusch" className="h-20 w-80 flex m-10" />
                <p className="text-center mt-4">
                  RÜSCH is a medical device company specializing in urology,
                  anesthesia, and surgical products, known for its high-quality
                  catheters and airway management solutions. It is a subsidiary
                  of Teleflex, a global provider of medical technologies.
                </p>
              </>
            )}
          </div>

          <div className="flex mt-10 text-4xl font-bold justify-center items-center">
            Range of products
          </div>

          {/* Hover Cards (Conditionally Rendered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-20 gap-28 sm:m-4 sm:gap-20 m-10 lg:p-20">
            {selected === "BL" &&
              cards.map((card) => (
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
            {selected === "Venticare" &&
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

            {selected === "Cocoon" &&
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
            {selected === "Aero" &&
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
            {selected === "Portex" &&
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
                  <p className="flex justify-center text-gray-800 text-2xl p-6 text-center font-semibold">
                    {card.text}
                  </p>
                </a>
              ))}

            {selected === "Rusch" &&
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
                  <p className="flex justify-center text-gray-800 text-2xl p-6 text-center font-semibold">
                    {card.text}
                  </p>
                </a>
              ))}
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

        {selected === "Venticare" && (
          <>
            <a
              href="https://venticaremedicalinc.com/products/"
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
              href="https://meditechintl.com/products//"
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
              href="https://www.careessentials.com.au/"
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
        {selected === "Aero" && (
          <>
            <a
              href="https://aerohealthcare.com/us/"
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
        {selected === "Portex" && (
          <>
            <a
              href="https://www.southwestmedical.com/brands/portex-smiths-medical"
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
        {selected === "Rusch" && (
          <>
            <a
              href="https://www.acsmedical.com/brands/rusch"
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
        {selected === "Medisafe" && (
          <>
            <a
              href="https://www.medisaferesuscitators.com/"
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
        {selected === "SURETECH" && (
          <>
            <a
              href="https://aerohealthcare.com/us/" //site not working
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
    </>
  );
};

export default function Anesthesiology() {
  const buttonImages = [
    { id: "BL", src: BL, alt: "BL Lifesciences" },
    { id: "Venticare", src: Venticare, alt: "Venticare" },
    { id: "Cocoon", src: Cocoon, alt: "Cocoon" },
    { id: "Meditech", src: Meditech, alt: "Meditech" },
    { id: "Aero", src: Aero, alt: "Aero" },
    { id: "Portex", src: Portex, alt: "Portex" },
    { id: " Rusch", src: Rusch, alt: " Rusch" },
    { id: "Medisafe", src: Medisafe, alt: "Medisafe" },
    { id: "SURETECH", src: Suretech, alt: "SURETECH" },
  ];

  return <DepartmentPage name="ANESTHESIOLOGY" buttonImages={buttonImages} />;
}
