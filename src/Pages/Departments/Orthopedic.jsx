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
import GPatch from "../../assets/Orthopedic/Surgiwear/GPatchFinal.png"
import bg from "../../assets/depBG.png";
import Baxter from "../../assets/Baxter.png"
import { motion } from "framer-motion";

const Departments = ({ name, image, buttonImages }) => {
  const [selected, setSelected] = useState("Halyard");

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
];
const surgiwearCards = [
  {
    id: 1,
    image: GBone,
    text: "G Bone",
    url:"https://surgiwear.co.in/product-category/orthopaedics/implants-orthopaedics/g-bone-modified-hydroxyapatite/"
  },
  {
    id: 2,
    image: GDress,
    text: "G Dress",
    url:"https://surgiwear.co.in/product-category/orthopaedics/disposable-orthopaedics/g-dress-disposable-orthopaedics/"
  },
  {
    id: 3,
    image: GPatch,
    text: "G Patch",
    url:"https://surgiwear.co.in/product-category/orthopaedics/implants-orthopaedics/g-patch-implants-orthopaedics/"
  }, 
];
const baxterCards = [
  {
    id: 1,
    image: "/hemopatch.png",
    text: "Hemopatch",
    url:"https://advancedsurgery.baxter.com.tr/en/hemopatch"
  },
  {
    id: 2,
    image: "/Ophthalmology/floseal.png",
    text: "Floseal",
    url:"https://advancedsurgery.baxter.com/floseal"
  },
{
      id: 3,
      image: "/Ophthalmology/Tiseel.jpg", // Change this to the correct image
      text: "Tiseel",
      url: "https://www.baxter.com/healthcare-professionals/surgical-care/tisseel-fibrin-sealant",
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
      {/* Orthopedic Page Content */}
        <div className=" sm:mt-40">
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
              <h2 className="z-20 text-5xl sm:text-6xl font-bold text-left flex-1">
                {name}
              </h2>  </div>

        {/* Buttons */}
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
          
        {/* Company Details */}
        <div className="flex flex-col justify-center items-center mt-6">
          {selected === "Halyard" && (
            <>
              <img src={Halyard} alt="Halyard" className="h-40 w-auto" />
             <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
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
              <img src={Surgiwear} alt="Surgiwear" className="h-42 w-auto" />
            <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                Surgiwear is an Indian medical device company specializing in
                surgical implants, infection control, and wound care products.
                They focus on innovation and quality to enhance patient safety
                and surgical outcomes.
              </p>
              <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
  Baxter plays a critical role in orthopedic surgery by offering advanced hemostatic solutions such as Hemopatch, Tisseel, and Floseal. These products aid in effective bleeding control and tissue sealing, enhancing surgical precision and reducing complication risks. Baxter’s innovations support improved patient outcomes and promote faster recovery in a wide range of orthopedic procedures.
</p>

            </>
          )}
          {selected === "Baxter" && (
            <>
              <img src={Baxter} alt="Surgiwear" className="h-42 w-auto" />
         
              <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
             Baxter plays a critical role in orthopedic surgery by offering advanced hemostatic solutions such as Hemopatch, Tisseel, and Floseal. These products aid in effective bleeding control and tissue sealing, enhancing surgical precision and reducing complication risks. Baxter’s innovations support improved patient outcomes and promote faster recovery in a wide range of orthopedic procedures.
           </p>

            </>
          )}
        </div>

        {/* Product Range Section */}
        <div className="flex mb-20 text-4xl font-bold justify-center items-center">
          Range of Products
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-20 gap-28 sm:m-4 sm:gap-20 m-10 lg:p-20">
            {selected === "Halyard" &&
              halyardCards.map((card) => (
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

            {selected === "Surgiwear" &&
              surgiwearCards.map((card) => (
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
              {selected === "Baxter" &&
              baxterCards.map((card) => (
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

        {/*Read more*/}
        <div className="flex justify-center mt-10 mb-14">
        {selected === "Halyard" && (
          <>
            <a
              href="https://www.halyardhealth.com/"
              target="_blank"
              rel="noopener noreferrer"
className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out"
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
        className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out"
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
        </div>
    </>
  );
};
export default function Orthopedic() {
  const buttonImages = [
    { id: "Halyard", src: Halyard, alt: "Halyard" },
    { id: "Surgiwear", src: Surgiwear, alt: "Surgiwear" },
     { id: "Baxter", src: Baxter, alt: "Baxter" },
  ]

return (
    <Departments
      name="ORTHOPEDIC"
      //image="/src/assets/Mizuho.png"
      buttonImages={buttonImages}
    />
  );
}
