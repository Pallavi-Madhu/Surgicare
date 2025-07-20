import React, { useState,useEffect,useRef } from "react";
import Navbar2 from "../../Components/Navbar2";
import Footer from "../../Components/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Package2, Building, ChevronRight, Star, ShoppingCart,ArrowLeft,X } from 'lucide-react';
import Loading from "../../Components/Loading";
import DepNav from "../../Components/DepNav";
// import { motion } from "framer-motion";
// //companies
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


const GenralSurgerySidebarDesign = () => {
  const [activeCompany, setActiveCompany] = useState("BL");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


            const swipeAreaRef = useRef(null);
            const sidebarRef = useRef(null);

  const [loading, setLoading] = useState(true);
  
       useEffect(() => {
          setTimeout(() => setLoading(false), 2000); 
        }, []);
        
  if(loading) {
    return(
    <Loading department = "General Surgery"/>
    )
  }

 const companies = {
  BL: {
    logo: BL, 
    name: "BL Life Sciences",
    bgColor: "bg-green-50",
    accentColor: "green",
    description: "BL Life Sciences offers innovative surgical solutions including thoracic catheters, suction sets, and perfusion systems.",
    website: "https://www.bllifesciences.com/",
    headquarters: "India",
    established:"2000",
    products: [
      {
        id: "1",
        image: thoracic1,
        name: "Thoracic Drainage Catheter",
        category: "Surgical Innovations",
        description: "Catheter sizes: 12, 20, 24, 28, 32FR",
        url: "https://www.bllifesciences.com/products/surgical-innovations/"
      },
      {
        id: "2",
        image: thoracic2,
        name: "Thoracic Drainage Catheter Angled",
        category: "Surgical Innovations",
        description: "Catheter sizes: 24, 28, 32, 36FR",
        url: "https://www.bllifesciences.com/products/surgical-innovations/"
      },
      {
        id: "3",
        image: chest1000ml,
        name: "Chest Drain System",
        category: "Surgical Innovations",
        description: "Capacity: 2000ml",
        url: "https://sinapibiomedical.com/"
      },
      {
        id: "4",
        image: suctionset,
        name: "Yankur Suction Set",
        category: "Surgical Innovations",
        description: "Standard tip suction set",
        url: "https://www.bllifesciences.com/products/surgical-innovations/"
      },
      {
        id: "5",
        image: tipcleaner,
        name: "Cautery Tip Cleaner",
        category: "Surgical Innovations",
        description: "Cleaning tool for electrosurgical tips",
        url: "https://www.bllifesciences.com/products/surgical-innovations/"
      },
      {
        id: "6",
        image: tipcleaner2_actual,
        name: "Cautery Tip Pencil with Cleaner",
        category: "Surgical Innovations",
        description: "Integrated pencil with cleaner tip",
        url: "https://www.bllifesciences.com/products/surgical-innovations/"
      },
      {
        id: "7",
        image: mister2,
        name: "Cardiac Mister Blower with Extension",
        category: "Perfusion System",
        description: "Precise blow-misting device",
        url: "https://www.bllifesciences.com/products/customised-perfusion-system/"
      },
      {
        id: "8",
        image: surgiloop2,
        name: "Surgi I Loop Mini/Maxi",
        category: "Vessel Loops",
        description: "Color-coded vessel loops - Yellow, Blue, Red, White",
        url: "https://www.minogue-med.com/product/aspen-surgical-vessel-loops-maxi-blue/"
      },
      {
        id: "9",
        image: cannula,
        name: "Vessel Cannula",
        category: "Surgical Tools",
        description: "Transparent flexible 5C cannula",
        // No URL provided
      }
    ]
  },

  Scanlan: {
    logo: Scanlan, 
    name: "Scanlan International",
    bgColor: "bg-green-50",
    accentColor: "green",
    description: "Scanlan International provides high-precision surgical instruments and care tools for medical professionals.",
    website: "https://www.scanlaninternational.com/",
    headquarters: "USA",
    established:"1921",
    products: [
      {
        id: "1",
        image: clamp,
        name: "Bull Dog Clamp",
        category: "Clamps",
        description: "High-quality clamp for surgical precision",
        url: "https://www.scanlaninternational.com/product-category/instrumentation/clamps/"
      },
      {
        id: "3",
        image: instrument_care,
        name: "Instrument Marker",
        category: "Instrument Care",
        description: "All colors available for marking instruments",
        url: "https://www.scanlaninternational.com/scanlan-products/instrument-care/"
      },
      {
        id: "4",
        image: surgiloop,
        name: "Surgi Loop with Blend Needle",
        category: "Vessel Loops",
        description: "Precise loop tool with blend needle",
        url: "https://www.scanlaninternational.com/products/1001-81p/"
      }
    ]
  },

  Sinapi: {
    logo: Sinapi,
    name: "Sinapi Biomedical",
    bgColor: "bg-green-50",
    accentColor: "green",
    description: "Sinapi Biomedical manufactures reliable and high-capacity drainage systems used in critical care.",
    website: "https://sinapibiomedical.com/",
    headquarters: "South Africa",
    established:"2001",
    products: [
      {
        id: "1",
        image: chestdrain,
        name: "Chest Drain SINAPI",
        category: "Drainage Systems",
        description: "Capacity: 1000ml",
        url: "https://sinapibiomedical.com/"
      }
    ]
  },

  Peters: {
    logo: Peters, 
    name: "Peters Surgical",
    bgColor: "bg-green-50",
    accentColor: "green",
    description: "Peters Surgical specializes in titanium clips and surgical solutions for cardiovascular procedures.",
    website: "https://peters-surgical.com/",
    headquarters: "France",
    established:"1926",
    products: [
      {
        id: "1",
        image: clips,
        name: "SLS Clips",
        category: "Clipping Systems",
        description: "Small, medium, and large titanium clips",
        url: "https://peters-surgical.com/wp-content/uploads/sites/4/2023/05/SLS-Titanium-clips-brochure.pdf"
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
            <h1 className="text-3xl font-bold pt-10 lg:pt-0  mb-2">GENERAL SURGERY</h1>
            <p className="text-gray-100 text-xl">Surgical Solutions</p>
          </div>

          <div className="flex-1 overflow-y-auto">
            {Object.entries(companies).map(([key, company]) => (
              <motion.button
                key={key}
                onClick={() => {
                  setActiveCompany(key);
                  setIsSidebarOpen(false);
                       window.scrollTo({ top: 0, behavior: 'smooth' });
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

export default GenralSurgerySidebarDesign;
