import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DepNav from "../../Components/DepNav";
import { motion } from "framer-motion";

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
import bg from "../../assets/depBG.png";
//Euroset products
import oxygenerator from "../../assets/CardiacSurgery/Euroset/Kompass.png";
import trilly1pdf from "../../assets/CardiacSurgery/Euroset/Trilly-brochure-32017.pdf.pdf"
import trilly2pdf from "../..//assets/CardiacSurgery/Euroset/Trilly-pediatric-4P-32018.pdf.pdf";
import trilly1 from "../../assets/CardiacSurgery/Euroset/trilly1.png";
import trilly2 from "../../assets/CardiacSurgery/Euroset/trilly2.png";
import remowell from "../../assets/CardiacSurgery/Euroset/remowell.png";
import remowellpdf from "../../assets/CardiacSurgery/Euroset/remowell.pdf";
import horizonpdf from "../../assets/CardiacSurgery/Euroset/Horizon brochure 201808-P.pdf.pdf";
import horizon from "../../assets/CardiacSurgery/Euroset/horizon.png";
import ecmooxy from "../../assets/CardiacSurgery/Euroset/ecmooxy.png";
import ecmooxypdf from "../../assets/CardiacSurgery/Euroset/ECMO OXY-EU5109.pdf";

//BL products
import image1 from "../../assets/Anastesiology/pressurelines.png";
import image2 from "../../assets/Anastesiology/presseurtransducer.jpg";
import image3 from "../../assets/Anastesiology/hmefilter.png";
import image4 from "../../assets/Anastesiology/cables.png";
import image5 from "../../assets/Anastesiology/3waywithextension.jpeg";
import image7 from "../../assets/Anastesiology/lumen.jpg";
import image8 from "../../assets/Anastesiology/adultexpandable.jpg";
import image9 from "../../assets/Anastesiology/Lungexcerciser.jpg";
import cable from "../../assets/Cablecatalogue.pdf";

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
import evhs from "../../assets/CardiacSurgery/Terumo/evhs.png";
import stabilizer from "../../assets/CardiacSurgery/Terumo/stabilizer.png";
import brochure1 from "../../assets/CardiacSurgery/Terumo/Gelsoft-Plus-Brochure-A4-PM-07037-Global.pdf"
import brochure2 from "../../assets/CardiacSurgery/Terumo/Gelweave%2BBrochure 2.pdf";
import brochure3 from "../../assets/CardiacSurgery/Terumo/Gelweave%2BGeometries%2BBrochure.pdf";
import brochure4 from "../../assets/CardiacSurgery/Terumo/Gelweave%2BValsalva%2BBrochure.pdf"
import gelsoft from "../../assets/CardiacSurgery/Terumo/gelsoft.jpeg";
import gelwieve from "../../assets/CardiacSurgery/Terumo/gelwieve.jpeg";
import aortic from "../../assets/CardiacSurgery/Terumo/aortic.jpeg";
import valsalva from "../../assets/CardiacSurgery/Terumo/valsalva.jpeg";


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

//Scanlan
import coverpg from "../../assets/CardiacSurgery/Scanlan/cover.jpg"
import sc from "../../assets/CardiacSurgery/Scanlan/Scanlan.pdf"

const DepartmentPage = ({ name, image, buttonImages }) => {
  const [selected, setSelected] = useState("BL");

  const EuroCards = [
    {
      id: "1",
      image: oxygenerator,
      text: "Oxygenator adult Kompass",
      url:"https://euromed.ch/wp-content/uploads/2023/01/kompass_brochure.pdf"
    },
    {
      id: "2",
      image: trilly1,
      text: "Pediatric oxygenerator with integrated arterial filter",
      url: trilly2pdf
    },
    {
      id: "3",
      image: trilly2,
      text: "Infant-paediatric oxygenator with modular cascade filtration",
      url: trilly1pdf
    },
    {
      id: "4",
      image: remowell,
      text: "Dual chamber ADULT oxygenator with lipids and leukocytes reduction",
      url: remowellpdf
    },
    {
      id: "5",
      image: horizon,
      text: "SINGLE CHAMBER ADULT oxygenator",
      url:horizonpdf
    },
    {
      id: "6",
      image: ecmooxy,
      text: "ECMO",
      url:ecmooxypdf
    },
  ];

  const ScanlanCards=[{
      id: 1,
      image: coverpg,
      text: "Scanlan Products",
      url: sc,
    },]
  const BLCards = [
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
      url: cable
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
    {
      id: 10,
      image: image11,
      text: "Adult Nebulizer Mask Kit (3026)",           //venticare
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
      url:"https://ecatalog.baxter.com/ecatalog/loadproduct.html?cid=20016&lid=10001&hid=20001&pid=1472740"
    },
    {
      id: 2,
      image: hemopatch,
      text: "Hemopatch",
      url:"https://advancedsurgery.baxter.eu/hemopatch"
    },
    {
      id: 3,
      image: "/Ophthalmology/Tiseel.jpg", // Change this to the correct image
      text: "Tiseel",
      url: "https://www.baxter.com/healthcare-professionals/surgical-care/tisseel-fibrin-sealant",
    },
    {
      id: 4,
      image: "/coseal.png", // Change this to the correct image
      text: "Coseal",
      url: "https://advancedsurgery.baxter.com/coseal",
    },
  ];

  const SynkromaxCards = [
    { id: 1,
      image: bovinepatch,
      text: "Bovine pericardial patch",
      url: "https://www.reachmedicalsystems.com/synkromax",
    },
  ];

  const TerumoCards = [
    {
      id: 1,
      image: evhs,
      text: "Endoscopic Vessel Harvesting (EVH) System",
      url:"https://terumocv.com/evh/"
    },
    {
      id: 2,
      image: stabilizer,
      text: "Stabilizer",
      url:"https://www.terumo-europe.com/en-emea/products/titan%E2%84%A2-stabilizer-attachments-beating-heart"
    },
    {
      id:3,
      image:gelsoft,
      text:"Gelsoft Plus",
      url:brochure1
    },
    {
      id:4,
      image:gelwieve,
      text:"GelweaveTM",
      url:brochure2
    },
    {
      id:5,
      image:aortic,
      text:"GelweaveTM- Aortic Surgical Grafts",
      url:brochure3
    },
    {
      id:6,
      image:valsalva,
      text:"Gelweave ValsalvaTM",
      url:brochure4
    }
  ];

  const SinapiCards = [
    {
      id: 1,
      image: chestdrain,
      text: "Chest Drain System",
      url:"https://sinapibiomedical.com/"
    },
  ];

  const HalyardCards = [
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

  const InsightraCards = [
    {
      id: 1,
      image: IABP,
      text: "ULTRA - IABP 7Fr Intra Aortic Balloon Catheter Ki",
      url:"https://insightra.com/ultra-7fr-iab-catheter-kit/"
    },
  ];

  const LSICards = [
    {
      id: 1,
      image: corknot,
      text: "COR-KNOT",
      url:"https://www.lsisolutions.com/products/cor-knot"
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
        {/* Pulmonology Page Content */}
        <div className=" sm:mt-40">
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-12 items-center">
              <h2 className="z-20 text-5xl sm:text-6xl font-bold text-left flex-1">
                {name}
              </h2>
          </div>

          {/* Buttons */}
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

          {/* Company Details */}
          
          <div className="flex flex-col justify-center items-center mt-6">
            {selected === "Euroset" && (
              <>
                <img src={Euroset} alt="Euroset" className="h-30 mt-10 w-auto" />
                <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
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
                                <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
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
                               <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
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
                <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
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
                <img src={Baxter} alt="Baxter" className="h-30 w-auto" />
                <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
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
                            <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
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
                <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
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
                <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
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
                <img src={Insightra} alt="Insightra" className="h-20 w-auto" />
                             <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
                  The Insightra Ultra 7Fr catheter allows common fluid-filled
                  technology in a smaller catheter with no compromise on lumen
                  size.
                </p>
              </>
            )}
            {selected === "LSI" && (
              <>
                <img src={LSI} alt="LSI" className="h-20 w-auto" />
                               <p className="text-center mt-4 p-7 sm:p-20 lg:p-30">
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
                     <div className="grid grid-cols-1 sm:grid-cols-2 sm:mt-20 sm:mb-20 lg:grid-cols-3 my-20 gap-28 sm:m-4 sm:gap-20 m-10 lg:p-20">
              {selected === "Euroset" &&
                EuroCards.map((card) => (
               <a
                                 key={card.id}
                                 href={card.url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="no-underline"
                               >
                                 <motion.div
                                   className="relative group h-96 w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
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

              {selected === "BL" &&
                BLCards.map((card) => (
                <a key={card.id} href={card.url} className="no-underline">
                      <motion.div
                        className="relative group h-80 w-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
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
                BaxterCards.map((card) => (
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

              {selected === "Synkromax" &&
                SynkromaxCards.map((card) => (
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

              {selected === "Terumo" &&
                TerumoCards.map((card) => (
                 <a
                                   key={card.id}
                                   href={card.url}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="no-underline"
                                 >
                                   <motion.div
                                     className="relative group h-auto w-auto bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
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

              {selected === "Scanlan" &&
                ScanlanCards.map((card) => (
                 <a
                                   key={card.id}
                                   href={card.url}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="no-underline"
                                 >
                                   <motion.div
                                     className="relative group h-auto w-auto bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
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
                                    Click card to know more!
                                   </p>
                                 </a>
                ))}
               

              {selected === "Sinapi" &&
                SinapiCards.map((card) => (
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

              {selected === "Halyard" &&
                HalyardCards.map((card) => (
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

              {selected === "Insightra" &&
                InsightraCards.map((card) => (
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

              {selected === "LSI" &&
                LSICards.map((card) => (
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

          {/*Read more*/}
          <div className="flex justify-center mt-10 mb-14">
          {selected === "Euroset" && (
            <>
              <a
                href="https://www.eurosets.com/en/products/cardiopulmonary/oxygenators/"
                target="_blank"
                rel="noopener noreferrer"
              className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out"
 >
               Read More
              </a>
            </>
          )}
          {selected === "BL" && (
            <>
              <a
                href="https://www.bllifesciences.com/"
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
          {selected === "SynKromax" && (
            <>
              <a
                href="http://www.synkromax.com/"
                target="_blank"
                rel="noopener noreferrer"
className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out"
  >
                Read More
              </a>
            </>
          )}

          {selected === "Terumo" && (
            <>
              <a
                href="https://www.terumo.com/" 
                target="_blank"
                rel="noopener noreferrer"
className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out"

              >
                Read More
              </a>
            </>
          )}

          {selected === "Scanlan" && (
            <>
              <a
                href="https://www.scanlaninternational.com/"
                target="_blank"
                rel="noopener noreferrer"
             className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out"
  >
                Read More
              </a>
            </>
          )}

          {selected === "Sinapi" && (
            <>
              <a
                href="https://t.sinapibiomedical.com/"
                target="_blank"
                rel="noopener noreferrer"
className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out"
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
className="hover:bg-blue-900 hover:text-white text-blue-900 py-1 px-8 mb-14 rounded-3xl border font-bold hover:border-white border-blue-900 transition-all duration-300 ease-in-out"

              >
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

          {selected === "LSI" && (
            <>
              <a
                href="https://www.lsisolutions.com/"
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
