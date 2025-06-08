import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DepNav from "../../Components/DepNav";
import { motion } from "framer-motion";
//companies
import BL from "../../assets/BLLifsciences.png";
import Scanlan from "../../assets/Scanlan.png";
import Sinapi from "../../assets/Sinapi.png";
import Peters from "../../assets/Peters.png";

//Products-Sinapi
import chestdrain from "../../assets/GeneralSurgery/Sinapi/chest_drain.jpg";

//Products-Scanlan
import clamp from "../../assets/GeneralSurgery/Scanlan/clamp.png";
import instrument_care from "../../assets/GeneralSurgery/Scanlan/instrument_care.jpg";
import skinmarker from "../../assets/GeneralSurgery/Scanlan/skinmarker.jpg";
import surgiloop from "../../assets/GeneralSurgery/Scanlan/surgiloop.jpg";

//Products-Peters
import clips from "../../assets/GeneralSurgery/Peters/clips.jpg";

//Products-BL
import thoracic1 from "../../assets/GeneralSurgery/Bl/thoracic1.jpeg";
import thoracic2 from "../../assets/GeneralSurgery/Bl/thoracic2.jpg";
import chest1000ml from "../../assets/GeneralSurgery/Bl/chest1000ml.webp";
import suctionset from "../../assets/GeneralSurgery/Bl/suctionset.jpg";
import tipcleaner from "../../assets/GeneralSurgery/Bl/tipcleaner.webp";
import tipcleaner2_actual from "../../assets/GeneralSurgery/Bl/tipcleaner2_actual.webp";
import mister2 from "../../assets/GeneralSurgery/Bl/mister2.jpg";        
import surgiloop2 from "../../assets/GeneralSurgery/Bl/surgiloop.webp";
import cannula from "../../assets/GeneralSurgery/Bl/cannula.png";

import bg from "../../assets/depBG.png";

const Departments = ({ name, image, buttonImages }) => {
  const [selected, setSelected] = useState("Bl");

  const BLCards = [
    {
      id: "1",
      image: thoracic1,
      text: "THORACIC DRAINAGE CATHETER 12,20,24,28,32FR",
      url:"https://www.bllifesciences.com/products/surgical-innovations/"
    },
    {
      id: "2",
      image: thoracic2,
      text: "THORACIC DRAINAGE CATHETER 24,28,32,36'FR ANGLED",
      url:"https://www.bllifesciences.com/products/surgical-innovations/"
    },
    {
      id: "3",
      image: chest1000ml,
      text: "CHEST DRAIN.SYSTEM-2000ML",
      url:"https://sinapibiomedical.com/"
    },
    {
      id: "4",
      image: suctionset,
      text: "YANKUR SUCTION SET.- STANDARD TIP",
      url:"https://www.bllifesciences.com/products/surgical-innovations/"
    },
    {
      id: "5",
      image: tipcleaner,
      text: "CAUTERY TIP CLEANER",
      url:"https://www.bllifesciences.com/products/surgical-innovations/"
    },
    {
      id: "6",
      image: tipcleaner2_actual,
      text: "CAUTERY TIP  PENCIL WITH CLEANER ",
      url:"https://www.bllifesciences.com/products/surgical-innovations/"
    },
    {
      id: "7",
      image: mister2,
      image: "CARDIAC MISTER BLOWER WITH EXTENSION",
      url:"https://www.bllifesciences.com/products/customised-perfusion-system/"
    },
    {
      id: "8",
      image: surgiloop2,
      text: "Surgi I Loop Mini/Maxi ( Yellow/Blue/Red/White)",
      url:"https://www.minogue-med.com/product/aspen-surgical-vessel-loops-maxi-blue/"
    },
    {
      id: "9",
      image: cannula,
      text: "Vessel Cannula Transparant Flexible 5C",  //could  not find link
    },
  ];
  const ScanlanCards = [
    {
      id: 1,
      image: clamp,
      text: "BULL DOG CLAMP",
      url:"https://www.scanlaninternational.com/product-category/instrumentation/clamps/"
    },
    // {
    //   id: 2,
    //   image: skinmarker,
    //   text: "Skin Marker",
    //   url:"https://www.scanlaninternational.com/products/1001-710/"
    // },
    {
      id: 3,
      image: instrument_care,
      text: "Instrument marker ( All colors are available)",
      url:"https://www.scanlaninternational.com/scanlan-products/instrument-care/"
    },
    {
      id: 4,
      image: surgiloop,
      text: "Surgi loop with blend needle",
      url:"https://www.scanlaninternational.com/products/1001-81p/"
    },
  ];
  const SinapiCards = [
    {
      id: "1",
      image: chestdrain,
      text: "CHEST DRAIN SINAPI  1000ml",
      url:"https://sinapibiomedical.com/"
    },
  ];
  const PetersCards = [
    {
      id: 1,
      image: clips,
      text: "S L S Clips, small, medium & Large",
      url:"https://peters-surgical.com/wp-content/uploads/sites/4/2023/05/SLS-Titanium-clips-brochure.pdf"
    },
  ];

  return (
    <>
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
      {/* Pulmonology Page Content */}
       <div className=" sm:mt-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
              <h2 className="z-20 text-5xl sm:text-6xl font-bold text-left flex-1">
                {name}
              </h2>
        </div>

        {/* Buttons */}
      <div className="grid relative  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
            {buttonImages.map(({ src, alt, id }) => (
             <button
          key={id}
           onClick={() => setSelected(id)}
            className={`p-2 font-bold rounded-3xl text-black w-1/2 sm:w-3/4 lg:w-1/2 mx-14 h-14 border border-black flex justify-center items-center ${
           selected === id ? "bg-gray-500 text-white border-gray-500" : "bg-white"
         }` }
           >
                <img src={src} alt={alt} className="h-12 w-auto" />
              </button>
            ))}
          </div>
        {/* Company Details */}
        <div className="flex flex-col justify-center items-center mt-6">
          {selected === "BL" && (
            <>
              <img src={BL} alt="BL" className="h-40 w-auto" />
                 <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                BL Lifesciences contributes to anesthesiology by providing
                advanced anesthesia delivery systems, breathing circuits, and
                airway management solutions. Their products ensure precise gas
                delivery, patient safety, and optimal ventilation during
                surgical procedures. BL Lifesciences also offers high-quality
                monitoring accessories to enhance anesthesia care.
              </p>
            </>
          )}
          {selected === "Scanlan" && (
            <>
              <img src={Scanlan} alt="Scanlan" className="h-30 w-auto" />
                <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                Scanlan International is a leading manufacturer of high-quality
                surgical instruments, specializing in cardiovascular,
                microsurgical, and general surgical tools. Founded in 1921, the
                company is known for precision craftsmanship and innovation in
                medical device manufacturing.
              </p>
            </>
          )}
          {selected === "Sinapi" && (
            <>
              <img src={Sinapi} alt="Sinapi" className="h-40 w-auto" />
                 <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                Sinapi Biomedicals specializes in developing innovative and
                cost-effective medical devices, particularly in wound care,
                critical care, and surgical solutions. Their product range
                includes chest drains, urine meters, and negative pressure wound
                therapy systems, designed to enhance patient recovery and
                improve hospital efficiency.
              </p>
            </>
          )}
          {selected === "Peters" && (
            <>
              <img src={Peters} alt="Peters" className="h-30 w-auto" />
                <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                Peters Surgical is a French company specializing in designing,
                manufacturing, and distributing high-quality medical devices for
                surgical procedures. It is well known for its expertise in
                sutures, manual titanium clips, and surgical glue. The company
                focuses on innovation and precision to enhance surgical safety
                and efficiency.
              </p>
            </>
          )}
        </div>

        {/* Product Range Section */}
        <div className="flex mt-10 text-4xl font-bold justify-center items-center">
          Range of Products
        </div>

        {/* Product Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-20 gap-28 sm:m-4 sm:gap-20 m-10 lg:p-20">
            {selected === "BL" &&
              BLCards.map((card) => (
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

            {selected === "Scanlan" &&
              ScanlanCards.map((card) => (
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

            {selected === "Sinapi" &&
              SinapiCards.map((card) => (
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

            {selected === "Peters" &&
              PetersCards.map((card) => (
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

        {/*Read more*/}
        <div className="flex justify-center mt-10 mb-14">
        {selected === "BL" && (
          <>
            <a
              href="https://www.bllifesciences.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700"
            >
              Read More
            </a>
          </>
        )}

        {selected === "Sinapi" && (
          <>
            <a
              href="https://t.sinapibiomedical.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700"
            >
              Read More
            </a>
          </>
        )}

        {selected === "Scanlan" && (
          <>
            <a
              href="https://www.scanlaninternational.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700"
            >
              Read More
            </a>
          </>
        )}

        {selected === "Peters" && (
          <>
            <a
              href="https://peters-surgical.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700"
            >
              Read More
            </a>
          </>
        )}
      </div>
        </div>
      <DepNav />
      <Footer />
      </div>
    </>
  );
};
export default function GeneralSurgery() {
  const buttonImages = [
    { id: "BL", src: BL, alt: "BL" },
    { id: "Scanlan", src: Scanlan, alt: "Scanlan" },
    { id: "Sinapi", src: Sinapi, alt: "Sinapi" },
    { id: "Peters", src: Peters, alt: "Peters" },
  ];

  return (
    <Departments
      name="General Surgery"
      //image="/src/assets/Mizuho.png"
      buttonImages={buttonImages}
    />
  );
}
