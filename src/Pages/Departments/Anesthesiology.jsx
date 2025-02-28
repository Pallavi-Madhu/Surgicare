import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import departments from "../../Data/departments";

import Hico from "../../assets/Hico.png";
import Cocoon from "../../assets/Cocoon.png";
import BL from "../../assets/BL Lifsciences.png";

import Card1 from "../../assets/BL Lifsciences.png";
import Card2 from "../../assets/BL Lifsciences.png";
import Card3 from "../../assets/BL Lifsciences.png";
//import bg from "../../assets/Neuro.png"; // Keeping the background image as you requested

const DepartmentPage = ({ name, image, buttonImages }) => {
  const [selected, setSelected] = useState("BL");

  const cards = [
    { id: 1, image: Card1, text: "Card 1 Description" },
    { id: 2, image: Card2, text: "Card 2 Description" },
    { id: 3, image: Card3, text: "Card 3 Description" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % departments.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + departments.length) % departments.length
    );
  };

  const handleNavigate = () => {
    navigate(`/${departments[currentIndex].id}`);
  };

  return (
    <>
      <Navbar />
      {/* <div
        className="min-h-screen overflow-x-hidden bg-cover bg-fixed "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundColor: "rgba(255, 255, 255, 0)",
          backgroundBlendMode: "overlay",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50% 50%",
        }}
      > */}
      <div className="mt-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
          <h2 className="text-6xl font-bold text-left flex-1">{name}</h2>
          {/* <img
            src={image}
            alt={name}
            className="w-full md:w-1/2 rounded-lg shadow"
          /> */}
        </div>

        {/* Buttons for BL and Insightra */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
          {buttonImages.map(({ src, alt, id }) => (
            <button
              key={id}
              onClick={() => setSelected(id)}
              className={`p-4 rounded-3xl text-white w-50 h-14 border flex justify-center items-center border-black ${
                selected === id ? "bg-blue-300" : "bg-white"
              }`}
            >
              <img src={src} alt={alt} className="h-12 w-auto" />
            </button>
          ))}
        </div>

        {/* Conditionally Rendered Content */}
        <div className="flex flex-col justify-center items-center mt-6">
          {selected === "Hico" && (
            <>
              <img src={Hico} alt="Hico" className="h-40 w-auto" />
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
              <img src={Cocoon} alt="Cocoon" className="h-40 w-auto" />
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
              <img src={BL} alt="BL" className="h-40 w-auto" />
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
        </div>

        <div className="flex mt-10 text-4xl font-bold justify-center items-center">
          Range of products
        </div>

        {/* Hover Cards (Conditionally Rendered) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 my-20 gap-6 p-10">
          {selected === "BL" &&
            cards.map((card) => (
              <div
                key={card.id}
                className="relative group h-48 w-full bg-gray-200 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={card.image}
                  alt={`Card ${card.id}`}
                  className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  {card.text}
                </div>
              </div>
            ))}

          {selected === "Insightra" &&
            cards.map((card) => (
              <div
                key={card.id}
                className="relative group h-48 w-full bg-gray-200 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={card.image}
                  alt={`Card ${card.id}`}
                  className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-red-500 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  {card.text}
                </div>
              </div>
            ))}
        </div>
      </div>
      {/*Read more*/}
      {selected === "Hico" && (
        <>
          <a
            href="https://www.hico.de/en/start.html"
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

      {selected === "BL" && (
        <>
          <a
            href="https://www.bllifesciences.com/"
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

      {/* Department Navigation (Just Above Footer) */}
      <div className="mt-10 mb-20 flex flex-col items-center">
        <div className="flex items-center gap-6">
          <button
            onClick={handlePrev}
            className="p-4 rounded-full border border-black hover:bg-gray-200"
          >
            <FaArrowLeft className="h-6 w-6" />
          </button>

          {/* Department Button */}
          <button
            onClick={handleNavigate}
            className="p-4 w-60 h-14 rounded-3xl text-black border border-black bg-white hover:bg-blue-300 transition text-lg font-semibold"
          >
            {departments[currentIndex].name}
          </button>

          <button
            onClick={handleNext}
            className="p-4 rounded-full border border-black hover:bg-gray-200"
          >
            <FaArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default function Neurosurgery() {
  const buttonImages = [
    { id: "Hico", src: Hico, alt: "Hico" },
    { id: "Cocoon", src: Cocoon, alt: "Cocoon" },
    { id: "BL", src: BL, alt: "BL" },
  ];

  return (
    <DepartmentPage
      name="ANESTHESIOLOGY"
      //image="/src/assets/Mizuho.png"
      buttonImages={buttonImages}
    />
  );
}
