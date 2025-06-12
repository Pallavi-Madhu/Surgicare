import React, { useState } from "react";
import { ArrowRight, X } from 'lucide-react';
import Navbar2 from "../../Components/Navbar2";
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
//import { motion } from "framer-motion";
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Package2, Building, ChevronRight, Star, ShoppingCart } from 'lucide-react';

const OrthopedicSidebarDesign = () => {
  const [activeCompany, setActiveCompany] = useState("Halyard");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const companies = {
    Halyard: {
      logo: Halyard,
      name: "Halyard Health",
      //tagline: "Infection Prevention Excellence",
      bgColor: "bg-blue-50",
      accentColor: "green",
      description: "Halyard contributes to the orthopedic department by providing high-quality surgical drapes, gowns, and sterilization solutions to ensure infection prevention during procedures. Their orthopedic-specific solutions help maintain a sterile field and enhance patient safety..",
      website: "https://www.halyardhealth.com/",
      established: "1979",
      headquarters: "USA",
      products: [
        {
          id: "drapes",
          image: drapes,
          name: "Surgical Drapes",
          category: "Sterile Solutions",
          description: "Premium surgical drapes engineered for maximum protection",
          features: ["Fluid-resistant", "Tear-resistant", "Lint-free"],
          url: "https://products.halyardhealth.com/products/surgical-solutions/surgical-drapes"
        },
        {
          id: "gowns",
          image: gowns,
          name: "Surgical Gowns", 
          category: "Protective Wear",
          description: "High-performance gowns for surgical protection",
          features: ["Breathable fabric", "Reinforced seams", "Comfort fit"],
          url: "https://products.halyardhealth.com/products/surgical-solutions/surgical-gowns"
        },
        {
          id: masks,
          image: masks,
          name: "Surgical Masks",
          category: "Respiratory Protection", 
          description: "Advanced filtration masks for surgical environments",
          features: ["99% filtration", "Comfortable wear", "Secure fit"],
          url: "https://products.halyardhealth.com/products/personal-protection/facial-respiratory-protection/medical-surgical-masks"
        }
      ]
    },
    Surgiwear: {
      logo: Surgiwear,
      name: "Surgiwear Ltd",
      //tagline: "Innovation in Healthcare",
      bgColor: "bg-green-50",
      accentColor: "green",
      description: "Indian medical device innovator specializing in surgical implants, infection control, and wound care products. Focused on enhancing patient safety and surgical outcomes through quality innovation.",
      website: "https://surgiwear.co.in/",
      established: "1992",
      headquarters: "India",
      products: [
        {
          id: "gbone",
          image: GBone,
          name: "G Bone",
          category: "Bone Grafts",
          description: "Modified hydroxyapatite bone graft substitute",
          features: ["Biocompatible", "Osteoconductive", "Resorbable"],
          url: "https://surgiwear.co.in/product-category/orthopaedics/implants-orthopaedics/g-bone-modified-hydroxyapatite/"
        },
        {
          id: "gdress",
          image: GDress,
          name: "G Dress",
          category: "Wound Care",
          description: "Advanced disposable surgical dressings",
          features: ["Antimicrobial", "Moisture control", "Easy application"],
          url: "https://surgiwear.co.in/product-category/orthopaedics/disposable-orthopaedics/g-dress-disposable-orthopaedics/"
        },
        {
          id: "gpatch",
          image: GPatch,
          name: "G Patch",
          category: "Implants",
          description: "Advanced orthopedic patches for tissue repair",
          features: ["Biodegradable", "Strong adhesion", "Tissue compatible"],
          url: "https://surgiwear.co.in/product-category/orthopaedics/implants-orthopaedics/g-patch-implants-orthopaedics/"
        }
      ]
    },
    Baxter: {
      logo: Baxter, 
      name: "Baxter Healthcare",
      //tagline: "Advancing Surgery",
      bgColor: "bg-green-50",
      accentColor: "green",
      description: "Global leader in hemostatic solutions for orthopedic surgery. Our advanced products provide effective bleeding control and tissue sealing, enhancing surgical precision and reducing complications.",
      website: "https://www.baxter.com/",
      established: "1931",
      headquarters: "USA",
      products: [
        {
          id: "hemopatch",
          image: "/hemopatch.png",
          name: "Hemopatch",
          category: "Hemostatic Sealing",
          description: "Revolutionary hemostatic sealing pad",
          //features: ["Rapid hemostasis", "Easy application", "Bioabsorbable"],
          url: "https://advancedsurgery.baxter.com.tr/en/hemopatch"
        },
        {
          id: "floseal",
          image: "/Ophthalmology/floseal.png",
          name: "Floseal",
          category: "Bleeding Control",
          description: "Hemostatic matrix for effective bleeding control",
          //features: ["Conforms to tissue", "Rapid activation", "Versatile use"],
          url: "https://advancedsurgery.baxter.com/floseal"
        },
        {
          id: "tiseel",
          image: "/Ophthalmology/Tiseel.jpg",
          name: "Tiseel",
          category: "Fibrin Sealant",
          description: "Fibrin sealant for tissue adhesion and sealing",
          //features: ["Strong sealing", "Tissue adhesion", "Hemostatic effect"],
          url: "https://www.baxter.com/healthcare-professionals/surgical-care/tisseel-fibrin-sealant"
        }
      ]
    }
  };

  const currentCompany = companies[activeCompany];

return (
    <>
      <Navbar2/>
      <div className="min-h-screen bg-gray-100 flex">
        
        {/* Mobile Menu Button */}
  <button
  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
  className="md:hidden fixed top-2 left-4 -translate-y-1/2 z-50 bg-green-900 text-white p-3 rounded-lg shadow-lg"
>
  {isSidebarOpen ? <X className="bg-transparent" /> : <ArrowRight className="w-6 h-6" />}
</button>


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
          md:relative md:translate-x-0
          fixed inset-y-0 left-0 z-40 
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          {/* Header */}
          <div className="p-6 border-b bg-green-900 text-white ">
            <h1 className="text-4xl font-bold pt-10 sm:pt-0 mb-2">ORTHOPEDIC</h1>
            <p className="text-gray-100 text-xl">Surgical Solutions</p>
          </div>

          {/* Company Navigation */}
          <div className="flex-1 overflow-y-auto">
            {Object.entries(companies).map(([key, company]) => (
              <motion.button
                key={key}
                onClick={() => {
                  setActiveCompany(key);
                  setIsSidebarOpen(false); // Close sidebar on mobile after selection
                }}
                className={`w-full p-6 text-left border-b transition-all duration-300 ${
                  activeCompany === key 
                    ? `${company.bgColor} border-l-4 border-${company.accentColor}-500` 
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

          {/* Quick Stats */}
          <div className="p-6  bg-green-100 to-purple-500 border-t">
            <div className="flex items-center justify-between text-xl text-gray-800">
              <span>Est. {currentCompany.established}</span>
              <motion.a
                href={currentCompany.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 font-bold text-${currentCompany.accentColor}-800 hover:text-${currentCompany.accentColor}-700`}
                whileHover={{ scale: 1.05 }}
              >
                <Globe className="w-4  h-4" />
                Website
              </motion.a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto  md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCompany}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="p-4 md:p-8"
            >
              {/* Company Header */}
              <div className={`rounded-3xl p-4 md:p-8 mb-8 mt-12 bg-green-700 border border-${currentCompany.accentColor}-200`}>
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 bg-${currentCompany.accentColor}-100 rounded-2xl`}>
                        <Building className={`w-8 h-8 text-${currentCompany.accentColor}-600`} />
                      </div>
                      <div className="flex flex-col gap-1 w-full">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-0">{currentCompany.name}</h2>
                          <img
                            src={currentCompany.logo}
                            alt="Company Logo"
                            className="h-20 w-32 md:h-30 md:w-50"
                          />
                        </div>
                        <p className={`text-${currentCompany.accentColor}-600 font-medium`}>
                          {currentCompany.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-100 text-lg md:text-2xl leading-relaxed">{currentCompany.description}</p>
                  </div>
                </div>
              </div>

              {/* Products Section */}
              <div className="mb-8 pt-8 md:pt-20">
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
                      <p className="opacity-90">Discover the complete range of {currentCompany.name} products</p>
                    </div>
                    <motion.a
                      href={currentCompany.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-green-600 hover:bg-green-800 px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      Visit Website <ExternalLink className="w-5 text-white h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default OrthopedicSidebarDesign;
