import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import BL from "../../assets/BL Lifsciences.png";
import Insightra from "../../assets/insightra.png";
import Mizuho from "../../assets/Mizuho.png";
import Card1 from "../../assets/BL Lifsciences.png";
import Card2 from "../../assets/BL Lifsciences.png";
import Card3 from "../../assets/BL Lifsciences.png";
import bg from "../../assets/depBG.png";
import heart from "../../assets/heart.png";
import departments from "../../Data/departments"

const DepartmentPage = ({ name, image, buttonImages }) => {
  const [selected, setSelected] = useState("BL");

  const cards = [
    { id: 1, image: Card1, text: "Card 1 Description" },
    { id: 2, image: Card2, text: "Card 2 Description" },
    { id: 3, image: Card3, text: "Card 3 Description" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div
        className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundColor: "rgba(255, 255, 255, 0)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="mt-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
            <h2 className="text-6xl font-bold text-left flex-1">{name}</h2>
            <img
              src={heart}
              alt={name}
              className="absolute -top-20 -right-4 opacity-70 w-full transform md:-rotate-45 md:w-1/3 rounded-3xl shadow-2xl z-0"
            />
          </div>

          {/* Buttons for BL and Insightra */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
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
          <div className="flex flex-col justify-center items-center mt-6">
            {selected === "BL" && (
              <>
                <img
                  src={BL}
                  alt="BL Lifesciences"
                  className="h-40 w-auto m-10"
                />
                <p className="text-center mt-4">
                  Customized Cath lab Procedure Packs are available as per
                  user-defined requirements and specifications.
                </p>
              </>
            )}
            {selected === "Insightra" && (
              <>
                <img
                  src={Insightra}
                  alt="Insightra"
                  className="h-20 w-80 flex m-10"
                />
                <p className="text-center mt-4">
                  The Insightra Ultra 7Fr catheter allows common fluid-filled
                  technology in a smaller catheter with no compromise on lumen
                  size.
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

        {selected === "Insightra" && (
          <>
            <a
              href="https://insightra.com/"
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

export default function Cardiology() {
  const buttonImages = [
    { id: "BL", src: BL, alt: "BL Lifesciences" },
    { id: "Insightra", src: Insightra, alt: "Insightra" },
  ];

  return (
    <DepartmentPage
      name="CARDIOLOGY"
      image={Mizuho}
      buttonImages={buttonImages}
    />
  );
}
