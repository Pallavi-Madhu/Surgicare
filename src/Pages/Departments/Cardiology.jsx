import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import BL from "../../assets/BL Lifsciences.png";

import Insightra from "../../assets/insightra.png";
import bg from "../../assets/depBG.png";
import heart from "../../assets/heart.png";
import DepNav from "../../Components/DepNav";

const DepartmentPage = ({ name, image, buttonImages }) => {
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
    {
      id: 9,
      image: "/Cardiology/jns.png",
      text: "J & Straight",
      url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 10,
      image: "/Cardiology/guideware.png",
      text: "Guide Ware",
      url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 11,
      image: "/Cardiology/transcab.png",
      text: "BL Transducer Interface Cable",
      url: "https://www.bllifesciences.com/products/interventional-systems/",
    },
    {
      id: 12,
      image: "/Cardiology/ACT.png",
      text: "ACT Tube",
      url: "https://www.bllifesciences.com/departments/cardiac-surgery/",
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
    { id: 15, image: "/Cardiology/snare.png", text: "Snare Kit", url: "" },
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
      url: "https://www.bllifesciences.com/",
    },
    {
      id: 18,
      image: "/Cardiology/mask.png",
      text: "CPAP/BIPAP Mask",
      url: "https://www.bllifesciences.com/",
    },
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
      <div>
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
        <div className="mt-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
            <h2 className="z-50 text-6xl font-bold text-left flex-1">{name}</h2>
            <img
              src={heart}
              alt={name}
              className="absolute -top-20 -right-4 opacity-70  transform -rotate-45 w-4/5 sm:w-3/5 lg:w-1/3 rounded-3xl shadow-2xl z-0"
            />
          </div>

          {/* Buttons for BL and Insightra */}
          <div className="grid relative z-50 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
            {buttonImages.map(({ src, alt, id }) => (
              <button
                key={id}
                onClick={() => setSelected(id)}
                className={`p-4 rounded-3xl text-white w-full h-14 border flex justify-center items-center border-black ${
                  selected === id ? "bg-blue-300" : "bg-white"
                }`}
              >
                <img src={src} alt={alt} className="h-12 w-auto" />
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
                <p className="text-center mt-4">
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
                <p className="text-center mt-4">
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
                  <div className="relative group h-60 w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={card.image}
                      alt={`Card ${card.id}`}
                      className="h-full w-full object-cover transition-opacity-90 duration-300 group-hover:opacity-0"
                    />
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-blue-500 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      {card.text}
                    </div>
                  </div>
                </a>
              ))}

            {selected === "Insightra" &&
              cards1.map((card) => (
                <a
                  key={card.id}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    key={card.id}
                    className="relative group h-48 w-full bg-gray-200 rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={card.image}
                      alt={`Card ${card.id}`}
                      className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-red-500 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      {card.text}
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>

        {/* conditionally rendered read more */}
        {selected === "BL" && (
          <>
            <a
              href="https://www.bllifesciences.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center "
            >
              <button className=" hover:bg-blue-300 hover:text-black text-blue-700 py-1 px-8 my-20 rounded-3xl border font-bold hover:border-black border-blue-700">
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
