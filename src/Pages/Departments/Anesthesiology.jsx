import React, { useState,useEffect   } from "react";
import Navbar2 from "../../Components/Navbar2";
import Footer from "../../Components/Footer";

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Package2, Building, ChevronRight, Star, ShoppingCart,ArrowRight } from 'lucide-react';

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
import Loading from "../../Components/Loading";

import image1 from "../../assets/Anastesiology/pressurelines.png";
import image2 from "../../assets/Anastesiology/presseurtransducer.jpg";
import image3 from "../../assets/Anastesiology/hmefilter.png";
import image4 from "../../assets/Anastesiology/cables.png";
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
import cable from "../../assets/Cablecatalogue.pdf";
import sheath from "../../assets/Anastesiology/sheath.png";
import sheath2 from "../../assets/Anastesiology/sheath2.png";
import aspiration from "../../assets/Anastesiology/aspiration.png";

const AnesthesioSidebarDesign = () => {
  const [activeCompany, setActiveCompany] = useState("BL");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

     useEffect(() => {
        setTimeout(() => setLoading(false), 4000); // 4 second delay
      }, []);
      
if(loading) {
  return(
  <Loading department = "Anesthesiology"/>
  )
}

const companies = {
  BL: {
  logo: BL,
  name: "BL Lifesciences",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "A provider of innovative medical devices across anesthesia, cardiology, and critical care domains.",
  website: "https://www.bllifesciences.com/",
  established: "1996",
  headquarters: "India",
  products: [
    {
      id: "1",
      image: image1,
      name: "Pressure Monitoring Lines",
      category: "Invasive Pressure System",
      description: "Used for real-time blood pressure monitoring during surgical or critical care procedures.",
      url: "https://www.bllifesciences.com/products/invasive-pressure-system/"
    },
    {
      id: "2",
      image: image2,
      name: "Disposable Pressure Transducer",
      category: "Interventional Systems",
      description: "Converts physiological pressure signals into electrical signals.",
      url: "https://www.bllifesciences.com/products/interventional-systems/"
    },
    {
      id: "3",
      image: image3,
      name: "HME Filter",
      category: "Anesthesia and Critical Care",
      description: "Heat and Moisture Exchanger filter for respiratory circuit.",
      url: "https://www.bllifesciences.com/products/anesthesia-and-critical-care/"
    },
    {
      id: "4",
      image: image4,
      name: "Interphase Cable",
      category: "Monitoring Accessories",
      description: "Cable compatible with patient monitoring systems.",
      url: cable // this should be a string, make sure `cable` is properly declared or directly insert URL
    },
    {
      id: "5",
      image: image5,
      name: "3-Way with Extension",
      category: "Interventional Systems",
      description: "3-way stopcock with extension tube in multiple lengths (10cm, 25cm, 50cm).",
      url: "https://www.bllifesciences.com/products/interventional-systems/"
    },
    {
      id: "6",
      image: "/Cardiology/IVset.png",
      name: "IV Set Vented",
      category: "Infusion Therapy",
      description: "Sterile, disposable vented IV set.",
      url: "https://bllifesciences.com/wp-content/uploads/2022/08/BL-Lifesciences.pdf"
    },
    {
      id: "7",
      image: image7,
      name: "Central Venous Catheters",
      category: "Catheterization",
      description: "Used for administering medication or fluids, obtaining blood tests and directly obtaining cardiovascular measurements.",
      url: "https://www.bllifesciences.com/products/central-venous-catheters/"
    },
    {
      id: "8",
      image: image8,
      name: "Adult Expandable Circuit",
      category: "Anesthesia and Critical Care",
      description: "Breathing circuit system for adult patients.",
      url: "https://www.bllifesciences.com/products/anesthesia-and-critical-care/"
    },
    {
      id: "9",
      image: image9,
      name: "Lung Exerciser",
      category: "Pulmonary Care",
      description: "Promotes deep breathing to prevent pulmonary complications post-surgery.",
      url: "https://www.bllifesciences.com/products/anesthesia-and-critical-care/"
    }
  ]
},
Venticare: {
  logo: Venticare,
  name: "Venticare Medical Inc.",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Specialized in respiratory care and critical care products.",
  website: "https://venticaremedicalinc.com/",
  established: "Not specified",
  headquarters: "India",
  products: [
    {
      id: "1",
      image: image11,
      name: "Adult Nebulizer Mask Kit",
      category: "Respiratory Care",
      description: "Disposable nebulizer kit for effective medication delivery.",
      url: "https://venticaremedicalinc.com/products/"
    },
    {
      id: "2",
      image: image12,
      name: "Ventilator Circuit Plain Adult",
      category: "Critical Care",
      description: "Plain adult ventilator circuit for mechanical ventilation.",
      url: "https://venticaremedicalinc.com/products/"
    }
  ]
},
CareEssentials: {
  logo: Cocoon,
  name: "Care Essentials",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Specialized in patient warming therapy and infection control.",
  website: "https://www.careessentials.com.au/",
  established: "1996",
  headquarters: "Australia",
  products: [
    {
      id: "1",
      image: image10,
      name: "Warming Blankets",
      category: "Warming Therapy",
      description: "Convective warming blankets for maintaining patient body temperature.",
      url: "https://www.careessentials.com.au/product-category/warming-blankets-warming-machines/?category-list=warming-blankets"
    }
  ]
},
Aero: {
  logo: Aero,
  name: "AERO Healthcare",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Aero specializes in respiratory and anesthesia circuits for both adults and pediatrics.",
  website: "https://aerohealthcare.com/us/",
  established: "N/A",
  headquarters: "N/A",
  products: [
    {
      id: "1",
      image: image16,
      name: "ADULT BAINS CIRCUIT-AERO (2001)",
      category: "Respiratory Circuit",
      description: "Adult Bains anesthesia circuit",
    },
    {
      id: "2",
      image: image17,
      name: "ADULT BREATHING CIRCUIT-EXPANDABLE (1010-E)",
      category: "Breathing Circuit",
      description: "Expandable adult breathing circuit",
    },
    {
      id: "3",
      image: image18,
      name: "ADULT BREATHING CIRCUIT WITH EXTRA LIMB & CONNECTOR (1010-01-E)",
      category: "Breathing Circuit",
      description: "Adult circuit with extra limb and connector",
    },
    {
      id: "4",
      image: image19,
      name: "ADULT BREATHING CIRCUIT-WHITE (REF:1010)",
      category: "Breathing Circuit",
      description: "Standard white adult breathing circuit",
    },
    {
      id: "5",
      image: image20,
      name: "Adult Double Water Trap Ventilator Circuit (REF:1012)",
      category: "Ventilator Circuit",
      description: "Circuit with double water trap for adults",
    },
    {
      id: "6",
      image: image21,
      name: "BVL FILTER AERO (2010)",
      category: "Filter",
      description: "Bacterial/Viral Filter (BVL)",
    },
    {
      id: "7",
      image: image22,
      name: "CPAP CIRCUIT (SMOOTH BORE TUBING) 1.8 MTR (4000)",
      category: "CPAP",
      description: "Smooth bore CPAP circuit",
    },
    {
      id: "8",
      image: image23,
      name: "CPAP Circuit with Mask and Harness-Adult",
      category: "CPAP",
      description: "Adult CPAP circuit with mask and harness",
    },
    {
      id: "9",
      image: image24,
      name: "PAEDIATRIC BAIN CIRCUIT-JACKSON REES (2002)",
      category: "Pediatric Circuit",
      description: "Jackson Rees type Bains circuit for children",
    },
    {
      id: "10",
      image: image25,
      name: "PAEDIATRIC BREATHING CIRCUIT (1020)",
      category: "Pediatric Circuit",
      description: "Breathing circuit for pediatric use",
    },
    {
      id: "11",
      image: image26,
      name: "T-CONNECTOR (1500)",
      category: "Accessory",
      description: "T-connector for circuit assemblies",
    }
  ]
},
Portex: {
  logo: Portex,
  name: "Portex",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Portex is known for advanced airway management products used in anesthesia and critical care.",
  website: "https://www.smiths-medical.com/products/airway-management",
  established:"N/A",
  headquarters:"N/A",
  products: [
    {
      id: "1",
      image: image27,
      name: "Bougie (Adult)",
      category: "Airway Management",
      description: "Reusable adult bougie for intubation support",
      url: "https://www.medis-medical.com/products/flexo-guide"
    }
  ]
},
Rusch: {
  logo: Rusch,
  name: "Rusch",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Rüsch, a Teleflex brand, offers specialized solutions in airway management and intubation.",
  website: "https://www.teleflex.com/emea/en/product-areas/anaesthesia/",
  established:"N/A",
  headquarters:"N/A",
  products: [
    {
      id: "1",
      image: image13,
      name: "Bronchial Double Lumen Tube",
      category: "Airway Management",
      description: "Double lumen tube for independent lung ventilation",
      url: "https://www.teleflex.com/emea/en/product-areas/anaesthesia/airway-management/double-lumen-tubes/index.html"
    },
    {
      id: "2",
      image: image14,
      name: "Cuff Measuring Meter for E.T. Tube",
      category: "Monitoring Accessory",
      description: "Cuff pressure manometer for endotracheal tubes",
      url: "https://us.myteleflex.com/en/USD/All-Categories/Anesthesia/Airway/Intubation-Accessories/Ru%CC%88sch%C2%AE-Endotest%E2%84%A2-Cuff-Pressure-Manometer/p/endotest"
    }
  ]
},
Medisafe: {
  logo: Medisafe,
  name: "Medisafe",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Medisafe Resuscitators provides emergency medical tools including laryngoscopes and ventilators.",
  website: "https://www.medisaferesuscitators.com/",
  established:"N/A",
  headquarters:"N/A",
  products: [
    {
      id: "1",
      image: image28,
      name: "Laryngoscope with 4 blades - Fiberoptic",
      category: "Airway Equipment",
      description: "Fiberoptic laryngoscope set with multiple blade sizes",
      url: "https://www.medisaferesuscitators.com/search.html?ss=Laryngoscope+with+4+blades+-Fiberoptic"
    }
  ]
},
Suretech: {
  logo: Suretech,
  name: "SURETECH MEDICAL INC.",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Suretech Medical offers a comprehensive range of cardiology and radiology access devices including introducer needles and sheaths.",
  website: "https://www.suretechmedical.com/",
  established:"1994",
  headquarters:"N/A",
  products: [
    {
      id: "1",
      image: image29,
      name: "Introducer Needle 18 Gx7CM",
      category: "Cardiology",
      description: "Precision introducer needle used for vascular access",
      url: "https://www.suretechmedical.com/Cardiology-Introducer-Needle.html"
    },
    {
      id: "2",
      image: sheath,
      name: "Introducer Sheath",
      category: "Cardiology",
      description: "Used in cardiovascular procedures for catheter insertion",
      url: "https://www.suretechmedical.com/Cardiology-Introducer-Sheath.html"
    },
    {
      id: "3",
      image: sheath2,
      name: "Radial Puncture Sheath",
      category: "Cardiology",
      description: "Radial access sheath used in minimally invasive procedures",
      url: "https://www.suretechmedical.com/Cardiology-Radial-Puncture-Sheath.html"
    },
    {
      id: "4",
      image: aspiration,
      name: "Aspiration Needle",
      category: "Radiology",
      description: "Used for aspiration procedures in interventional radiology",
      url: "https://www.suretechmedical.com/Radiology-Aspiration-Needle.html"
    }
  ]
},
Meditech: {
  logo: Meditec,
  name: "Meditech",
  bgColor: "bg-green-50",
  accentColor: "green",
  description: "Meditech specializes in advanced airway management tools including bougies, introducers, and stylets for all age groups.",
  website: "https://www.meditechsystems.co.uk/",
  established:"N/A",
  headquarters:"N/A",
  products: [
    {
      id: "1",
      image: image30,
      name: "Bougie Introducer - Adult, Coudé Tip - 15 FR x 70 cm",
      category: "Airway Management",
      description: "Flexible bougie introducer with curved tip for adult use",
      url: "https://www.meditechsystems.co.uk/product/bougie-coude-tip-introducers/"
    },
    {
      id: "2",
      image: image31,
      name: "Bougie Introducer - Pediatric, Coudé Tip - 10 FR x 70 cm",
      category: "Airway Management",
      description: "Smaller curved bougie for pediatric intubation",
      url: "https://www.meditechsystems.co.uk/product/bougie-coude-tip-introducers/"
    },
    {
      id: "3",
      image: image32,
      name: "Adult Ported Introducer - 15 FR x 70 cm",
      category: "Airway Management",
      description: "Adult ported introducer for guided airway access"
      // No URL provided
    },
    {
      id: "4",
      image: image33,
      name: "Pediatric Ported Introducer - 10 FR x 70 cm",
      category: "Airway Management",
      description: "Pediatric version of the ported introducer"
      // No URL provided
    },
    {
      id: "5",
      image: image34,
      name: "Neonatal Stylette (2.0mm) - 6 FR x 255 mm",
      category: "Stylets",
      description: "Flexible neonatal intubation stylet"
      // No URL provided
    },
    {
      id: "6",
      image: image35,
      name: "Pediatric Stylette (3.0mm) - 8 FR x 300 mm",
      category: "Stylets",
      description: "Pediatric-sized intubation stylet"
      // No URL provided
    },
    {
      id: "7",
      image: image36,
      name: "Adult Stylette (4.0mm) - 10 FR x 335 mm",
      category: "Stylets",
      description: "Standard adult intubation stylet"
      // No URL provided
    },
    {
      id: "8",
      image: image37,
      name: "Adult Malleable Introducer - 15 FR x 70 cm",
      category: "Introducers",
      description: "Malleable airway introducer for adult patients"
      // No URL provided
    },
    {
      id: "9",
      image: image38,
      name: "Sterile Adult Al Stylette - 9 FR x 16",
      category: "Stylets",
      description: "Sterile aluminum adult stylet"
      // No URL provided
    },
    {
      id: "10",
      image: image39,
      name: "Wendl Nasopharyngeal Airways (Silicone) 12 Fr - 3/4.0mm",
      category: "Airway Management",
      description: "Soft silicone nasal airway for oxygen or suctioning",
      url: "https://www.meditechsystems.co.uk/product-category/airway-management/oxygen-and-aerosol-therapy/resuscitation-kits-and-nasophranageal/"
    }
  ]
},
};


  const currentCompany = companies[activeCompany];

 return (
    <>
    
      <div className="min-h-screen  bg-gray-100 flex">
        
        {/* Mobile Menu Button */}
<div
  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
  className="sm:hidden fixed top-2 left-4 -translate-y-1/2 z-50 bg-green-900 mt-16 text-white p-3 rounded-lg shadow-lg flex items-center space-x-2"
>
  {isSidebarOpen ? (
    <X className="w-6 h-6  bg-transparent" />
  ) : (
    <>
      <div className="flex  w-full"><button
        className="text-white px-2 h-8 rounded"
        onClick={(e) => {
          e.stopPropagation(); // prevents sidebar toggle
          console.log("Button clicked");
        }}
      >
        Click for sidebar
      </button>
      <ArrowRight className="w-6 h-6 bg-transparent" /></div>
    </>
  )}
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
          {/* Header */}
          <div className="p-4 border-b bg-gradient-to-br from-green-900 via-green-500 to-green-900 text-white ">
            <h1 className="text-3xl font-bold pt-10 sm:pt-0 mb-2"> ANESTHESIOLOGY</h1>
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
                    ? `bg-green-50 border-l-4 border-${company.accentColor}-500` 
                    : 'hover:bg-gray-50'
                }`}
                whileHover={{ x: activeCompany === key ? 0 : 4 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className={`font-bold text-xl mb-1 ${activeCompany === key ? `text-${currentCompany.accentColor}-700` : 'text-gray-900'}`}>
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
            <Navbar2/>
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

              <div className={`rounded-3xl p-4 md:p-8 mb-8 mt-28 sm:mt-16 bg-green-800 border border-${currentCompany.accentColor}-200`}>
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                     
                      <div className="flex flex-col gap-1 w-full">
                        <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
                           <div className="flex gap-3 pb-3"
                            ><div className={`p-3 w-14 bg-${currentCompany.accentColor}-100 rounded-2xl`}>
                        <Building className={`w-8 h-8 text-${currentCompany.accentColor}-600`} />
                      </div>
                          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-0">{currentCompany.name}</h2>
                         </div> 
     {/* Centered Logo */}
  <div className="flex justify-center items-center min-w-[120px]">
    <img
      src={currentCompany.logo}
      alt="Company Logo"
      className="h-20 w-auto object-contain"
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
                <div className={`bg-${currentCompany.accentColor}-700 rounded-3xl p-6 md:p-8 text-black-200`}>
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
          <DepNav/>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default AnesthesioSidebarDesign;
