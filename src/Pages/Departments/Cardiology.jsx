import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import BL from "../../assets/BLLifsciences.png";

import { motion } from "framer-motion";

import Insightra from "../../assets/insightra.png";
import bg from "../../assets/depBG.png";
import heart from "../../assets/heart.png";
import DepNav from "../../Components/DepNav";
import image4 from "../../assets/Anastesiology/cables.png";
import cable from "../../assets/Cablecatalogue.pdf";


const DepartmentPage = ({ name, buttonImages }) => {
  const [selected, setSelected] = useState("BL");

  const cards = [
    {
      id: 1,
      image: "/Cardiology/transducer.png",
      text: "Disposable Transducer",
      url: "https://www.bllifesciences.com/products/invasive-pressure-system/",
    },
    {
      id: 2,
      image: "/Cardiology/PTCA.png",
      text: "PTCA Kit",
      url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 3,
      image: "/Cardiology/control.png",
      text: "Control Syringe",
      url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 4,
      image: "/Cardiology/needle.png",
      text: "Needle",
      url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 5,
      image: "/Cardiology/highpress.png",
      text: "High Pressure Tubing",
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
      image: "/Cardiology/inflation.png",
      text: "Inflation Device",
      url: "https://www.bllifesciences.com/wp-content/uploads/2022/06/24_IFU_Inflation_device.pdf",
    },
    {
      id: 8,
      image: "/Cardiology/manifold.png",
      text: "Manifold",
      url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    // {
    //   id: 9,
    //   image: "/Cardiology/jns.png",
    //   text: "J & Straight",
    //   url: "https://www.bllifesciences.com/products/interventional-systems/",
    // },
    {
      id: 10,
      image: "/Cardiology/guideware.png",
      text: "Guide Ware",
      url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 11,
      image: image4,
      text: "BL Transducer Interface Cable",
      url: cable
    },
    {
      id: 12,
      image: "/Cardiology/act.png",
      text: "ACT Tube",
      url: "https://www.helena.com/actalykemini2.htm",
    },
    {
      id: 13,
      image: "/Cardiology/pressmon.png",
      text: "Pressure Monitoring Line",
      url: "https://www.bllifesciences.com/products/invasive-pressure-system/",
    },
    {
      id: 14,
      image: "/Cardiology/flowreg.png",
      text: "Flow Regulator",
      url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 15,
      image: "/Cardiology/snare.png",
      text: "Snare Kit",
      url: "https://www.argonmedical.com/product/atrieve-vascular-snare-kit/",
    },
    {
      id: 16,
      image: "/Cardiology/infusion.png",
      text: "Cuff clean pressure infusion bag",
      url: "https://www.medzell.net/company/bl-lifesciences/",
    },
    {
      id: 17,
      image: "/Cardiology/reuse.png",
      text: "Medex Reusable Pressure Infusor",
      url: "https://www.icumed.com/products/hemodynamic-monitoring/blood-pressure-monitoring/pressure-infusors/medex-clear-cuff-pressure-bag/",
    },
    // {
    //   id: 18,
    //   image: "/Cardiology/mask.png",
    //   text: "CPAP/BIPAP Mask",
    //   url: "https://www.bllifesciences.com/",
    // },
    {
      id: 19,
      image: "/Cardiology/hemostat.png",
      text: "Haemostasis valve",
      url: "https://meritoem.com/product-category/valves/hemostasis-valves/#:~:text=Merit%20Medical's%20hemostasis%20valves%20and,during%20interventional%20and%20diagnostic%20procedures.",
    },
    {
      id: 20,
      image: "/Cardiology/prelude.png",
      text: "Prelude Femoral Sheath",
      url: "https://www.merit.com/product/prelude-pro-sheath-introducers/",
    },
  ];

  const cards1 = [
    {
      id: 1,
      image: "/Cardiology/IABP.png",
      text: "IABP",
      url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf",
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
      ><div className="relative  z-50">
            <Navbar />
          </div>
      <div className=" sm:mt-40">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
              <h2 className="z-20 text-5xl sm:text-6xl font-bold text-left flex-1">
                {name}
              </h2>
            {/* <img
              //src={heart}
              alt={name}
              className="absolute -top-20 -right-4 opacity-70  transform -rotate-45 w-4/5 sm:w-3/5 lg:w-1/3 rounded-3xl shadow-2xl z-0"
            /> */}
          </div>

          {/* Buttons for BL and Insightra */}
            <div className="grid relative grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8">
            {buttonImages.map(({ src, alt, id }) => (
             <button
          key={id}
           onClick={() => setSelected(id)}
            className={`p-4 font-bold rounded-full text-black w-1/2 sm:w-3/4 lg:w-1/2 mx-14 h-14 border border-black flex justify-center items-center ${
           selected === id ? "bg-gray-500 text-white border-gray-500" : "bg-white"
         }` }
           >
                <img src={src} alt={alt} className="h-12  w-auto" />
              </button>
            ))}
          </div>

          {/* Conditionally Rendered Content */}
          <div className="flex z-50 flex-col justify-center items-center mt-6">
            {selected === "BL" && (
              <>
                <img
                  src={BL}
                  alt="BL Lifesciences"
                  className="h-40 w-auto m-10"
                />
                  <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                  Customized Cath lab Procedure Packs are available as per
                  user-defined requirements and specifications.
                </p>
              </>
            )}
            {selected === "Insightra" && (
              <>
                <img
                  src={Insightra}
                  alt="Insightra"
                  className="h-20 w-80 flex m-10"
                />
                 <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                  The Insightra Ultra 7Fr catheter allows common fluid-filled
                  technology in a smaller catheter with no compromise on lumen
                  size.
                </p>
              </>
            )}
          </div>

          <div className="flex mt-10 text-4xl font-bold justify-center items-center">
            Range of products
          </div>

          {/* Hover Cards (Conditionally Rendered) */}
        <div className="container mx-auto my-10 px-4 py-4">
                     <div className="grid grid-cols-1 sm:grid-cols-2 sm:mt-20 sm:mb-20 lg:grid-cols-3 my-20 gap-28 sm:m-4 sm:gap-20 m-10 lg:p-20">
            {selected === "BL" &&
              cards.map((card) => (
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

            {selected === "Insightra" &&
              cards1.map((card) => (
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
        {/* conditionally rendered read more */}
        <div className="flex justify-center mt-10 mb-14">
        {selected === "BL" && (
          <>
            <a
              href="https://www.bllifesciences.com/"
              target="_blank"
              rel="noopener noreferrer"
             className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out"  >
              Read More
            </a>
          </>
        )}

        {selected === "Insightra" && (
          <>
            <a
              href="https://insightra.com/"
              target="_blank"
              rel="noopener noreferrer"
className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out"
            >
              Read More
            </a>
          </>
        )}
      </div>
      </div>
      <DepNav />
      <Footer />
    </>
  );
};

export default function Cardiology() {
  const buttonImages = [
    { id: "BL", src: BL, alt: "BL Lifesciences" },
    { id: "Insightra", src: Insightra, alt: "Insightra" },
  ];
  return <DepartmentPage name="CARDIOLOGY" buttonImages={buttonImages} />;
}
