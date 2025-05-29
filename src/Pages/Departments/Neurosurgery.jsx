import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import departments from "../../Data/departments";
import DepNav from "../../Components/DepNav";

//dept images for button
import Mizuho from "../../assets/Mizuho.png";
import Kinamed from "../../assets/Kinamed.png";
import Baxter from "../../assets/Baxter.png";
import Halyard from "../../assets/Halyard.png";
import Sunoptic from "../../assets/Sunoptic.png";
import Syncromax from "../../assets/Syncromax.png";
import Cocoon from "../../assets/Cocoon.png";
import BL from "../../assets/BLLifsciences.png";

import bg from "../../assets/depBG.png"; 

//product images-Mizuho
import clips from "../../assets/Neuro/Mizuho/image.png";
import headholder from "../../assets/Neuro/Mizuho/headholder.webp";
import dopplersystem from "../../assets/Neuro/Mizuho/DopplerSystems.webp";

//product images-Kinamed
import screws from "../../assets/Neuro/Kinamed/NeuroProLowProfileRigidFixationSystem.webp";
import screws2 from "../../assets/Neuro/Kinamed/NeuroProRigidFixationSystem.webp";

//product images Baxter
import floseal from "../../assets/Neuro/Baxter/floseal.jpg";
import hemopatch from "../../assets/Neuro/Baxter/hemopatch.webp";
import tiseel from "../../assets/Neuro/Baxter/Tisseel.webp";

//product images Sunoptic
import light from "../../assets/Neuro/Sunoptic/light.jpg";

//product images Syncromax
import bovinepatch from "../../assets/Neuro/Syncromax/bovinepatch.jpg";

//product images Cocoon
import warmer from "../../assets/Neuro/Cocoon/warming.png";
import blanket from "../../assets/Neuro/Cocoon/blanket.jpg";

const DepartmentPage = ({ name, image, buttonImages }) => {
  const [selected, setSelected] = useState("Mizuho");

  const mizuhoCards = [
    {
      id: 1,
      image: clips,
      text: "Sugita Titanium Aneurysm Clip II (T2) &amp; Appliers:Sugita Titanium aneurysm Clip Ⅱ from Mizuho.",
    },
    { id: 2, image: headholder, text: "Smart Fix Head Holder" },
    { id: 3, image: dopplersystem, text: "Mizuho Vascular Doppler System" },
  ];

  const kinamedCards = [
    {
      id: 1,
      image: screws,
      text: "NeuroPro® Rigid Fixation System",
    },
    {
      id: 2,
      image: screws2,
      text: "NeuroPro® Low Profile Rigid Fixation System",
    },
  ];

  const baxterCards = [
    {
      id: 1,
      image: floseal,
      text: "Floseal",
    },
    {
      id: 2,
      image: hemopatch,
      text: "Hemopatch ",
    },
    {
      id: 3,
      image: tiseel,
      text: "Tisseel ",
    },
  ];
  const sunopticCards = [
    {
      id: 1,
      image: light,
      text: "Sunoptic LX2 Battery Operated LED Headlight",
    },
  ];

  const syncromaxCards = [
    { id: 1, image: bovinepatch, text: " Bovine pericardial patch" },
  ];

  const cocoonCards = [
    { id: 1, image: blanket, text: "Cocoon Convective Warming Blankets" },
    { id: 2, image: warmer, text: "Cocoon Convective Warming System" },
  ];

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
              src={image}
              alt={name}
              className="w-full md:w-1/2 rounded-lg shadow"
            />
          </div>

          {/* Buttons */}
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

          {/* Conditionally Rendered Content */}
          <div className="flex flex-col justify-center items-center mt-6">
            {selected === "Mizuho" && (
              <>
                <img src={Mizuho} alt="Mizuho" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  Mizuho is a global leader in the field of neurosurgery. All
                  the products being being produced in Japan, they are
                  particularly well known for their “Sugita Aneurysm Clips”,
                  which are marketing with high reputation around the world.
                </p>
              </>
            )}
            {selected === "Kinamed" && (
              <>
                <img src={Kinamed} alt="Kinamed" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  Kinamed Inc USA designs and manufactures Implantables and
                  Instruments for Neurosurgery. BL promotes the NeuroPro® Low
                  Profile Rigid Fixation System across the country.
                </p>
              </>
            )}
            {selected === "Baxter" && (
              <>
                <img src={Baxter} alt="Baxter" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  Baxter contributes to neurosurgery with advanced hemostatic
                  agents, sealants, and dural repair solutions that aid in
                  bleeding control, tissue sealing, and surgical precision. Key
                  products like FLOSEAL, TISSEEL, DuraGen, and Hemopatch help
                  improve surgical outcomes in cranial and spinal procedures.
                </p>
              </>
            )}
            {selected === "Halyard" && (
              <>
                <img src={Halyard} alt="Halyard" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  Halyard specializes in surgical and infection prevention
                  solutions, providing sterile drapes, gowns, gloves, and
                  protective equipment essential for neurosurgery and other
                  medical procedures. Their products help maintain a sterile
                  environment, reducing the risk of surgical site infections and
                  ensuring patient and surgeon safety.
                </p>
              </>
            )}
            {selected === "Sunoptic" && (
              <>
                <img src={Sunoptic} alt="Sunoptic" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  Sunoptic is known for its surgical illumination solutions,
                  providing high-intensity LED and xenon surgical headlights,
                  cameras, and imaging systems used in neurosurgery and other
                  precision surgeries. Their advanced lighting technology
                  enhances visibility, precision, and efficiency in complex
                  procedures.
                </p>
              </>
            )}
            {selected === "Syncromax" && (
              <>
                <img src={Syncromax} alt="Syncromax" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  Mizuho is a global leader in the field of neurosurgery. All
                  the products being being produced in Japan, they are
                  particularly well known for their “Sugita Aneurysm Clips”,
                  which are marketing with high reputation around the world.
                </p>
              </>
            )}
            {selected === "Cocoon" && (
              <>
                <img src={Cocoon} alt="Cocoon" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  Cocoon is known for its patient warming systems used in
                  surgeries, including neurosurgery. Their Cocoon warming
                  blankets help maintain a patient’s body temperature during
                  procedures, reducing the risk of hypothermia and improving
                  surgical outcomes. Let me know if you're referring to a
                  different Cocoon product!
                </p>
              </>
            )}
            {selected === "BL-OT" && (
              <>
                <img src={BL} alt="BL-OT" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  Mizuho is a global leader in the field of neurosurgery. All
                  the products being being produced in Japan, they are
                  particularly well known for their “Sugita Aneurysm Clips”,
                  which are marketing with high reputation around the world.
                </p>
              </>
            )}
          </div>
          <div className="flex mt-10  text-5xl font-bold justify-center items-center">
            Range of products
          </div>

          <div className="container mx-auto my-10 px-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 place-items-center">
              {selected === "Mizuho" &&
                mizuhoCards.map((card) => (
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

              {selected === "Kinamed" &&
                kinamedCards.map((card) => (
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

              {selected === "Baxter" &&
                baxterCards.map((card) => (
                  <div
                    key={card.id}
                    className="relative group h-60 w-60 bg-gray-200 rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={card.image}
                      alt={`Card ${card.id}`}
                      className="h-60 w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      {card.text}
                    </div>
                  </div>
                ))}

              {selected === "Halyard" &&
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
              {selected === "Sunoptic" &&
                sunopticCards.map((card) => (
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
              {selected === "SyncroMax" &&
                syncromaxCards.map((card) => (
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
              {selected === "Cocoon" &&
                cocoonCards.map((card) => (
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
              {selected === "BL-OT" &&
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
            </div>
          </div>
        </div>
      </div>

      {/*Read more*/}
      {selected === "Mizuho" && (
        <>
          <a
            href="http://www.mizuhomedical.co.jp/"
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

      {selected === "Kinamed" && (
        <>
          <a
            href="https://www.kinamed.com/"
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
      {selected === "Baxter" && (
        <>
          <a
            href="https://www.baxter.com/"
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
      {selected === "Sunoptic" && (
        <>
          <a
            href="https://sunopticsurgical.com/"
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
      {selected === "Syncromax" && (
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
      {selected === "BL-OT" && (
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

      <DepNav />
      <Footer />
    </>
  );
};

export default function Cardiology() {
  const buttonImages = [
    { id: "Mizuho", src: Mizuho, alt: "Mizuho" },
    { id: "Kinamed", src: Kinamed, alt: "Kinamed" },
    { id: "Baxter", src: Baxter, alt: "Baxter" },
    { id: "Halyard", src: Halyard, alt: "Halyard" },
    { id: "Sunoptic", src: Sunoptic, alt: "Sunoptic" },
    { id: "Syncromax", src: Syncromax, alt: "Syncromax" },
    { id: "Cocoon", src: Cocoon, alt: "Cocoon" },
    { id: "BL-OT", src: BL, alt: "BL-OT" },
  ];

  return (
    <DepartmentPage
      name="NEUROSURGERY"
      image="/src/assets/Mizuho.png"
      buttonImages={buttonImages}
    />
  );
}
