import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Departments from "../../Components/DepNav";
import bg from "../../assets/depBG.png";
import Baxter from "../../assets/Baxter.png";
import { motion } from "framer-motion";


const DepartmentPage = ({ name, buttonImages }) => {
  const [selected, setSelected] = useState("Baxter");

  const cards = [
    {
      id: 1,
      image: "/Ophthalmology/Tiseel.jpg", // Change this to the correct image
      text: "Tiseel",
      url: "https://www.baxter.com/healthcare-professionals/surgical-care/tisseel-fibrin-sealant",
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
        <div className=" relative z-0 mt-20 m-0  lg:mt-40 lg:m-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
            <h2 className="z-50 text-4xl sm:text-6xl font-bold text-left flex-1">
              {name}
            </h2>
            <img
              src="/Ophthalmology/eye.jpg"
              alt={name}
              className="absolute -top-60 -right-20 opacity-60 transform rotate-45 w-4/5 sm:w-3/5 lg:w-1/3 rounded-3xl shadow-2xl z-0"
            />
          </div>
          {/* Buttons for Selecting Product Categories */}
          <div className="grid relative z-50 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
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

          {/* Conditionally Rendered Products */}
          <div className="flex z-50 flex-col justify-center items-center mt-6">
            {selected === "Baxter" && (
              <>
                <img
                  src={Baxter}
                  alt="Baxter Ophthalmology"
                  className="h-20 w-auto m-10"
                />
                <p className="text-center mt-4">
                  Baxter offers innovative solutions for ophthalmic surgery and
                  eye care.
                </p>
              </>
            )}
          </div>

          <div className="flex mt-10 text-4xl font-bold justify-center items-center">
            Range of Products
          </div>

          {/* Hover Cards for Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-20 gap-28 sm:m-4 sm:gap-20 m-10 lg:p-20">
            {selected === "Baxter" &&
              cards.map((card) => (
                <a
                  key={card.id}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <motion.div
                    className=" relative group h-100 w-48 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={card.image}
                      alt={`Card ${card.text}`}
                      className="h-100 w-48 mr-20 object-cover transition duration-300 transform group-hover:brightness-50"
                    />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <span className="text-white text-3xl font-bold">
                        {card.text}
                      </span>
                    </motion.div>
                  </motion.div>
                  <p className=" text-gray-800 text-2xl p-6 font-semibold">
                    {card.text}
                  </p>
                </a>
              ))}
          </div>
        </div>

        {/* Read More Button */}
        {selected === "Baxter" && (
          <a
            href="https://www.baxter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <button className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700">
              Read More
            </button>
          </a>
        )}
      </div>
      <Departments />
      <Footer />
    </>
  );
};

export default function Ophthalmology() {
  const buttonImages = [{ id: "Baxter", src: Baxter, alt: "Baxter" }];

  return <DepartmentPage name="OPHTHALMOLOGY" buttonImages={buttonImages} />;
}
