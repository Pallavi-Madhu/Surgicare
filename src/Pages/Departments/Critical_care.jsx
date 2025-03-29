import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DepNav from "../../Components/DepNav";
import bg from "../../assets/depBG.png";
import BL from "../../assets/BL Lifsciences.png";

const DepartmentPage = ({ name, buttonImages }) => {
  const [selected, setSelected] = useState("BL");
  return (
    <>
      <div>
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
          <div
            className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundColor: "rgba(255, 255, 255, 0)",
              backgroundBlendMode: "overlay",
            }}
          >
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
    { id: "Sinapi", src: BL, alt: "Sinapi" },
    { id: "Toray", src: BL, alt: "Toray" },
    { id: "Meditech Devices", src: BL, alt: "Meditech devices" },
    { id: "Cocoon", src: BL, alt: "Cocoon" },
    { id: "HICO", src: BL, alt: "HICO" },
  ];

  return <DepartmentPage name="CRITICAL CARE" buttonImages={buttonImages} />;
}

