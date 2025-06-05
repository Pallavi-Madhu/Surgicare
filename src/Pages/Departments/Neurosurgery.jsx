import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import departments from "../../Data/departments";
import DepNav from "../../Components/DepNav";
import { motion } from "framer-motion";
//dept images for button
import Mizuho from "../../assets/Mizuho.png";
import Kinamed from "../../assets/Kinamed.png";
import Baxter from "../../assets/Baxter.png";
import Halyard from "../../assets/Halyard.png";
import Sunoptic from "../../assets/Sunoptic.png";
import Syncromax from "../../assets/Syncromax.png";
import Cocoon from "../../assets/Cocoon.png";
import BL from "../../assets/BLLifsciences.png";
import Surgiwear from "../../assets/Surgiwear.png";

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

//Products-Halyard
import drapes from "../../assets/Orthopedic/Halyard/drapes.jpg";
import gowns from "../../assets/Orthopedic/Halyard/gowns.jpeg";
import masks from "../../assets/Orthopedic/Halyard/masks.jpg";

//product images Sunoptic
import light from "../../assets/Neuro/Sunoptic/light.jpg";

//product images Syncromax
import bovinepatch from "../../assets/Neuro/Syncromax/bovinepatch.jpg";

//product images Cocoon
import warmer from "../../assets/Neuro/Cocoon/warming.png";
import blanket from "../../assets/Neuro/Cocoon/blanket.jpg";

//Products-BL
import thoracic1 from "../../assets/GeneralSurgery/Bl/thoracic1.jpeg";
import thoracic2 from "../../assets/GeneralSurgery/Bl/thoracic2.jpg";
import chest1000ml from "../../assets/GeneralSurgery/Bl/chest1000ml.webp";
import suctionset from "../../assets/GeneralSurgery/Bl/suctionset.jpg";
import tipcleaner from "../../assets/GeneralSurgery/Bl/tipcleaner.webp";
import tipcleaner2_actual from "../../assets/GeneralSurgery/Bl/tipcleaner2_actual.webp";
import mister2 from "../../assets/GeneralSurgery/Bl/mister_blower.png";     
import surgiloop2 from "../../assets/GeneralSurgery/Bl/surgiloop.webp";
import cannula from "../../assets/GeneralSurgery/Bl/cannula.png";

//products-Surgiwear
import shunt from "../../assets/Neuro/Surgiwear/shunt.jpg";
import evd from "../../assets/Neuro/Surgiwear/evd.jpg";
import gpatch from "../../assets/Neuro/Surgiwear/gpatch.jpg";
import drape from "../../assets/Neuro/Surgiwear/drape.jpg";
import Carmdrape from "../../assets/Neuro/Surgiwear/Carmdrape.jpg";
import neuropatties from "../../assets/Neuro/Surgiwear/NEUROSURGICAL_patties.jpg";
import silicon from "../../assets/Neuro/Surgiwear/silicon_patties.jpg";
import bonecement from "../../assets/Neuro/Surgiwear/bonecement.jpg";


const DepartmentPage = ({ name, image, buttonImages }) => {
  const [selected, setSelected] = useState("Mizuho");

  const mizuhoCards = [
    {
      id: 1,
      image: clips,
      text: "Sugita Titanium Aneurysm Clip II (T2) &amp; Appliers:Sugita Titanium aneurysm Clip Ⅱ from Mizuho.",
      url:"http://www.mizuhomedical.co.jp/products/?id=1459223043-814215"
    },
    { id: 2, image: headholder,
      text: "Smart Fix Head Holder",
      url:"http://www.mizuhomedical.co.jp/products/?id=1461291666-642683" }
    ,
    { id: 3,
      image: dopplersystem,
      text: "Mizuho Vascular Doppler System",
      url:"http://www.mizuhomedical.co.jp/products/?id=1461299942-673127" },
  ];

  const kinamedCards = [
    {
      id: 1,
      image: screws,
      text: "NeuroPro® Rigid Fixation System",
      url:"https://www.kinamed.com/products/neurosurgical-products/neuropro-rigid-fixation-system"
    },
    {
      id: 2,
      image: screws2,
      text: "NeuroPro® Low Profile Rigid Fixation System",
      url:"https://www.kinamed.com/products/neurosurgical-products/neuropro-low-profile-rigid-fixation-system"
    },
  ];

  const baxterCards = [
    {
      id: 1,
      image: floseal,
      text: "Floseal",
      url:"https://ecatalog.baxter.com/ecatalog/loadproduct.html?cid=20016&lid=10001&hid=20001&pid=1472740"
    },
    {
      id: 2,
      image: hemopatch,
      text: "Hemopatch ",
      url:"https://advancedsurgery.baxter.eu/hemopatch"
    },
    {
      id: 3,
      image: tiseel,
      text: "Tisseel ",
      url:"https://www.baxter.com/healthcare-professionals/surgical-care/tisseel-fibrin-sealant"
    },
  ];

  const halyardCards = [
    {
        id: "drapes",
        image: drapes,
        text: "Surgical Drapes",
        url:"https://products.halyardhealth.com/products/surgical-solutions/surgical-drapes"
      },
      {
        id: "gowns",
        image: gowns,
        text: "Surgical Gowns",
        url:"https://products.halyardhealth.com/products/surgical-solutions/surgical-gowns"
      },
      {
        id: "masks",
        image: masks,
        text: "Surgical Masks",
        url:"https://products.halyardhealth.com/products/personal-protection/facial-respiratory-protection/medical-surgical-masks"
      },
  ]
  const sunopticCards = [
    {
      id: 1,
      image: light,
      text: "Sunoptic LX2 Battery Operated LED Headlight",
      url:"https://sunopticsurgical.com/products/ssl-lx2-led-best-in-class-portable-headlight/"
    },
  ];

  const syncromaxCards = [
    { id: 1,
      image: bovinepatch,
      text: "Bovine pericardial patch",
      url:"https://www.visionarymedtech.com/synkroscaff.html"
     },
  ];

  const cocoonCards = [
    { id: 1, image: blanket, text: "Cocoon Convective Warming Blankets",url:"https://www.careessentials.com.au/product-category/warming-blankets-warming-machines/warming-blankets/" },
    { id: 2, image: warmer, text: "Cocoon Convective Warming System",url:"https://www.careessentials.com.au/product/cws-5000/" },
  ];

  const blCards = [
    {
      id: "1",
      image: thoracic1,
      text: "THORACIC DRAINAGE CATHETER 12,20,24,28,32FR",
      url:"https://www.bllifesciences.com/products/surgical-innovations/"
    },
    {
      id: "2",
      image: thoracic2,
      text: "THORACIC DRAINAGE CATHETER 24,28,32,36'FR ANGLED",
      url:"https://www.bllifesciences.com/products/surgical-innovations/"
    },
    {
      id: "3",
      image: chest1000ml,
      text: "CHEST DRAIN.SYSTEM-2000ML",
      url:"https://sinapibiomedical.com/"
    },
    {
      id: "4",
      image: suctionset,
      text: "YANKUR SUCTION SET.- STANDARD TIP",
      url:"https://www.bllifesciences.com/products/surgical-innovations/"
    },
    {
      id: "5",
      image: tipcleaner,
      text: "CAUTERY TIP CLEANER",
      url:"https://www.bllifesciences.com/products/surgical-innovations/"
    },
    {
      id: "6",
      image: tipcleaner2_actual,
      text: "CAUTERY TIP  PENCIL WITH CLEANER ",
      url:"https://www.bllifesciences.com/products/surgical-innovations/"
    },
    {
      id: "7",
      image: mister2,
      image: "CARDIAC MISTER BLOWER WITH EXTENSION",
      url:"https://www.bllifesciences.com/products/customised-perfusion-system/"
    },
    {
      id: "8",
      image: surgiloop2,
      text: "Surgi I Loop Mini/Maxi ( Yellow/Blue/Red/White)",
      url:"https://www.minogue-med.com/product/aspen-surgical-vessel-loops-maxi-blue/"
    },
    {
      id: "9",
      image: cannula,
      text: "Vessel Cannula Transparant Flexible 5C",  //could  not find link
    },
  ];

  const surgiCards = [
    {
      id:"1",
      image:shunt,
      text:"Chhabra Slit n Spring Hydrocephalus Shunt system",
      url:"https://surgiwear.co.in/product/chhabra-slit-n-spring-hydrocephalus-shunt-system-va/"
    },
    {
      id:"2",
      image:evd,
      text:"EVD",
      //url:"https://surgiwear.co.in/product/chhabra-slit-n-spring-hydrocephalus-shunt-system-va/"
    },
    {
      id:"3",
      image:gpatch,
      text:"Gpatch",
      //url:"https://surgiwear.co.in/product/chhabra-slit-n-spring-hydrocephalus-shunt-system-va/"
    },
    {
      id:"4",
      image:drape,
      text:"O-spope Drape",
      url:"https://surgiwear.co.in/product/chhabra-slit-n-spring-hydrocephalus-shunt-system-va/"
    },
    {
      id:"5",
      image: Carmdrape,
      text:"C arm cover",
      url:"https://surgiwear.co.in/?product_cat=0&s=C+arm+cover&post_type=product"
    },
    {
      id:"6",
      image: neuropatties,
      text:"Neurosurgical patties",
      url:"https://surgiwear.co.in/?product_cat=0&s=neurosurgical+patties&post_type=product"
    },
    {
      id:"7",
      image:silicon,
      text:"Silicon patties",
      url:"https://surgiwear.co.in/?product_cat=0&s=silicon+patties&post_type=product"
    },
    {
      id:"8",
      image:bonecement,
      text:"Bone Cement",
      url:"https://surgiwear.co.in/?product_cat=0&s=bone+cement&post_type=product"
    }

  ]

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
        <div className="mt-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
            <h2 className="text-6xl font-bold text-left flex-1">{name}</h2>
           
          </div>

          {/* Buttons */}
       <div className="z-0 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 p-10">
            {buttonImages.map(({ label, id }) => (
          <button
          key={id}
           onClick={() => setSelected(id)}
            className={`p-2 font-bold rounded-3xl text-black w-3/4 mx-14 h-14 border border-black flex justify-center items-center ${
           selected === id ? "bg-gray-500 text-white border-gray-500" : "bg-white"
         }` }
           >
              {label}
            </button>
            ))}
          </div>

          {/* Conditionally Rendered Content */}
          <div className="flex flex-col justify-center items-center mt-6">
            {selected === "Mizuho" && (
              <>
                <img src={Mizuho} alt="Mizuho" className="h-30 w-auto" />
                 <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
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
                <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                  Kinamed Inc USA designs and manufactures Implantables and
                  Instruments for Neurosurgery. BL promotes the NeuroPro® Low
                  Profile Rigid Fixation System across the country.
                </p>
              </>
            )}
            {selected === "Baxter" && (
              <>
                <img src={Baxter} alt="Baxter" className="h-30 w-auto" />
                <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
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
                <img src={Halyard} alt="Halyard" className="h-30 w-auto" />
  <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
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
                <img src={Sunoptic} alt="Sunoptic" className="h-30 w-auto" />
       <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
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
                <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                  Mizuho is a global leader in the field of neurosurgery. All
                  the products being being produced in Japan, they are
                  particularly well known for their “Sugita Aneurysm Clips”,
                  which are marketing with high reputation around the world.
                </p>
              </>
            )}
            {selected === "Cocoon" && (
              <>
                <img src={Cocoon} alt="Cocoon" className="h-30 w-auto" />
                 <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
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
                <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                  Mizuho is a global leader in the field of neurosurgery. All
                  the products being being produced in Japan, they are
                  particularly well known for their “Sugita Aneurysm Clips”,
                  which are marketing with high reputation around the world.
                </p>
              </>
            )}
            {selected === "Surgiwear" && (
              <>
                <img
                  src={Surgiwear}
                  alt="Surgiwear"
                  className="h-20 w-80 flex m-10"
                />
              <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                  Surgiwear has made significant contributions to neurosurgery 
                  by developing a comprehensive range of innovative and cost-effective medical devices. 
                  Notably, their Chhabra Slit n Spring Hydrocephalus Shunt system is widely 
                  used globally, treating nearly a quarter of the world's hydrocephalus patients.
                  Additionally, Surgiwear offers products such as CSF drainage kits, cranial 
                  fixation systems, and cerebral reservoirs, all adhering to international 
                  quality standards like ISO 13485 and CE certifications, thereby enhancing neurosurgical care worldwide.
                </p>
              </>
            )}
          </div>
          <div className="flex mt-10  text-5xl font-bold justify-center items-center">
            Range of products
          </div>

                 <div className="container mx-auto my-10 px-4 py-4">
                     <div className="grid grid-cols-1 sm:grid-cols-2 sm:mt-20 sm:mb-20 lg:grid-cols-3 my-20 gap-28 sm:m-4 sm:gap-20 m-10 lg:p-20">
              {selected === "Mizuho" &&
                mizuhoCards.map((card) => (
                <a key={card.id} href={card.url} className="no-underline">
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
                                                    <p className="flex justify-start text-gray-800 text-2xl p-6 text-center font-semibold">
                                                      {card.text}
                                                    </p>
                                                  </a>
                ))}

              {selected === "Kinamed" &&
                kinamedCards.map((card) => (
           <a key={card.id} href={card.url} className="no-underline">
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
                                               <p className="flex justify-start text-gray-800 text-2xl p-6 text-center font-semibold">
                                                 {card.text}
                                               </p>
                                             </a>
                ))}

              {selected === "Baxter" &&
                baxterCards.map((card) => (
              <a key={card.id} href={card.url} className="no-underline">
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
                                                  <p className="flex justify-start text-gray-800 text-2xl p-6 text-center font-semibold">
                                                    {card.text}
                                                  </p>
                                                </a>
                ))}

              {selected === "Halyard" &&
                halyardCards.map((card) => (
          <a key={card.id} href={card.url} className="no-underline">
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
                                              <p className="flex justify-start text-gray-800 text-2xl p-6 text-center font-semibold">
                                                {card.text}
                                              </p>
                                            </a>
                ))}
              {selected === "Sunoptic" &&
                sunopticCards.map((card) => (
            <a key={card.id} href={card.url} className="no-underline">
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
                                                <p className="flex justify-start text-gray-800 text-2xl p-6 text-center font-semibold">
                                                  {card.text}
                                                </p>
                                              </a>
                ))}
              {selected === "Syncromax" &&
                syncromaxCards.map((card) => (
            <a key={card.id} href={card.url} className="no-underline">
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
                                                <p className="flex justify-start text-gray-800 text-2xl p-6 text-center font-semibold">
                                                  {card.text}
                                                </p>
                                              </a>
                ))}
              {selected === "Cocoon" &&
                cocoonCards.map((card) => (
        <a key={card.id} href={card.url} className="no-underline">
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
                                            <p className="flex justify-start text-gray-800 text-2xl p-6 text-center font-semibold">
                                              {card.text}
                                            </p>
                                          </a>
                ))}
              {selected === "BL-OT" &&
                blCards.map((card) => (
             <a key={card.id} href={card.url} className="no-underline">
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
                                                 <p className="flex justify-start text-gray-800 text-2xl p-6 text-center font-semibold">
                                                   {card.text}
                                                 </p>
                                               </a>
                ))}
                {selected === "Surgiwear" &&
                surgiCards.map((card) => (
             <a key={card.id} href={card.url} className="no-underline">
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
                                                 <p className="flex justify-start text-gray-800 text-2xl p-6 text-center font-semibold">
                                                   {card.text}
                                                 </p>
                                               </a>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/*Read more*/}
      <div className="flex justify-center mt-10 mb-14">
      {selected === "Mizuho" && (
        <>
          <a
            href="http://www.mizuhomedical.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700 "
          >
            Read More
          </a>
        </>
      )}

      {selected === "Kinamed" && (
        <>
          <a
            href="https://www.kinamed.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700"
          >
            Read More
          </a>
        </>
      )}
      {selected === "Baxter" && (
        <>
          <a
            href="https://www.baxter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700 "
          >
            Read More
          </a>
        </>
      )}
      {selected === "Halyard" && (
        <>
          <a
            href="https://www.halyardhealth.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700"
          >
            Read More
          </a>
        </>
      )}
      {selected === "Sunoptic" && (
        <>
          <a
            href="https://sunopticsurgical.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700"
          >
            Read More
          </a>
        </>
      )}
      {selected === "Syncromax" && (
        <>
          <a
            href="http://www.synkromax.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700 "
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
            className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700 "
          >
            Read More
          </a>
        </>
      )}
      {selected === "BL-OT" && (
        <>
          <a
            href="https://www.bllifesciences.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700"
          >
            Read More
          </a>
        </>
      )}
      {selected === "Surgiwear" && (
        <>
          <a
            href="https://surgiwear.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-black border-blue-700 "
          >
            Read More
          </a>
        </>
      )}
    </div>
      <DepNav />
      <Footer />
    </>
  );
};

export default function Cardiology() {
const buttonImages = [
  { id: "Mizuho", label: "Mizuho" },
  { id: "Kinamed", label: "Kinamed" },
  { id: "Baxter", label: "Baxter" },
  { id: "Halyard", label: "Halyard" },
  { id: "Sunoptic", label: "Sunoptic" },
  { id: "Syncromax", label: "Syncromax" },
  { id: "Cocoon", label: "Cocoon" },
  { id: "BL-OT", label: "BL-OT" },
  { id: "Surgiwear", label: "Surgiwear" },
];


  return (
    <DepartmentPage
      name="NEUROSURGERY"
      image="/src/assets/Mizuho.png"
      buttonImages={buttonImages}
    />
  );
}
