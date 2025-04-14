import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Halyard from "../../assets/Halyard.png";
import Surgiwear from "../../assets/Surgiwear.png";
import DepNav from "../../Components/DepNav";
//Products-Halyard
import drapes from "../../assets/Orthopedic/Halyard/drapes.jpg";
import gowns from "../../assets/Orthopedic/Halyard/gowns.jpeg";
import masks from "../../assets/Orthopedic/Halyard/masks.jpg";
//Products-Surgiwear
import GBone from "../../assets/Orthopedic/Surgiwear/GBone.webp";
import GDress from "../../assets/Orthopedic/Surgiwear/GDress.jpg";
import GPatch from "../../assets/Orthopedic/Surgiwear/GPatch.jpg";

const Departments = ({ name, image, buttonImages }) => {
  const [selected, setSelected] = useState("Halyard");

const halyardCards = [
  {
    id: "drapes",
    image: drapes,
    text: "Surgical Drapes",
  },
  {
    id: "gowns",
    image: gowns,
    text: "Surgical Gowns",
  },
  {
    id: "masks",
    image: masks,
    text: "Surgical Masks",
  },
];
const surgiwearCards = [
  {
    id: 1,
    image: GBone,
    text: "G Bone",
  },
  {
    id: 2,
    image: GDress,
    text: "G Dress",
  },
  {
    id: 3,
    image: GPatch,
    text: "G Patch",
  },
];

  return (
    <>
      <Navbar />
      {/* Pulmonology Page Content */}
      <div className="mt-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
          <h2 className="text-6xl font-bold text-left flex-1">ORTHOPEDIC</h2>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
          {buttonImages.map(({ src, alt, id }) => (
            <button
              key={id}
              onClick={() => setSelected(id)}
              className={`p-4 rounded-full text-white w-3/4 h-14 border flex justify-center items-center ${
                selected === id ? "bg-blue-600" : "bg-blue-300"
              }`}
            >
              <img src={src} alt={alt} className="h-12 w-auto" />
            </button>
          ))}
        </div>

        {/* Company Details */}
        <div className="flex flex-col justify-center items-center mt-6">
          {selected === "Halyard" && (
            <>
              <img src={Halyard} alt="Halyard" className="h-40 w-auto" />
              <p className="text-center mt-4">
                Halyard contributes to the orthopedic department by providing
                high-quality surgical drapes, gowns, and sterilization solutions
                to ensure infection prevention during procedures. Their
                orthopedic-specific solutions help maintain a sterile field and
                enhance patient safety.
              </p>
            </>
          )}
          {selected === "Surgiwear" && (
            <>
              <img src={Surgiwear} alt="Surgiwear" className="h-40 w-auto" />
              <p className="text-center mt-4">
                Surgiwear is an Indian medical device company specializing in
                surgical implants, infection control, and wound care products.
                They focus on innovation and quality to enhance patient safety
                and surgical outcomes.
              </p>
            </>
          )}
        </div>

        {/* Product Range Section */}
        <div className="flex mt-10 text-4xl font-bold justify-center items-center">
          Range of Products
        </div>

        {/* Product Cards */}
        <div className="container mx-auto my-10 px-4 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 place-items-center">
            {selected === "Halyard" &&
              halyardCards.map((card) => (
                <div
                  key={card.id}
                  className="relative group w-60 h-60 bg-gray-200 rounded-xl overflow-hidden shadow-lg"
                >
                  {/* Product Image */}
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-60 object-cover transition duration-300 transform group-hover:brightness-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-100 text-black text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    {card.text}
                  </div>
                </div>
              ))}

            {selected === "Surgiwear" &&
              surgiwearCards.map((card) => (
                <div
                  key={card.id}
                  className="relative group h-60 w-60 bg-gray-200 rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={card.image}
                    alt={`Card ${card.id}`}
                    className="h-60 w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-red-500 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    {card.text}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/*Read more*/}
        {selected === "Halyard" && (
          <>
            <a
              href="https://www.halyardhealth.com/"
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

        {selected === "Surgiwear" && (
          <>
            <a
              href="https://surgiwear.co.in/"
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
export default function Orthopedic() {
  const buttonImages = [
    { id: "Halyard", src: Halyard, alt: "Halyard" },
    { id: "Surgiwear", src: Surgiwear, alt: "Surgiwear" },
  ]

return (
    <Departments
      name="ORTHOPEDIC"
      //image="/src/assets/Mizuho.png"
      buttonImages={buttonImages}
    />
  );
}
