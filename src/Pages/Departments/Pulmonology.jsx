
import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Sinapi from "../../assets/Sinapi.png";
import DepNav from "../../Components/DepNav";
import chestdrain from "../../assets/Pulmo/chestdrain.png"

const departments = [
  { id: "critical-care", name: "Critical Care" },
  { id: "cardiac-surgery", name: "Cardiac Surgery" },
  { id: "cardiology", name: "Cardiology" },
  { id: "neurosurgery", name: "Neurosurgery" },
  { id: "ophthalmology", name: "Ophthalmology" },
  { id: "pulmonology", name: "Pulmonology" },
  { id: "general-surgery", name: "General Surgery" },
  { id: "plastic-surgery", name: "Plastic Surgery" },
  { id: "orthopedic", name: "Orthopedic" },
  { id: "anesthesiology", name: "Anesthesiology" },
];

const cards = {
  id: 1,
  image: chestdrain, 
  text: "Chest Drainage System 50ml,400ml,1000ml",
  url:"https://sinapibiomedical.com/"
};

export default function Pulmonology() {
  return (
    <>
      <Navbar />

      {/* Pulmonology Page Content */}
      <div className="mt-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
          <h2 className="text-6xl font-bold text-left flex-1">PULMONOLOGY</h2>
        </div>

        {/* Company Details */}
        <div className="flex flex-col items-center mt-6">
          <img src={Sinapi} alt="Sinapi" className="h-40 w-auto" />
          <p className="mt-4 ml-4 text-left">
            Sinapi Biomedicals specializes in developing innovative and
            cost-effective medical devices, particularly in wound care, critical
            care, and surgical solutions. Their product range includes chest
            drains, urine meters, and negative pressure wound therapy systems,
            designed to enhance patient recovery and improve hospital
            efficiency.
          </p>
        </div>

        {/* Product Range Section */}
        <div className="flex mt-10 text-4xl font-bold justify-center items-center">
          Range of Products
        </div>

        {/* Card */}
        <div className="flex justify-center mt-10">
          <div className="relative group h-100  bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-300 mx-auto">
            <a key={cards.id} href={cards.url} className="no-underline">
            <img
              src={cards.image}
              alt={cards.text}
              className="h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              {cards.text}
            </div>
          </a>
          </div>
        </div>

        {/* Read More Button */}
        <a
          href="https://sinapibiomedical.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center mt-10"
        >
          <button className="hover:bg-blue-300 hover:text-black text-blue-700 py-2 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700">
            Read More
          </button>
        </a>
      </div>
      <DepNav />
      <Footer />
    </>
  );
}
