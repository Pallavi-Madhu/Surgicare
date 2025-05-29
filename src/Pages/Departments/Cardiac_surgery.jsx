import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DepNav from "../../Components/DepNav";

//import company logo
import Euroset from "../../assets/Euroset.png";
import BL from "../../assets/BLLifsciences.png";
import Baxter from "../../assets/Baxter.png";
import Synkromax from "../../assets/Syncromax.png";
import Terumo from "../../assets/Terumo.png";
import Scanlan from "../../assets/Scanlan.png";
import Sinapi from "../../assets/Sinapi.png";
import Halyard from "../../assets/Halyard.png";
import Insightra from "../../assets/insightra.png";
import LSI from "../../assets/LSI.png";

//Euroset products
import oxygenerator from "../../assets/CardiacSurgery/Euroset/oxygenerator.webp";

//BL products
import image1 from "../../assets/Anastesiology/PressureMonitoringLines_Main.jpg";
import image2 from "../../assets/Anastesiology/presseurtransducer.jpg";
import image3 from "../../assets/Anastesiology/hmefilter.jpg";
import image4 from "../../assets/Anastesiology/interphasecable.jpg";
import image5 from "../../assets/Anastesiology/3waywithextension.jpeg";
import image7 from "../../assets/Anastesiology/lumen.jpg";
import image8 from "../../assets/Anastesiology/adultexpandable.jpg";
import image9 from "../../assets/Anastesiology/Lungexcerciser.jpg";

import image11 from "../../assets/Anastesiology/nebulizer.jpeg";
import image12 from "../../assets/Anastesiology/Ventilator-Plain-Circuit.jpg";

import image10 from "../../assets/Anastesiology/warmingblanket.jpg";

import image13 from "../../assets/Anastesiology/bronchial.webp";
import image14 from "../../assets/Anastesiology/cuff-meter.webp";
import image15 from "../../assets/Anastesiology/Nasopharyngeal.jpg";

import image16 from "../../assets/Anastesiology/BainCircuit.jpg";
import image17 from "../../assets/Anastesiology/adultbreathablecircuit.webp";
import image18 from "../../assets/Anastesiology/circuit.jpg";
import image19 from "../../assets/Anastesiology/breathingcircuitwhite.jpg";
import image20 from "../../assets/Anastesiology/ReusableAdult.png";
import image21 from "../../assets/Anastesiology/BVL-Filter.jpg";
import image22 from "../../assets/Anastesiology/cpap.jpeg";
import image23 from "../../assets/Anastesiology/harness2.jpg";
import image24 from "../../assets/Anastesiology/pediatric.jpg";
import image25 from "../../assets/Anastesiology/pediatricbreathing.jpg";
import image26 from "../../assets/Anastesiology/tconnector.jpeg";

import image27 from "../../assets/Anastesiology/bougie.avif";

import image28 from "../../assets/Anastesiology/4blades.jpg";

import image29 from "../../assets/Anastesiology/needle.jpg";

import image30 from "../../assets/Anastesiology/BougieInroducer -Adult.jpeg";
import image31 from "../../assets/Anastesiology/BougieInroducer -Pediatric,.jpg";
import image32 from "../../assets/Anastesiology/Adult Ported Introducer.jpeg";
import image33 from "../../assets/Anastesiology/Pediatric Ported Introducer.webp";
import image34 from "../../assets/Anastesiology/Neonatal Stylette.webp";
import image35 from "../../assets/Anastesiology/Pediatric Stylette.avif";
import image36 from "../../assets/Anastesiology/Adult Stylette.jpg";
import image37 from "../../assets/Anastesiology/Adult Malleable Introducer.jpg";
import image38 from "../../assets/Anastesiology/Sterile Adult Al Stylette.jpg";
import image39 from "../../assets/Anastesiology/Wendl Nasopharyngeal Airways.jpeg";

//Baxter products
import floseal from "../../assets/CardiacSurgery/Baxter/floseal copy.jpg";
import hemopatch from "../../assets/CardiacSurgery/Baxter/hemopatch.webp";

//Syncromax products
import bovinepatch from "../../assets/CardiacSurgery/Syncromax/bovinepatch.jpg";

//Terumo products
import evhs from "../../assets/CardiacSurgery/Terumo/evhs.jpg";
import stabilizer from "../../assets/CardiacSurgery/Terumo/stabilizer.png";

//Sinapi products
import chestdrain from "../../assets/CardiacSurgery/Sinapi/chestdrain.png";

//Halyard products
import drapes from "../../assets/Orthopedic/Halyard/drapes.jpg";
import gowns from "../../assets/Orthopedic/Halyard/gowns.jpeg";
import masks from "../../assets/Orthopedic/Halyard/masks.jpg";

//Insightra products
import IABP from "../../assets/CardiacSurgery/Insightra/IABP.png";

//LSI products
import corknot from "../../assets/CardiacSurgery/LSI/corknot.jpeg";

const DepartmentPage = ({ name, image, buttonImages }) => {
  const [selected, setSelected] = useState("BL");

  const EuroCards = [
    {
      id: "1",
      image: oxygenerator,
      text: "Oxygenator adult Kompass",
    },
  ];

  const BLCards = [
    {
      id: 1,
      image: image1,
      text: "Pressure Monitoring Lines",
      //url: "https://www.bllifesciences.com/products/invasive-pressure-system/",
    },
    {
      id: 2,
      image: image2,
      text: "Disposable pressure transducer",
      //url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 3,
      image: image3,
      text: "HME filter",
      //url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 4,
      image: image4,
      text: "Inter phase cable suit with your monitor",
      // url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 5,
      image: image5,
      text: "3 way with extension -10cm, 25/50cm",
      //url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 6,
      image: "/Cardiology/IVset.png",
      text: "IV SET VENTED",
      //url: "https://bllifesciences.com/wp-content/uploads/2022/08/BL-Lifesciences.pdf",
    },
    {
      id: 7,
      image: image7,
      text: "1 Lumen CVP CATH",
      //url: "https://www.bllifesciences.com/wp-content/uploads/2022/06/24_IFU_Inflation_device.pdf",
    },
    {
      id: 8,
      image: image8,
      text: "ADULT EXPANDABLE CIRCUIT",
      //url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 9,
      image: image9,
      text: "Lung Exerciser",
      //url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 10,
      image: image11,
      text: "Adult Nebulizer Mask Kit (3026)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 11,
      image: image12,
      text: "VENTILATOR CIRCUIT PLAIN ADULT",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 12,
      image: image10,
      text: "Warming Blankets",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 13,
      image: image16,
      text: "ADULT BAINS CIRCUIT-AERO (2001)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 14,
      image: image17,
      text: "ADULT BREATHING CIRCUIT-EXPANDABLE (1010-E)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 15,
      image: image18,
      text: "ADULT BREATHING CIRCUIT EXP.WITH EXTRA LIMB &CONCTR (1010-01-E)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 16,
      image: image19,
      text: "ADULT BREATHING CIRCUIT-WHITE (REF:1010)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 17,
      image: image20,
      text: "Adult Double Water Trap Ventilator Circuit (REF:1012)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 18,
      image: image21,
      text: "BVL FILTER AERO (2010)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },

    {
      id: 19,
      image: image22,
      text: "CPAP CIRCUIT (SMOOTH BORE TUBING) 1.8 MTR (4000)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 20,
      image: image23,
      text: "Cpap Circuit with Mask and Harness-Adult",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 21,
      image: image24,
      text: "PAEDIATRIC BAIN CIRCUIT-JACKSON REES (2002)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 22,
      image: image25,
      text: "PEADIATRIC BREATHING CIRUIT (1020)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 23,
      image: image26,
      text: "T- CONNECTOR (1500)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 24,
      image: image27,
      text: "Bougie (Adult) ",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 25,
      image: image13,
      text: "Bronchial Double Lumen Tube",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 26,
      image: image14,
      text: "Cuff measuring meter for E.T.Tube",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 27,
      image: image15,
      text: "Nasopharyngeal Air way 28,30,34",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 28,
      image: image28,
      text: "Laryngoscope with 4 blades -Fiberoptic",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 29,
      image: image29,
      text: "INTRODUCER NEEDLE 18 Gx7CM",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 30,
      image: image30,
      text: "BougieInroducer -Adult, Coudé Tip-15 FR x 70 cm",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 31,
      image: image31,
      text: "BougieInroducer -Pediatric, Coudé Tip-10 FR x 70 cm",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 32,
      image: image32,
      text: "Adult Ported Introducer-15 FR x 70 cm",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 33,
      image: image33,
      text: "Pediatric Ported Introducer-10 FR x 70 cm",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 34,
      image: image34,
      text: "Neonatal Stylette (2.0mm)-6 FR x 255 mm",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 35,
      image: image35,
      text: "Pediatric Stylette (3.0mm)-8FR x 300 mm",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },

    {
      id: 36,
      image: image36,
      text: "Adult Stylette (4.0mm)-10 FR x 335 mm",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 37,
      image: image37,
      text: "Adult Malleable Introducer-15 FR x 70 cm",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 38,
      image: image38,
      text: "Sterile Adult Al Stylette-9FR x 16",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 39,
      image: image39,
      text: "Wendl Nasopharyngeal Airways (Silicone)12 Fr-  3/4.0mm",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
  ];

  const BaxterCards = [
    {
      id: 1,
      image: floseal,
      text: "Floseal",
    },
    {
      id: 2,
      image: hemopatch,
      text: "Hemopatch",
    },
  ];

  const SynkromaxCards = [
    { id: 1,
      image: bovinepatch,
      text: "Bovine pericardial patch" },
  ];

  const TerumoCards = [
    {
      id: 1,
      image: evhs,
      text: "Endoscopic Vessel Harvesting (EVH) System",
    },
    {
      id: 2,
      image: stabilizer,
      text: "Stabilizer",
    },
  ];

  /*const ScanlanCards = [                //change
    {
      id: 1,
      image: clamp,
      text: "BULL DOG CLAMP",
    },
  ];*/

  const SinapiCards = [
    {
      id: 1,
      image: chestdrain,
      text: "Chest Drain System",
    },
  ];

  const HalyardCards = [
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

  const InsightraCards = [
    {
      id: 1,
      image: IABP,
      text: "ULTRA - IABP 7Fr Intra Aortic Balloon Catheter Ki",
    },
  ];

  const LSICards = [
    {
      id: 1,
      image: corknot,
      text: "COR-KNOT",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
        style={{
          //backgroundImage: `url(${bg})`,
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

              {selected === "Synkromax" &&
                SynkromaxCards.map((card) => (
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

              {/*{selected === "Scanlan" &&
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
                */}

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
          {selected === "Euroset" && (
            <>
              <a
                href="https://www.eurosets.com/en/"
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
          {selected === "SynKromax" && (
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
    { id: "Synkromax", src: Synkromax, alt: "Synkromax" },
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
