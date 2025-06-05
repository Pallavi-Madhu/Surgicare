import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DepNav from "../../Components/DepNav";
import bg from "../../assets/depBG.png";
import Baxter from "../../assets/Baxter.png";
import Sunkromax from "../../assets/Syncromax.png";
import Surgiwear from "../../assets/Surgiwear.png";
import { motion } from "framer-motion";


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
      image: "/Plastic/bovine.png", // Change this to the correct image
      text: "Bovine Patch",
      url: "https://www.reachmedicalsystems.com/synkromax",
    },
  ];

  const cards3 = [
    {
      id: 1,
      image: "/Plastic/gplast.png", // Change this to the correct image
      text: "G Plast",
      url: "https://surgiwear.co.in/?product_cat=0&s=g+plast&post_type=product",
    },
    {
      id: 2,
      image: "/Plastic/gdress.png", // Change this to the correct image
      text: "G Dress",
      url: "https://surgiwear.co.in/product/owntone-g-dress-transparent-adhesive-dressing-with-pad/",
    },
    {
      id: 3,
      image: "/Plastic/burnmesh.png", // Change this to the correct image
      text: "Burn Mesh",
      url: "https://surgiwear.co.in/?product_cat=0&s=burn+mesh&post_type=product",
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

          {/* Conditionally Rendered Content */}
          <div className="flex z-50 flex-col justify-center items-center mt-6">
            {selected === "Baxter" && (
              <>
                <img
                  src={Baxter}
                  alt="BL Lifesciences"
                  className="h-20 w-auto m-10"
                />
                <p className="text-center w-3/4 mt-4">
                  Baxter TISSEEL is a fibrin sealant used in surgical procedures
                  to control bleeding and support wound healing. It mimics the
                  body’s natural clotting process by combining fibrinogen and
                  thrombin to form a stable fibrin clot.
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
                  SynkroMax's Synkroscaff is a tissue-engineered, decellularized
                  bovine pericardial patch designed for surgical anatomical
                  repairs.
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
                  Surgiwear's G-Dress is a sterilized adhesive bandage made from
                  SMS non-woven fabric, featuring a fluid-resistant middle layer
                  that allows for regular activities like bathing without
                  compromising the dressing. <br />
                  G-Plast is Surgiwear's surgical tape, designed to secure
                  dressings and medical devices to the skin, providing reliable
                  adhesion while being gentle on the skin. <br />
                  Finally Burnmesh by Surgiwear is a paraffin gauze dressing
                  designed to protect burn wounds, minimize pain, and prevent
                  adherence to the wound.
                </p>
              </>
            )}
          </div>

          <div className="flex mt-10 text-4xl font-bold justify-center items-center">
            Range of products
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
      <div className="flex justify-center mt-10 mb-14">
        
      
      {selected === "Baxter" && (
            <>
              <a
                href="https://www.baxter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-300 hover:text-black text-blue-700 py-2 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700"
              >
               Read More
              </a>
            </>
          )}
          {selected === "Synkromax" && (
            <>
              <a
                href="http://www.synkromax.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-300 hover:text-black text-blue-700 py-2 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700"
              >
               Read More
              </a>
            </>
          )}
          {selected === "Surgiwear" && (
            <>
              <a
                href="https://surgiwear.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-300 hover:text-black text-blue-700 py-2 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700"
              >
               Read More
              </a>
            </>
          )}
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
