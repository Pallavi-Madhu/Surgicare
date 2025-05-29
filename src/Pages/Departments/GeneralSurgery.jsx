import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DepNav from "../../Components/DepNav";

//companies
import BL from "../../assets/BLLifsciences.png";
import Scanlan from "../../assets/Scanlan.png";
import Sinapi from "../../assets/Sinapi.png";
import Peters from "../../assets/Peters.png";

//Products-Sinapi
import chestdrain from "../../assets/GeneralSurgery/Sinapi/chest_drain.jpg";

//Products-Scanlan
import clamp from "../../assets/GeneralSurgery/Scanlan/clamp.png";
import instrument_care from "../../assets/GeneralSurgery/Scanlan/instrument_care.jpg";
import skinmarker from "../../assets/GeneralSurgery/Scanlan/skinmarker.jpg";
import surgiloop from "../../assets/GeneralSurgery/Scanlan/surgiloop.jpg";

//Products-Peters
import clips from "../../assets/GeneralSurgery/Peters/clips.jpg";

//Products-BL
import thoracic1 from "../../assets/GeneralSurgery/Bl/thoracic1.jpeg";
import thoracic2 from "../../assets/GeneralSurgery/Bl/thoracic2.jpg";
import chest1000ml from "../../assets/GeneralSurgery/Bl/chest1000ml.webp";
import suctionset from "../../assets/GeneralSurgery/Bl/suctionset.jpg";
import tipcleaner from "../../assets/GeneralSurgery/Bl/tipcleaner.webp";
import tipcleaner2_actual from "../../assets/GeneralSurgery/Bl/tipcleaner2_actual.webp";
import mister2 from "../../assets/GeneralSurgery/Bl/mister2.jpg";        
import surgiloop2 from "../../assets/GeneralSurgery/Bl/surgiloop.webp";
import cannula from "../../assets/GeneralSurgery/Bl/cannula.png";

import bg from "../../assets/depBG.png";

const Departments = ({ name, image, buttonImages }) => {
  const [selected, setSelected] = useState("Bl");

  const BLCards = [
    {
      id: "1",
      image: thoracic1,
      text: "THORACIC DRAINAGE CATHETER 12,20,24,28,32FR",
    },
    {
      id: "2",
      image: thoracic2,
      text: "THORACIC DRAINAGE CATHETER 24,28,32,36'FR ANGLED",
    },
    {
      id: "3",
      image: chest1000ml,
      text: "CHEST DRAIN.SYSTEM-2000ML",
    },
    {
      id: "4",
      image: suctionset,
      text: "YANKUR SUCTION SET.- STANDARD TIP",
    },
    {
      id: "5",
      image: tipcleaner,
      text: "CAUTERY TIP CLEANER",
    },
    {
      id: "6",
      image: tipcleaner2_actual,
      text: "CAUTERY TIP  PENCIL WITH CLEANER ",
    },
    {
      id: "7",
      image: mister2,
      image: "CARDIAC MISTER BLOWER WITH EXTENSION",
    },
    {
      id: "8",
      image: surgiloop2,
      text: "Surgi I Loop Mini/Maxi ( Yellow/Blue/Red/White)",
    },
    {
      id: "9",
      image: cannula,
      text: "Vessel Cannula Transparant Flexible 5C",
    },
  ];
  const ScanlanCards = [
    {
      id: 1,
      image: clamp,
      text: "BULL DOG CLAMP",
    },
    {
      id: 2,
      image: skinmarker,
      text: "Skin Marker",
    },
    {
      id: 3,
      image: instrument_care,
      text: "Instrument marker ( All colors are available)",
    },
    {
      id: 4,
      image: surgiloop,
      text: "Surgi loop with blend needle",
    },
  ];
  const SinapiCards = [
    {
      id: "1",
      image: chestdrain,
      text: "CHEST DRAIN SINAPI  1000ml",
    },
  ];
  const PetersCards = [
    {
      id: 1,
      image: clips,
      text: "S L S Clips, small, medium & Large",
    },
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
      {/* Pulmonology Page Content */}
      <div className="mt-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
          <h2 className="text-6xl font-bold text-left flex-1">
            General Surgery
          </h2>
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
          {selected === "Scanlan" && (
            <>
              <img src={Scanlan} alt="Scanlan" className="h-40 w-auto" />
              <p className="text-center mt-4">
                Scanlan International is a leading manufacturer of high-quality
                surgical instruments, specializing in cardiovascular,
                microsurgical, and general surgical tools. Founded in 1921, the
                company is known for precision craftsmanship and innovation in
                medical device manufacturing.
              </p>
            </>
          )}
          {selected === "Sinapi" && (
            <>
              <img src={Sinapi} alt="Sinapi" className="h-40 w-auto" />
              <p className="text-center mt-4">
                Sinapi Biomedicals specializes in developing innovative and
                cost-effective medical devices, particularly in wound care,
                critical care, and surgical solutions. Their product range
                includes chest drains, urine meters, and negative pressure wound
                therapy systems, designed to enhance patient recovery and
                improve hospital efficiency.
              </p>
            </>
          )}
          {selected === "Peters" && (
            <>
              <img src={Peters} alt="Peters" className="h-40 w-auto" />
              <p className="text-center mt-4">
                Peters Surgical is a French company specializing in designing,
                manufacturing, and distributing high-quality medical devices for
                surgical procedures. It is well known for its expertise in
                sutures, manual titanium clips, and surgical glue. The company
                focuses on innovation and precision to enhance surgical safety
                and efficiency.
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
            {selected === "BL" &&
              BLCards.map((card) => (
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

            {selected === "Scanlan" &&
              ScanlanCards.map((card) => (
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

            {selected === "Sinapi" &&
              SinapiCards.map((card) => (
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

            {selected === "Peters" &&
              PetersCards.map((card) => (
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

        {selected === "Sinapi" && (
          <>
            <a
              href="https://sinapibiomedical.com/"
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

        {selected === "Scanlan" && (
          <>
            <a
              href="https://www.scanlaninternational.com/"
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

        {selected === "Peters" && (
          <>
            <a
              href="https://peters-surgical.com/"
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
      </div>
    </>
  );
};
export default function GeneralSurgery() {
  const buttonImages = [
    { id: "BL", src: BL, alt: "BL" },
    { id: "Scanlan", src: Scanlan, alt: "Scanlan" },
    { id: "Sinapi", src: Sinapi, alt: "Sinapi" },
    { id: "Peters", src: Peters, alt: "Peters" },
  ];

  return (
    <Departments
      name="General Surgery"
      //image="/src/assets/Mizuho.png"
      buttonImages={buttonImages}
    />
  );
}
