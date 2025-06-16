import React, { useState,useEffect,useRef } from "react";
import Navbar2 from "../../Components/Navbar2";
import Footer from "../../Components/Footer";
import departments from "../../Data/departments";
import DepNav from "../../Components/DepNav";
//import { motion } from "framer-motion";
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
import pro from "../../assets/Neuro/Sunoptic/pro.png";

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
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Package2, Building, ChevronRight, Star, ShoppingCart, ArrowLeft,X } from 'lucide-react';
import Loading from "../../Components/Loading";

const NeuroSidebarDesign = () => {
  const [activeCompany, setActiveCompany] = useState("Mizuho");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


              const swipeAreaRef = useRef(null);
              const sidebarRef = useRef(null);
  

  const [loading, setLoading] = useState(true);
  
       useEffect(() => {
          setTimeout(() => setLoading(false), 4000); // 4 second delay
        }, []);
        
  if(loading) {
    return(
    <Loading department = "Neurosurgery"/>
    )
  }

  const companies = {
   Mizuho: {
  logo: Mizuho, 
  name: "Mizuho",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Leading provider of advanced neurosurgical instruments and vascular systems.",
  website: "http://www.mizuhomedical.co.jp/",
  established: "1919",
  headquarters: "Japan",
  products: [
    {
      id: 1,
      image: clips,
      name: "Sugita Titanium Aneurysm Clip II (T2) & Appliers",
      category: "Neurosurgery",
      description: "Sugita Titanium Aneurysm Clip II from Mizuho, designed for precise and safe aneurysm clipping.",
      url: "http://www.mizuhomedical.co.jp/products/?id=1459223043-814215"
    },
    {
      id: 2,
      image: headholder,
      name: "Smart Fix Head Holder",
      category: "Neurosurgery",
      description: "Stabilizes the patient's head during delicate neurosurgical procedures.",
      url: "http://www.mizuhomedical.co.jp/products/?id=1461291666-642683"
    },
    {
      id: 3,
      image: dopplersystem,
      name: "Mizuho Vascular Doppler System",
      category: "Vascular Monitoring",
      description: "Intraoperative Doppler system used to monitor blood flow during surgeries.",
      url: "http://www.mizuhomedical.co.jp/products/?id=1461299942-673127"
    }
  ]
},
Kinamed: {
  logo: Kinamed,
  name: "Kinamed",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Innovators in neurosurgical fixation and implant systems.",
  website: "https://www.kinamed.com/",
  established: "1987",
  headquarters: "USA",
  products: [
    {
      id: 1,
      image: screws,
      name: "NeuroPro® Rigid Fixation System",
      category: "Neurosurgery",
      description: "Provides rigid cranial fixation using titanium implants for precise stabilization.",
      url: "https://www.kinamed.com/products/neurosurgical-products/neuropro-rigid-fixation-system"
    },
    {
      id: 2,
      image: screws2,
      name: "NeuroPro® Low Profile Rigid Fixation System",
      category: "Neurosurgery",
      description: "Low profile version designed for enhanced comfort and minimal interference with soft tissue.",
      url: "https://www.kinamed.com/products/neurosurgical-products/neuropro-low-profile-rigid-fixation-system"
    }
  ]
},
Baxter: {
  logo: Baxter, 
  name: "Baxter",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Global leader in surgical care and advanced hemostatic solutions.",
  website: "https://advancedsurgery.baxter.com/",
  established: "1931",
  headquarters: "USA",
  products: [
    {
      id: 1,
      image: floseal,
      name: "Floseal",
      category: "Hemostatic Agent",
      description: "Advanced hemostatic matrix for rapid and effective bleeding control during surgery.",
      url: "https://advancedsurgery.baxter.com/floseal"
    },
    {
      id: 2,
      image: hemopatch,
      name: "Hemopatch",
      category: "Hemostatic Patch",
      description: "Sealing and hemostatic patch used to control bleeding on tissue surfaces.",
      url: "https://advancedsurgery.baxter.eu/hemopatch"
    },
    {
      id: 3,
      image: tiseel,
      name: "Tisseel",
      category: "Fibrin Sealant",
      description: "Two-component fibrin sealant used for hemostasis, sealing, and tissue adhesion.",
      url: "https://www.baxter.com/healthcare-professionals/surgical-care/tisseel-fibrin-sealant"
    }
  ]
},
Halyard: {
  logo: Halyard,
  name: "Halyard Health",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Provider of innovative solutions in infection prevention and surgical protection.",
  website: "https://products.halyardhealth.com/",
  established: "2014", 
  headquarters: "USA",
  products: [
    {
      id: "drapes",
      image: drapes,
      name: "Surgical Drapes",
      category: "Surgical Protection",
      description: "Drapes designed for optimal barrier protection during surgeries.",
      url: "https://products.halyardhealth.com/products/surgical-solutions/surgical-drapes"
    },
    {
      id: "gowns",
      image: gowns,
      name: "Surgical Gowns",
      category: "Surgical Protection",
      description: "Gowns providing critical protection and comfort for surgical staff.",
      url: "https://products.halyardhealth.com/products/surgical-solutions/surgical-gowns"
    },
    {
      id: "masks",
      image: masks,
      name: "Surgical Masks",
      category: "Facial & Respiratory Protection",
      description: "Medical and surgical masks designed for effective respiratory protection.",
      url: "https://products.halyardhealth.com/products/personal-protection/facial-respiratory-protection/medical-surgical-masks"
    }
  ]
},
Sunoptic: {
  logo: Sunoptic,
  name: "Sunoptic Surgical",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Industry leaders in surgical lighting and visualization solutions.",
  website: "https://sunopticsurgical.com/",
  established: "2001",
  headquarters: "USA",
  products: [
    {
      id: 1,
      image: light,
      name: "Sunoptic LX2 LED Headlight",
      category: "Surgical Lighting",
      description: "Battery-operated LED headlight designed for bright, focused surgical illumination.",
      url: "https://sunopticsurgical.com/products/ssl-lx2-led-best-in-class-portable-headlight/"
    },
    {
      id: 2,
      image: pro,
      name: "Pro300",
      category: "Surgical Lighting",
      description: "Advanced headlight system offering comfort, intensity, and long-lasting performance.",
      url: "https://sunopticsurgical.com/products/pro300/"
    }
  ]
},
Synkromax: {
    logo: Syncromax,
    name: "Synkromax Biotech Pvt. Ltd.",
    bgColor: "bg-green-50",
    accentColor: "green",
    description:
      "Developer of synthetic vascular grafts and patches, supporting cardiovascular and surgical reconstruction.",
    website: "https://www.synkromax.com/",
    established: "2009", 
    headquarters: "India",
  products: [
    {
      id: 1,
      image: bovinepatch,
      name: "Bovine Pericardial Patch",
      category: "Cardiovascular",
      description: "Biological patch derived from bovine pericardium for cardiovascular and surgical use.",
      url: "https://www.visionarymedtech.com/synkroscaff.html"
    }
  ]
},

CareEssentials: {
  logo: Cocoon,
  name: "Care Essentials",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Specialized in warming therapy and infection control solutions.",
  website: "https://www.careessentials.com.au/",
  established: "1996",
  headquarters: "Australia",
  products: [
    {
      id: 1,
      image: blanket,
      name: "Cocoon Convective Warming Blankets",
      category: "Warming Therapy",
      description: "Single-use warming blankets used with convective warming machines for patient thermal management.",
      url: "https://www.careessentials.com.au/product-category/warming-blankets-warming-machines/warming-blankets/"
    },
    {
      id: 2,
      image: warmer,
      name: "Cocoon Convective Warming System",
      category: "Warming Therapy",
      description: "Cocoon Warming Machine CWS 5000 designed to regulate patient temperature during surgical procedures.",
      url: "https://www.careessentials.com.au/product/cws-5000/"
    }
  ]
},
BLLifeSciences: {
  logo: BL,
  name: "BL Life Sciences",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Manufacturer and supplier of surgical and perfusion solutions including drainage systems, suction sets, and cannulas.",
  website: "https://www.bllifesciences.com/",
  established: "2000",
  headquarters: "India",
  products: [
    {
      id: "1",
      image: thoracic1,
      name: "Thoracic Drainage Catheter 12, 20, 24, 28, 32FR",
      category: "Drainage",
      description: "Flexible thoracic catheter for pleural drainage in multiple sizes.",
      url: "https://www.bllifesciences.com/products/surgical-innovations/"
    },
    {
      id: "2",
      image: thoracic2,
      name: "Thoracic Drainage Catheter 24, 28, 32, 36FR Angled",
      category: "Drainage",
      description: "Angled thoracic catheter for specialized surgical needs.",
      url: "https://www.bllifesciences.com/products/surgical-innovations/"
    },
    {
      id: "3",
      image: chest1000ml,
      name: "Chest Drain System - 2000ml",
      category: "Drainage",
      description: "High-capacity chest drainage system suitable for post-op use.",
      url: "https://sinapibiomedical.com/"
    },
    {
      id: "4",
      image: suctionset,
      name: "Yankauer Suction Set - Standard Tip",
      category: "Suction",
      description: "Disposable Yankauer suction set used in surgical procedures.",
      url: "https://www.bllifesciences.com/products/surgical-innovations/"
    },
    {
      id: "5",
      image: tipcleaner,
      name: "Cautery Tip Cleaner",
      category: "Electrosurgery",
      description: "Cleans cautery tips to ensure optimal performance and safety.",
      url: "https://www.bllifesciences.com/products/surgical-innovations/"
    },
    {
      id: "6",
      image: tipcleaner2_actual,
      name: "Cautery Tip Pencil with Cleaner",
      category: "Electrosurgery",
      description: "Combination of electrosurgical pencil with an integrated tip cleaner.",
      url: "https://www.bllifesciences.com/products/surgical-innovations/"
    },
    {
      id: "7",
      image: mister2,
      name: "Cardiac Mister Blower with Extension",
      category: "Perfusion",
      description: "Mister blower used in cardiac surgeries for precision clearing.",
      url: "https://www.bllifesciences.com/products/customised-perfusion-system/"
    },
    {
      id: "8",
      image: surgiloop2,
      name: "Surgi I Loop Mini/Maxi (Yellow/Blue/Red/White)",
      category: "Vessel Loops",
      description: "Coloured surgical vessel loops for vessel identification and traction.",
      url: "https://www.minogue-med.com/product/aspen-surgical-vessel-loops-maxi-blue/"
    },
    {
      id: "9",
      image: cannula,
      name: "Vessel Cannula Transparent Flexible 5C",
      category: "Cannula",
      description: "Flexible transparent cannula for vessel access and perfusion.",
      url: "" // Link not available
    }
  ]
},
Surgiwear: {
  logo: Surgiwear,
  name: "Surgiwear",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Leading manufacturer of neurosurgical and infection control products based in India.",
  website: "https://surgiwear.co.in/",
  established: "1976",
  headquarters: "India",
  products: [
    {
      id: "1",
      image: shunt,
      name: "Chhabra Slit n Spring Hydrocephalus Shunt System",
      category: "Neurosurgery",
      description: "Used to treat hydrocephalus by diverting cerebrospinal fluid.",
      url: "https://surgiwear.co.in/product/chhabra-slit-n-spring-hydrocephalus-shunt-system-va/"
    },
    {
      id: "2",
      image: evd,
      name: "External Ventricular Drainage (EVD)",
      category: "Neurosurgery",
      description: "Ventricular drainage system for intracranial pressure management.",
      url: "https://surgiwear.co.in/product/ventricular-external-drainage-system/"
    },
    {
      id: "3",
      image: gpatch,
      name: "Gpatch",
      category: "Dural Substitute",
      description: "Dural patch used in neurosurgical repair.",
      url: "" // URL missing; can be updated later
    },
    {
      id: "4",
      image: drape,
      name: "O-Scope Drape",
      category: "Infection Control",
      description: "Sterile drape used to cover surgical scopes.",
      url: "https://surgiwear.co.in/product/chhabra-slit-n-spring-hydrocephalus-shunt-system-va/"
    },
    {
      id: "5",
      image: Carmdrape,
      name: "C-Arm Cover",
      category: "Infection Control",
      description: "Sterile C-arm cover to maintain asepsis in the OR.",
      url: "https://surgiwear.co.in/?product_cat=0&s=C+arm+cover&post_type=product"
    },
    {
      id: "6",
      image: neuropatties,
      name: "Neurosurgical Patties",
      category: "Neurosurgery",
      description: "Used during neurosurgical procedures to protect delicate tissue.",
      url: "https://surgiwear.co.in/?product_cat=0&s=neurosurgical+patties&post_type=product"
    },
    {
      id: "7",
      image: silicon,
      name: "Silicon Patties",
      category: "Neurosurgery",
      description: "Soft silicone patties for atraumatic brain retraction.",
      url: "https://surgiwear.co.in/?product_cat=0&s=silicon+patties&post_type=product"
    },
    {
      id: "8",
      image: bonecement,
      name: "Bone Cement",
      category: "Orthopedics",
      description: "Used in spinal and orthopedic fixation procedures.",
      url: "https://surgiwear.co.in/?product_cat=0&s=bone+cement&post_type=product"
    }
  ]
}
};

  const currentCompany = companies[activeCompany];

   return (
  <>
    <div ref={swipeAreaRef}>
      <div className="min-h-screen bg-gray-100 flex relative">
        
        {/* Sidebar Protruding Edge - Mobile Only */}
        <div ref={sidebarRef} className="...sidebar styles">
          <div 
            className={`lg:hidden fixed left-0 top-1/3 sm:top-1/4 -translate-y-1/2 z-30 transition-all duration-300 ${
              isSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            onClick={() => setIsSidebarOpen(true)}
          >
            <div className="w-4 h-80 sm:h-96 bg-green-900 rounded-r-full shadow-lg flex items-center justify-center cursor-pointer hover:w-4 transition-all duration-200">
              <div className="w-1 h-40 sm:h-60 bg-white rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`
          w-80 bg-white shadow-2xl flex flex-col
          lg:relative lg:translate-x-0
          fixed inset-y-0 left-0 z-40 
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden absolute top-4 right-4 z-50 p-2 text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-6 border-b bg-gradient-to-br from-green-900 via-green-500 to-green-900 text-white relative">
            <h1 className="text-3xl font-bold pt-10 sm:pt-10 mb-2">OPHTHALMOLOGY</h1>
            <p className="text-gray-100 text-xl">Surgical Solutions</p>
          </div>

          <div className="flex-1 overflow-y-auto">
            {Object.entries(companies).map(([key, company]) => (
              <motion.button
                key={key}
                onClick={() => {
                  setActiveCompany(key);
                  setIsSidebarOpen(false);
                }}
                className={`w-full p-6 text-left border-b transition-all duration-300 ${
                  activeCompany === key 
                    ? `bg-green-50 border-l-4 border-${company.accentColor}-500` 
                    : 'hover:bg-gray-50'
                }`}
                whileHover={{ x: activeCompany === key ? 0 : 4 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className={`font-bold text-xl mb-1 ${activeCompany === key ? `text-${company.accentColor}-700` : 'text-gray-900'}`}>
                      {company.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{company.tagline}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-700">
                      <span className="flex items-center text-lg gap-1">
                        <Building className="w-3 h-3" />
                        {company.headquarters}
                      </span>
                      <span className="flex items-center text-lg gap-1">
                        <Package2 className="w-3 h-3" />
                        {company.products.length} Products
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    activeCompany === key ? `rotate-90 text-${company.accentColor}-500` : 'text-gray-400'
                  }`} />
                </div>
              </motion.button>
            ))}
          </div>

          <div className="p-6 bg-green-100 to-purple-500 border-t">
            <div className="flex items-center justify-between text-xl text-gray-800">
              <span>Est. {currentCompany.established}</span>
              <motion.a
                href={currentCompany.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 font-bold text-${currentCompany.accentColor}-800 hover:text-${currentCompany.accentColor}-700`}
                whileHover={{ scale: 1.05 }}
              >
                <Globe className="w-4 h-4" />
                Website
              </motion.a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto md:mt-0 relative">
          <div className={`transition-opacity duration-300 ${isSidebarOpen ? 'lg:opacity-100 opacity-0 pointer-events-none lg:pointer-events-auto' : 'opacity-100'}`}>
            <Navbar2/>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCompany}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="p-4 ml-3 sm:ml-0 md:p-8"
            >

                {/* Company Header */}
              <div className={`rounded-3xl p-4 md:p-8 mb-8 mt-16 sm:mt-16 bg-green-800 border border-${currentCompany.accentColor}-200`}>
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex flex-col gap-1 w-full">
                        <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
                          <div className="flex gap-3 pb-3">
                            <div className={`p-3 w-14 h-14 bg-${currentCompany.accentColor}-100 rounded-2xl`}>
                              <Building className={`w-8 h-8 text-${currentCompany.accentColor}-600`} />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-0">{currentCompany.name}</h2>
                          </div>
                          <div className="flex justify-center items-center  min-w-[120px]">
                            <img
                              src={currentCompany.logo}
                              alt="Company Logo"
                              className="h-16 rounded rounded-lg  sm:h-20 w-auto object-contain"
                            />
                          </div>
                        </div>
                        <p className={`text-${currentCompany.accentColor}-600 font-medium`}>
                          {currentCompany.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-100 text-xl md:text-2xl text-center sm:text-left leading-relaxed">{currentCompany.description}</p>
                  </div>
                </div>
              </div>

              {/* Sidebar Arrow */}
              <div className="text-xl sm:w-1/3 font-extralight font-sans text-indigo-700">
                <div 
                  className={`lg:hidden relative -translate-y-1/2  transition-all duration-300 ${
                    isSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <motion.div
                    className="flex flex-wrap items-center gap-2 cursor-pointer"
                    animate={{ x: [0, 7, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowLeft className="text-white bg-gradient-to-br from-indigo-700 via-blue-200 to-purple-700 rounded-full"  onClick={() => setIsSidebarOpen(true)}/>
                    <span onClick={() => setIsSidebarOpen(true)}>Click here for Sidebar</span>
                  </motion.div>
                </div>
              </div>

              {/* Products Section */}
              <div className="mb-8 pt-8 md:pt-10">
                <div className="flex items-center gap-3 mb-8">
                  <Package2 className={`w-8 h-8 text-${currentCompany.accentColor}-600`} />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Product Portfolio</h3>
                </div>

                <div className="grid grid-cols-1 p-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-16">
                  {currentCompany.products.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-60 md:h-80 object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className={`absolute top-4 left-4 px-3 py-1 bg-${currentCompany.accentColor}-100 text-${currentCompany.accentColor}-700 rounded-full text-xs font-semibold`}>
                          {product.category}
                        </div>
                        <AnimatePresence>
                          {hoveredProduct === product.id && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 bg-black/50 flex items-center justify-center"
                            >
                              <motion.a
                                href={product.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`bg-green-500 hover:bg-${currentCompany.accentColor}-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                View Details <ExternalLink className="w-4 h-4" />
                              </motion.a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="p-4 md:p-6">
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{product.name}</h4>
                        <p className="text-gray-700 mb-4 text-lg md:text-xl">{product.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-8 md:pt-20">
                <div className={`bg-${currentCompany.accentColor}-700 rounded-3xl p-6 md:p-8 text-gray-100`}>
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">Explore More Solutions</h3>
                      <p className="opacity-90 text-xl">Discover the complete range of {currentCompany.name} products</p>
                    </div>
                    <motion.a
                      href={currentCompany.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xl bg-green-600 hover:bg-green-800 px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      Visit Website <ExternalLink className="w-5 text-white h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <DepNav />
          <Footer />
        </div>
      </div>
    </div>
  </>
);
};

export default NeuroSidebarDesign;
