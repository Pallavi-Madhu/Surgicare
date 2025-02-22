import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Sinapi from "../../assets/Sinapi.png";
import Card1 from "../../assets/Sinapi.png";
import Card2 from "../../assets/BL Lifsciences.png";
import Card3 from "../../assets/BL Lifsciences.png";

const DepartmentPage = ({ name, image }) => {
  const cards = [
    { id: 1, image: Card1, text: "Card 1 Description" },
    { id: 2, image: Card2, text: "Card 2 Description" },
    { id: 3, image: Card3, text: "Card 3 Description" },
  ];

  return (
    <>
      <Navbar />
      <div className="mt-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
          <h2 className="text-6xl font-bold text-left flex-1">{name}</h2>
        </div>

        {/* Company Details */}
        <div className="flex flex-col items-center mt-6">
          {/* <div className="mt-6">
            <button className="p-4 rounded-3xl text-white w-60 h-14 border flex justify-center items-center border-black bg-white hover:bg-blue-300 transition">
              <img src={Sinapi} alt="Sinapi" className="h-12 w-auto" />
            </button>
          </div> */}

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

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 my-20 gap-6 p-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative group h-40 w-full sm:w-1/2 bg-gray-200 rounded-xl overflow-hidden shadow-lg mx-auto"
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
        </div>

        {/* Read More Button */}
        <a
          href="https://sinapibiomedical.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <button className="hover:bg-blue-300 hover:text-black text-blue-700 py-2 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700">
            Read More
          </button>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default function Pulmonology() {
  return <DepartmentPage name="PULMONOLOGY" />;
}
