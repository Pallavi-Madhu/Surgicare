import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import bg from "../../assets/depBG.png";

import { motion } from "framer-motion";

import Cocoon from "../../assets/Cocoon.png";
import BL from "../../assets/BLLifsciences.png";
import Meditec from "../../assets/meditec.png";
import Aero from "../../assets/Aero.png";
import Rusch from "../../assets/Rusch.png";
import Medisafe from "../../assets/Medisafe.png";
import Suretech from "../../assets/suretech.webp";
import Venticare from "../../assets/Venticare.png";
import Portex from "../../assets/Portex.png";
import DepNav from "../../Components/DepNav";

import image1 from "../../assets/Anastesiology/pressurelines.png";
import image2 from "../../assets/Anastesiology/presseurtransducer.jpg";
import image3 from "../../assets/Anastesiology/hmefilter.png";
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

const DepartmentPage = ({ name, image, buttonImages }) => {
  const [selected, setSelected] = useState("BL");

  const cards = [
    //BL
    {
      id: 1,
      image: image1,
      text: "Pressure Monitoring Lines",
      url: "https://www.bllifesciences.com/products/invasive-pressure-system/",
    },
    {
      id: 2,
      image: image2,
      text: "Disposable pressure transducer",
      url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 3,
      image: image3,
      text: "HME filter",
      url: "https://www.bllifesciences.com/products/anesthesia-and-critical-care/",
    },
    {
      id: 4,
      image: image4,
      text: "Inter phase cable suit with your monitor",
      // url: "https://www.bllifesciences.com/products/interventional-systems/",  //could not find link
    },
    {
      id: 5,
      image: image5,
      text: "3 way with extension -10cm, 25/50cm",
      url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 6,
      image: "/Cardiology/IVset.png",
      text: "IV SET VENTED",
      url: "https://bllifesciences.com/wp-content/uploads/2022/08/BL-Lifesciences.pdf",
    },
    {
      id: 7,
      image: image7,
      text: "1 Lumen CVP CATH",
      url: "https://www.bllifesciences.com/products/central-venous-catheters/",
    },
    {
      id: 8,
      image: image8,
      text: "ADULT EXPANDABLE CIRCUIT",
      url: "https://www.bllifesciences.com/products/anesthesia-and-critical-care/",
    },
    {
      id: 9,
      image: image9,
      text: "Lung Exerciser",
      url: "https://www.bllifesciences.com/products/anesthesia-and-critical-care/",
    },
  ];
  const cards1 = [
    //VENTICARE
    {
      id: 1,
      image: image11,
      text: "Adult Nebulizer Mask Kit (3026)",
      url: "https://venticaremedicalinc.com/products/",
    },
    {
      id: 2,
      image: image12,
      text: "VENTILATOR CIRCUIT PLAIN ADULT",
      url: "https://venticaremedicalinc.com/products/",
    },
  ];
  const cards2 = [
    //COCOON
    {
      id: 1,
      image: image10,
      text: "Warming Blankets",
      url: "https://www.careessentials.com.au/product-category/warming-blankets-warming-machines/?category-list=warming-blankets",
    },
  ];
  const cards3 = [                     //not able to find it
    //AERO
    {
      id: 1,
      image: image16,
      text: "ADULT BAINS CIRCUIT-AERO (2001)",            
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 2,
      image: image17,
      text: "ADULT BREATHING CIRCUIT-EXPANDABLE (1010-E)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 3,
      image: image18,
      text: "ADULT BREATHING CIRCUIT EXP.WITH EXTRA LIMB &CONCTR (1010-01-E)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 4,
      image: image19,
      text: "ADULT BREATHING CIRCUIT-WHITE (REF:1010)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 5,
      image: image20,
      text: "Adult Double Water Trap Ventilator Circuit (REF:1012)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 6,
      image: image21,
      text: "BVL FILTER AERO (2010)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },

    {
      id: 7,
      image: image22,
      text: "CPAP CIRCUIT (SMOOTH BORE TUBING) 1.8 MTR (4000)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 8,
      image: image23,
      text: "Cpap Circuit with Mask and Harness-Adult",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 9,
      image: image24,
      text: "PAEDIATRIC BAIN CIRCUIT-JACKSON REES (2002)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 10,
      image: image25,
      text: "PEADIATRIC BREATHING CIRUIT (1020)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 11,
      image: image26,
      text: "T- CONNECTOR (1500)",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
  ];
  const cards4 = [
    //PORTEX
    {
      id: 1,
      image: image27,
      text: "Bougie (Adult) ",
      url: "https://www.medis-medical.com/products/flexo-guide",
    },
  ];
  const cards5 = [
    //RUSCH
    {
      id: 1,
      image: image13,
      text: "Bronchial Double Lumen Tube",
      url: "https://www.teleflex.com/emea/en/product-areas/anaesthesia/airway-management/double-lumen-tubes/index.html",
    },
    {
      id: 2,
      image: image14,
      text: "Cuff measuring meter for E.T.Tube",
      url: "https://us.myteleflex.com/en/USD/All-Categories/Anesthesia/Airway/Intubation-Accessories/Ru%CC%88sch%C2%AE-Endotest%E2%84%A2-Cuff-Pressure-Manometer/p/endotest",
    },
    {
      id: 3,
      image: image15,
      text: "Nasopharyngeal Air way 28,30,34",
      url: "https://www.teleflex.com/usa/en/product-areas/anesthesia/airway-management/oral-and-nasal-airways/nasal-airways/index.html",
    },
  ];
  const cards6 = [
    //MEDISAFE
    {
      id: 1,
      image: image28,
      text: "Laryngoscope with 4 blades -Fiberoptic",
      url: "https://www.medisaferesuscitators.com/search.html?ss=Laryngoscope+with+4+blades+-Fiberoptic",
    },
  ];
  const cards7 = [
    //SURETECH
    {
      id: 1,
      image: image29,
      text: "INTRODUCER NEEDLE 18 Gx7CM",
      url: "https://www.exportersindia.com/suretech-medical-inc/products.htm",
    },
  ];
  const cards8 = [
    //MEDITECH
    {
      id: 1,
      image: image30,
      text: "BougieInroducer -Adult, Coudé Tip-15 FR x 70 cm",
      url: "https://www.meditechsystems.co.uk/product/bougie-coude-tip-introducers/",
    },
    {
      id: 2,
      image: image31,
      text: "BougieInroducer -Pediatric, Coudé Tip-10 FR x 70 cm",
      url: "https://www.meditechsystems.co.uk/product/bougie-coude-tip-introducers/",
    },
    {
      id: 3,
      image: image32,
      text: "Adult Ported Introducer-15 FR x 70 cm",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 4,
      image: image33,
      text: "Pediatric Ported Introducer-10 FR x 70 cm",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 5,
      image: image34,
      text: "Neonatal Stylette (2.0mm)-6 FR x 255 mm",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 6,
      image: image35,
      text: "Pediatric Stylette (3.0mm)-8FR x 300 mm",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },

    {
      id: 7,
      image: image36,
      text: "Adult Stylette (4.0mm)-10 FR x 335 mm",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 8,
      image: image37,
      text: "Adult Malleable Introducer-15 FR x 70 cm",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 9,
      image: image38,
      text: "Sterile Adult Al Stylette-9FR x 16",
      //url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
    },
    {
      id: 10,
      image: image39,
      text: "Wendl Nasopharyngeal Airways (Silicone)12 Fr-  3/4.0mm",
      url: "https://www.meditechsystems.co.uk/product-category/airway-management/oxygen-and-aerosol-therapy/resuscitation-kits-and-nasophranageal/",
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
      <div
        className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundColor: "rgba(255, 255, 255, 0)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div
          className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
          //add bg image
        >
        <div className=" sm:mt-40">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
              <h2 className="z-20 text-4xl sm:text-6xl font-bold text-left flex-1">
                {name}
              </h2>
              {/* <img
              src={heart}
              alt={name}
              className="absolute -top-20 -right-4 opacity-70  transform -rotate-45 w-4/5 sm:w-3/5 lg:w-1/3 rounded-3xl shadow-2xl z-0"
            /> */}
            </div>

            {/* Buttons for BL and Insightra */}
          <div className="grid relative  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
            {buttonImages.map(({ src, alt, id }) => (
             <button
          key={id}
           onClick={() => setSelected(id)}
            className={`p-3 font-bold rounded-full text-black w-1/2 sm:w-3/4 lg:w-1/2 mx-14 h-14 border border-black flex justify-center items-center ${
           selected === id ? "bg-gray-500 text-white border-gray-500" : "bg-white"
         }` }
           >
                <img src={src} alt={alt} className="h-12 w-auto" />
              </button>
            ))}
          </div>

            {/* Conditionally Rendered Content */}
            <div className="flex z-50 flex-col justify-center items-center mt-6">
              {selected === "Venticare" && (
                <>
                  <img
                    src={Venticare}
                    alt="Venticare"
                    className="h-30 w-auto m-10"
                  />
                        <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                    Hico specializes in temperature management solutions in
                    anesthesiology, offering advanced warming and cooling
                    systems. Their devices help maintain patient normothermia
                    during surgeries, reducing the risk of hypothermia-related
                    complications. Hico’s solutions enhance patient safety and
                    recovery in operating rooms and intensive care settings.
                  </p>
                </>
              )}
              {selected === "Cocoon" && (
                <>
                  <img
                    src={Cocoon}
                    alt="Cocoon"
                    className="h-20 w-80 flex m-10"
                  />
                        <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                    Cocoon specializes in patient warming solutions for
                    anesthesiology, helping to maintain normothermia during
                    surgeries. Their advanced warming blankets and systems
                    prevent hypothermia, improving patient safety and recovery
                    outcomes. Cocoon’s products are widely used in operating
                    rooms and intensive care units for effective thermal
                    management.
                  </p>
                </>
              )}
              {selected === "BL" && (
                <>
                  <img src={BL} alt="BL" className="h-40 w-auto flex m-10" />
                       <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                    BL Lifesciences contributes to anesthesiology by providing
                    advanced anesthesia delivery systems, breathing circuits,
                    and airway management solutions. Their products ensure
                    precise gas delivery, patient safety, and optimal
                    ventilation during surgical procedures. BL Lifesciences also
                    offers high-quality monitoring accessories to enhance
                    anesthesia care.
                  </p>
                </>
              )}
              {selected === "Meditech" && (
                <>
                  <img
                    src={Meditec}
                    alt="Meditech"
                    className="h-20 w-80 flex m-10"
                  />
                       <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                    Meditech is a private company specializing in representing
                    medical device manufacturers. Since 1979, they have
                    exclusively represented innovative solutions for the
                    hospital industry, providing equipment and instruments that
                    enhance patient safety and clinical outcomes.
                  </p>
                </>
              )}
              {selected === "Aero" && (
                <>
                  <img src={Aero} alt="Aero" className="h-20 w-80 flex m-10" />
                        <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                    AERO is a medical equipment manufacturer specializing in
                    anesthesia and respiratory care solutions. They provide
                    high-quality breathing circuits, ventilator accessories, and
                    CPAP systems for hospitals and clinics. Their products
                    ensure efficient and safe patient care in anesthesiology and
                    critical care settings.
                  </p>
                </>
              )}
              {selected === "Portex" && (
                <>
                  <img
                    src={Portex}
                    alt="Portex"
                    className="h-20 w-80 flex m-10"
                  />
                        <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                    Portex, a brand under ICU Medical, specializes in
                    manufacturing anesthesia and respiratory care products.
                    Their offerings include epidural catheters, anesthesia
                    breathing circuits, and spinal anesthesia trays, all
                    designed to meet the specific needs of anesthesia
                    departments.
                  </p>
                </>
              )}
              {selected === "Medisafe" && (
                <>
                  <img
                    src={Medisafe}
                    alt="Medisafe"
                    className="h-40 w-auto flex m-10"
                  />
                     <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                    Medisafe International is a leading manufacturer and
                    supplier of high-quality medical equipment, specializing in
                    anesthesia, critical care, and surgical instruments. The
                    company is known for its precision-engineered fiber optic
                    laryngoscopes, breathing circuits, and resuscitation
                    devices. With a focus on innovation and reliability,
                    Medisafe ensures superior patient safety and healthcare
                    efficiency.
                  </p>
                </>
              )}
              {selected === "Suretech" && (
                <>
                  <img
                    src={Suretech}
                    alt="Suretech"
                    className="h-50 w-auto flex m-10"
                  />
                     <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                    Suretech Medical Inc is a leading manufacturer and supplier
                    of high-quality medical devices, specializing in cardiology,
                    anesthesia, and critical care products. Their range includes
                    introducer needles, vascular access devices, and surgical
                    instruments designed for precision and patient safety. With
                    a strong commitment to innovation and quality, Suretech
                    serves hospitals and healthcare providers worldwide.
                  </p>
                </>
              )}
              {selected === "Rusch" && (
                <>
                  <img
                    src={Rusch}
                    alt="Rusch"
                    className="h-20 w-80 flex m-10"
                  />
                        <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                    RÜSCH is a medical device company specializing in urology,
                    anesthesia, and surgical products, known for its
                    high-quality catheters and airway management solutions. It
                    is a subsidiary of Teleflex, a global provider of medical
                    technologies.
                  </p>
                </>
              )}
            </div>

            <div className="flex mb-20 text-4xl font-bold justify-center items-center">
              Range of products
            </div>

            {/* Hover Cards (Conditionally Rendered) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-20 gap-28 sm:m-4 sm:gap-20 m-10 lg:p-20">
              {selected === "BL" &&
                cards.map((card) => (
                  <a
                    key={card.id}
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <motion.div
                      className="relative group h-60 w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={card.image}
                        alt={`Card ${card.text}`}
                        className="w-full h-full object-cover transition duration-300 transform group-hover:brightness-50"
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-white text-3xl text-center font-bold">
                          {card.text}
                        </span>
                      </motion.div>
                    </motion.div>
                    <p className="flex justify-center text-gray-800 text-2xl p-6 text-center font-semibold">
                      {card.text}
                    </p>
                  </a>
                ))}
              {selected === "Venticare" &&
                cards1.map((card) => (
                  <a
                    key={card.id}
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <motion.div
                      className="relative group h-60 w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={card.image}
                        alt={`Card ${card.text}`}
                        className="w-full h-full object-cover transition duration-300 transform group-hover:brightness-50"
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-white text-3xl text-center font-bold">
                          {card.text}
                        </span>
                      </motion.div>
                    </motion.div>
                    <p className="flex justify-center text-gray-800 text-2xl p-6 text-center font-semibold">
                      {card.text}
                    </p>
                  </a>
                ))}

              {selected === "Cocoon" &&
                cards2.map((card) => (
                  <a
                    key={card.id}
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <motion.div
                      className="relative group h-60 w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={card.image}
                        alt={`Card ${card.text}`}
                        className="w-full h-full object-cover transition duration-300 transform group-hover:brightness-50"
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-white text-3xl text-center font-bold">
                          {card.text}
                        </span>
                      </motion.div>
                    </motion.div>
                    <p className="flex justify-center text-gray-800 text-2xl p-6 text-center font-semibold">
                      {card.text}
                    </p>
                  </a>
                ))}
              {selected === "Aero" &&
                cards3.map((card) => (
                  <a
                    key={card.id}
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <motion.div
                      className="relative group h-60 w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={card.image}
                        alt={`Card ${card.text}`}
                        className="w-full h-full object-cover transition duration-300 transform group-hover:brightness-50"
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-white text-3xl text-center font-bold">
                          {card.text}
                        </span>
                      </motion.div>
                    </motion.div>
                    <p className="flex justify-center text-gray-800 text-2xl p-6 text-center font-semibold">
                      {card.text}
                    </p>
                  </a>
                ))}
              {selected === "Portex" &&
                cards4.map((card) => (
                  <a
                    key={card.id}
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <motion.div
                      className="relative group h-60 w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={card.image}
                        alt={`Card ${card.text}`}
                        className="w-full h-full object-cover transition duration-300 transform group-hover:brightness-50"
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-white text-3xl text-center font-bold">
                          {card.text}
                        </span>
                      </motion.div>
                    </motion.div>
                    <p className="flex justify-center text-gray-800 text-2xl p-6 text-center font-semibold">
                      {card.text}
                    </p>
                  </a>
                ))}

              {selected === "Rusch" &&
                cards5.map((card) => (
                  <a
                    key={card.id}
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <motion.div
                      className="relative group h-60 w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={card.image}
                        alt={`Card ${card.text}`}
                        className="w-full h-full object-cover transition duration-300 transform group-hover:brightness-50"
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-white text-3xl text-center font-bold">
                          {card.text}
                        </span>
                      </motion.div>
                    </motion.div>
                    <p className="flex justify-center text-gray-800 text-2xl p-6 text-center font-semibold">
                      {card.text}
                    </p>
                  </a>
                ))}
              {selected === "Medisafe" &&
                cards6.map((card) => (
                  <a
                    key={card.id}
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <motion.div
                      className="relative group h-60 w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={card.image}
                        alt={`Card ${card.text}`}
                        className="w-full h-full object-cover transition duration-300 transform group-hover:brightness-50"
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-white text-3xl text-center font-bold">
                          {card.text}
                        </span>
                      </motion.div>
                    </motion.div>
                    <p className="flex justify-center text-gray-800 text-2xl p-6 text-center font-semibold">
                      {card.text}
                    </p>
                  </a>
                ))}
              {selected === "Suretech" &&
                cards7.map((card) => (
                  <a
                    key={card.id}
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <motion.div
                      className="relative group h-60 w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={card.image}
                        alt={`Card ${card.text}`}
                        className="w-full h-full object-cover transition duration-300 transform group-hover:brightness-50"
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-white text-3xl text-center font-bold">
                          {card.text}
                        </span>
                      </motion.div>
                    </motion.div>
                    <p className="flex justify-center text-gray-800 text-2xl p-6 text-center font-semibold">
                      {card.text}
                    </p>
                  </a>
                ))}
              {selected === "Meditech" &&
                cards8.map((card) => (
                  <a
                    key={card.id}
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <motion.div
                      className="relative group h-60 w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={card.image}
                        alt={`Card ${card.text}`}
                        className="w-full h-full object-cover transition duration-300 transform group-hover:brightness-50"
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-white text-3xl text-center font-bold">
                          {card.text}
                        </span>
                      </motion.div>
                    </motion.div>
                    <p className="flex justify-center text-gray-800 text-2xl p-6 text-center font-semibold">
                      {card.text}
                    </p>
                  </a>
                ))}
            </div>
          </div>

          {/* conditionally rendered read more */}
          <div className="flex justify-center mt-10 mb-14">
          {selected === "BL" && (
            <>
              <a
                href="https://www.bllifesciences.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 my-20 rounded-3xl border font-bold hover:border-black border-blue-700"
              >
                Read More
              </a>
            </>
          )}

          {selected === "Venticare" && (
            <>
              <a
                href="https://venticaremedicalinc.com/products/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 my-20 rounded-3xl border font-bold hover:border-black border-blue-700 "
              >
                Read More
              </a>
            </>
          )}
          {selected === "Meditech" && (
            <>
              <a
                href="https://meditecdevices.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 my-20 rounded-3xl border font-bold hover:border-black border-blue-700flex justify-center "
              >
                Read More
              </a>
            </>
          )}
          {selected === "Cocoon" && (
            <>
              <a
                href="https://www.careessentials.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 my-20 rounded-3xl border font-bold hover:border-black border-blue-700"
              >
                Read More
              </a>
            </>
          )}
          {selected === "Aero" && (
            <>
              <a
                href="https://aerohealthcare.com/us/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 my-20 rounded-3xl border font-bold hover:border-black border-blue-700 "
              >
               Read More
              </a>
            </>
          )}
          {selected === "Portex" && (
            <>
              <a
                //href="https://www.southwestmedical.com/brands/portex-smiths-medical"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 my-20 rounded-3xl border font-bold hover:border-black border-blue-700"
              >
                Read More
              </a>
            </>
          )}
          {selected === "Rusch" && (
            <>
              <a
                href="https://www.acsmedical.com/brands/rusch"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 my-20 rounded-3xl border font-bold hover:border-black border-blue-700 "
              >
                Read More
              </a>
            </>
          )}
          {selected === "Medisafe" && (
            <>
              <a
                href="https://www.medisaferesuscitators.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 my-20 rounded-3xl border font-bold hover:border-black border-blue-700"
              >
                Read More
              </a>
            </>
          )}
          {selected === "SURETECH" && (
            <>
              <a
                href="https://aerohealthcare.com/us/" //site not working
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 my-20 rounded-3xl border font-bold hover:border-black border-blue-700 "
              >
                Read More
              </a>
            </>
          )}
        </div>
        </div>
        <DepNav />
        <Footer />
      </div>
          </div>
    </>
  );
};

export default function Anesthesiology() {
  const buttonImages = [
    { id: "BL", src: BL, alt: "BL Lifesciences" },
    { id: "Venticare", src: Venticare, alt: "Venticare" },
    { id: "Cocoon", src: Cocoon, alt: "Cocoon" },
    { id: "Meditech", src: Meditec, alt: "Meditech" },
    { id: "Aero", src: Aero, alt: "Aero" },
    { id: "Portex", src: Portex, alt: "Portex" },
    { id: "Rusch", src: Rusch, alt: "Rusch" },
    { id: "Medisafe", src: Medisafe, alt: "Medisafe" },
    { id: "Suretech", src: Suretech, alt: "Suretech" },
  ];

  return <DepartmentPage name="ANESTHESIOLOGY" buttonImages={buttonImages} />;
}
