import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DepNav from "../../Components/DepNav";

import BL from "../../assets/BL Lifsciences.png";
import Insightra from "../../assets/insightra.png";

import Card1 from "../../assets/BL Lifsciences.png";
import Card2 from "../../assets/BL Lifsciences.png";
import Card3 from "../../assets/BL Lifsciences.png";
//import bg from "../../assets/depBG.png";

//import heart from "../../assets/heart.png";

const DepartmentPage = ({ name, image, buttonImages }) => {
  const [selected, setSelected] = useState("BL");

  const cards = [
    { id: 1, image: Card1, text: "Card 1 Description" },
    { id: 2, image: Card2, text: "Card 2 Description" },
    { id: 3, image: Card3, text: "Card 3 Description" },
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
                className={`p-4 rounded-3xl text-white w-full h-14 border flex justify-center items-center ${
                  selected === id ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <img src={src} alt={alt} className="h-12 w-auto" />
              </button>
            ))}
          </div>

          {/* Company Details */}
          <div className="flex flex-col justify-center items-center mt-6">
            {selected === "Euroset" && (
              <>
                <img src={Euroset} alt="Euroset" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  Eurosets contributes to cardiac surgery by providing advanced
                  extracorporeal circulation systems, including oxygenators and
                  heart-lung machines. Their innovative solutions, such as the
                  ECMO and CPB systems, support life-saving procedures during
                  cardiac and thoracic surgeries. Eurosets focuses on patient
                  safety and surgical efficiency through continuous
                  technological advancements.
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
            {selected === "Scanlan" && (
              <>
                <img src={Scanlan} alt="Scanlan" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  Scanlan International is a leading manufacturer of
                  high-quality surgical instruments, specializing in
                  cardiovascular, microsurgical, and general surgical tools.
                  Founded in 1921, the company is known for precision
                  craftsmanship and innovation in medical device manufacturing.
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
                  includes chest drains, urine meters, and negative pressure
                  wound therapy systems, designed to enhance patient recovery
                  and improve hospital efficiency.
                </p>
              </>
            )}
            {selected === "Baxter" && (
              <>
                <img src={Baxter} alt="Baxter" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  Baxter plays a vital role in cardiac surgery by providing
                  advanced perfusion systems and oxygenators that support
                  cardiopulmonary bypass procedures. Their innovative solutions
                  help maintain blood circulation and oxygenation during
                  open-heart surgeries. Baxter’s technologies enhance patient
                  safety and surgical outcomes through precise monitoring and
                  control.
                </p>
              </>
            )}
            {selected === "Synkromax" && (
              <>
                <img src={Synkromax} alt="Synkromax" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  Syncromax contributes to cardiac surgery by offering
                  high-quality perfusion accessories and devices used during
                  cardiopulmonary bypass. Their products, such as tubing sets
                  and cannulas, ensure efficient blood flow management and
                  surgical precision. Syncromax supports cardiac teams with
                  reliable, sterile, and performance-driven solutions for
                  critical procedures.
                </p>
              </>
            )}
            {selected === "Terumo" && (
              <>
                <img src={Terumo} alt="Terumo" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  Terumo is a global leader in cardiac surgery, providing
                  cutting-edge technologies like heart-lung machines,
                  oxygenators, and perfusion systems. Their solutions support
                  cardiopulmonary bypass by ensuring safe and effective blood
                  circulation and oxygenation during surgery. Terumo's
                  innovations enhance surgical precision, patient safety, and
                  overall outcomes in open-heart procedures.
                </p>
              </>
            )}
            {selected === "Halyard" && (
              <>
                <img src={Halyard} alt="Halyard" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  Halyard contributes to cardiac surgery by supplying
                  high-quality sterile gowns and surgical drapes designed for
                  complex procedures. Their products offer excellent barrier
                  protection, fluid control, and comfort for surgical teams.
                  Halyard's solutions help maintain a sterile field, reducing
                  infection risk and supporting patient safety in cardiac
                  operations.
                </p>
              </>
            )}
            {selected === "Insightra" && (
              <>
                <img src={Insightra} alt="Insightra" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  The Insightra Ultra 7Fr catheter allows common fluid-filled
                  technology in a smaller catheter with no compromise on lumen
                  size.
                </p>
              </>
            )}
            {selected === "LSI" && (
              <>
                <img src={LSI} alt="LSI" className="h-40 w-auto" />
                <p className="text-center mt-4">
                  LSI Solutions contributes to cardiac surgery by developing
                  innovative minimally invasive surgical devices, such as
                  suture-based closure systems. Their technologies, like
                  COR-KNOT®, streamline valve replacement and repair procedures
                  by improving speed, precision, and consistency. LSI Solutions
                  enhances surgical efficiency and patient recovery through
                  advanced cardiac device engineering.
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
              {selected === "Euroset" &&
                EuroCards.map((card) => (
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

              {selected === "Baxter" &&
                BaxterCards.map((card) => (
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

              {selected === "Synnkromax" &&
                SynnkromaxCards.map((card) => (
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

              {selected === "Terumo" &&
                TerumoCards.map((card) => (
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

              {selected === "Halyard" &&
                HalyardCards.map((card) => (
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

              {selected === "Insightra" &&
                InsightraCards.map((card) => (
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

              {selected === "Insightra" &&
                InsightraCards.map((card) => (
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

              {selected === "LSI" &&
                LSICards.map((card) => (
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
          {selected === "Euroset" && (              //add link
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
          {selected === "Syncromax" && (
            <>
              <a
                href="https://insightra.com/" //not correct
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

          {selected === "Terumo" && (
            <>
              <a
                href="https://www.terumo.com/" //check
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

          {selected === "LSI" && (
            <>
              <a
                href="https://www.lsisolutions.com/"
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
export default function Cardiac_surgery() {
  const buttonImages = [
    { id: "Euroset", src: Euroset, alt: "Euroset" },
    { id: "BL", src: BL, alt: "BL Lifesciences" },
    { id: "Baxter", src: Baxter, alt: "Baxter" },
    { id: "Syncromax", src: Syncromax, alt: "Syncromax" },
    { id: "Terumo", src: Terumo, alt: "Terumo" },
    { id: "Scanlan", src: Scanlan, alt: "Scanlan" },
    { id: "Sinapi", src: Sinapi, alt: "Sinapi" },
    { id: "Halyard", src: Halyard, alt: "Halyard" },
    { id: "Insightra", src: Insightra, alt: "Insightra" },
    { id: "LSI", src: LSI, alt: "LSI" },
  ];

  return (
    <DepartmentPage
      name="CARDIAC SURGERY"
      //image={Mizuho}
      buttonImages={buttonImages}
    />
  );
}
