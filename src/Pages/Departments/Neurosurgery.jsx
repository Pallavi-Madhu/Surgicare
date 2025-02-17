import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const DepartmentPage = ({ name, image }) => {
  const buttons = Array.from({length:8},(_,index) => `Button ${index+1}`);
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 items-center">
        <h2 className="text-6xl font-bold text-left flex-1">{name}</h2>
        <img
          src={image}
          alt={name}
          className="w-full md:w-1/2 rounded-lg shadow"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {buttons.map((label, index) => (
          <button
            key={index}
            className="p-4 rounded bg-blue-500 text-white w-full md:w-auto"
          >
            {label}
          </button>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default function Neurosurgery() {
  return <DepartmentPage name="NEUROSURGERY" image="/src/assets/Mizuho.png" />;
}
