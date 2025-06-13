import React, { useState } from "react";
import Navbar2 from "../../Components/Navbar2";
import Footer from "../../Components/Footer";
import DepNav from "../../Components/DepNav";
//import { motion } from "framer-motion";

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

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Package2, Building, ChevronRight, Star, ShoppingCart, ArrowRight } from 'lucide-react';
 


const CardiacSidebarDesign = () => {
  const [activeCompany, setActiveCompany] = useState("Euroset");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const companies = {
      Euroset: {
      logo: Euroset, 
      name: "Eurosets",
      bgColor: "bg-green-50",
      accentColor: "green",
      description: "Swiss manufacturer offering a range of advanced oxygenator systems for pediatric and adult use.",
      website: "https://www.eurosets.com/en/",
      established: "1991", // Update this if known
      headquarters: "Italy",
      products: [
        {
          id: "kompass",
          image: oxygenerator,
          name: "Oxygenator Adult Kompass",
          category: "Oxygenator",
          description: "Adult oxygenator for extracorporeal circulation",
          url: "https://euromed.ch/wp-content/uploads/2023/01/kompass_brochure.pdf",
        },
        {
          id: "trilly-ped",
          image: trilly1,
          name: "Trilly Pediatric Oxygenator",
          category: "Oxygenator",
          description: "Pediatric oxygenator with integrated arterial filter",
          url: trilly2pdf,
        },
        {
          id: "trilly-infant",
          image: trilly2,
          name: "Trilly Infant-Pediatric Oxygenator",
          category: "Oxygenator",
          description: "Infant-paediatric oxygenator with modular cascade filtration",
          url: trilly1pdf,
        },
        {
          id: "remowell",
          image: remowell,
          name: "Remowell Oxygenator",
          category: "Oxygenator",
          description: "Dual chamber adult oxygenator with lipid and leukocyte reduction",
          url: remowellpdf,
        },
        {
          id: "horizon",
          image: horizon,
          name: "Horizon Oxygenator",
          category: "Oxygenator",
          description: "Single chamber adult oxygenator",
          url: horizonpdf,
        },
        {
          id: "ecmo",
          image: ecmooxy,
          name: "ECMO",
          category: "Oxygenator",
          description: "Extracorporeal membrane oxygenation system",
          url: ecmooxypdf,
        },
      ],
    },

    Scanlan: {
      logo: Scanlan, 
      name: "Scanlan International",
      bgColor: "bg-green-50",
      accentColor: "green",
      description: "Premier provider of high-quality surgical instruments trusted globally by healthcare professionals.",
      website: "https://www.scanlaninternational.com/",
      established: "1921",
      headquarters: "US",
      products: [
        {
          id: "product-catalog",
          image: coverpg,
          name: "Scanlan Product Catalog",
          category: "Surgical Instruments",
          description: "Comprehensive catalog showcasing Scanlan's surgical instrument range",
          url: sc,
        },
      ],
    },
    BL: {
      logo: BL, 
      name: "BL Lifesciences",
      bgColor: "bg-green-50",
      accentColor: "green",
      description: "Indian manufacturer specializing in anesthesia, critical care, interventional systems, and monitoring equipment.",
      website: "https://www.bllifesciences.com/",
      established: "1995", 
      headquarters: "India",
      products: [
        {
          id: "pressure-monitoring-lines",
          image: image1,
          name: "Pressure Monitoring Lines",
          category: "Invasive Pressure System",
          description: "Used for accurate hemodynamic pressure monitoring",
          url: "https://www.bllifesciences.com/products/invasive-pressure-system/",
        },
        {
          id: "disposable-pressure-transducer",
          image: image2,
          name: "Disposable Pressure Transducer",
          category: "Interventional Systems",
          description: "Transducer for measuring blood pressure directly",
          url: "https://www.bllifesciences.com/products/interventional-systems/",
        },
        {
          id: "hme-filter",
          image: image3,
          name: "HME Filter",
          category: "Anesthesia & Critical Care",
          description: "Heat and moisture exchanger for ventilatory support",
          url: "https://www.bllifesciences.com/products/anesthesia-and-critical-care/",
        },
        {
          id: "cable-suit",
          image: image4,
          name: "Interface Cable for Monitor",
          category: "Monitoring Accessories",
          description: "Compatible interface cable for pressure monitors",
          url: cable,
        },
        {
          id: "three-way-extension",
          image: image5,
          name: "3-Way Extension (10/25/50cm)",
          category: "Interventional Systems",
          description: "Pressure line with three-way extension",
          url: "https://www.bllifesciences.com/products/interventional-systems/",
        },
        {
          id: "iv-set-vented",
          image: "/Cardiology/IVset.png",
          name: "IV SET VENTED",
          category: "Infusion Systems",
          description: "Sterile vented intravenous administration set",
          url: "https://bllifesciences.com/wp-content/uploads/2022/08/BL-Lifesciences.pdf",
        },
        {
          id: "cvp-catheter",
          image: image7,
          name: "1 Lumen CVP Catheter",
          category: "Central Venous Catheters",
          description: "Used for measuring central venous pressure",
          url: "https://www.bllifesciences.com/products/central-venous-catheters/",
        },
        {
          id: "expandable-circuit",
          image: image8,
          name: "Adult Expandable Circuit",
          category: "Ventilation",
          description: "Circuit designed for adult mechanical ventilation",
          url: "https://www.bllifesciences.com/products/anesthesia-and-critical-care/",
        },
        {
          id: "lung-exerciser",
          image: image9,
          name: "Lung Exerciser",
          category: "Respiratory Care",
          description: "Improves lung function and post-op recovery",
          url: "https://www.bllifesciences.com/products/anesthesia-and-critical-care/",
        },
        {
          id: "nebulizer-mask",
          image: image11,
          name: "Adult Nebulizer Mask Kit (3026)",
          category: "Respiratory Therapy",
          description: "Aerosol therapy kit with adult mask",
        },
        {
          id: "ventilator-circuit-plain",
          image: image12,
          name: "Ventilator Circuit Plain Adult",
          category: "Ventilation",
          description: "Basic adult ventilator breathing circuit",
        },
        {
          id: "warming-blankets",
          image: image10,
          name: "Warming Blankets",
          category: "Patient Warming",
          description: "Used in hypothermia prevention during surgery",
        },
        {
          id: "bains-circuit-aero",
          image: image16,
          name: "Adult Bains Circuit-AERO (2001)",
          category: "Anesthesia Circuit",
          description: "Efficient adult circuit for anesthesia delivery",
        },
        {
          id: "breathing-circuit-expandable",
          image: image17,
          name: "Adult Breathing Circuit Expandable (1010-E)",
          category: "Ventilation",
          description: "Expandable breathing circuit for adults",
        },
        {
          id: "extra-limb-circuit",
          image: image18,
          name: "Expandable Circuit w/ Extra Limb (1010-01-E)",
          category: "Ventilation",
          description: "Includes additional limb and concentrator connection",
        },
        {
          id: "white-circuit",
          image: image19,
          name: "Adult Breathing Circuit White (REF:1010)",
          category: "Ventilation",
          description: "Color-coded white adult ventilator circuit",
        },
        {
          id: "double-trap-circuit",
          image: image20,
          name: "Double Water Trap Ventilator Circuit (REF:1012)",
          category: "Ventilation",
          description: "Designed with two water traps for safety",
        },
        {
          id: "bvl-filter-aero",
          image: image21,
          name: "BVL Filter AERO (2010)",
          category: "Air Filtration",
          description: "Bacterial and viral filter for ventilator use",
        },
        {
          id: "cpap-circuit-4000",
          image: image22,
          name: "CPAP Circuit Smooth Bore (4000)",
          category: "CPAP",
          description: "1.8m smooth bore tubing for CPAP support",
        },
        {
          id: "cpap-with-mask",
          image: image23,
          name: "CPAP Circuit w/ Mask & Harness (Adult)",
          category: "CPAP",
          description: "Complete CPAP circuit for adult patients",
        },
        {
          id: "jackson-rees",
          image: image24,
          name: "Pediatric Bain Circuit - Jackson Rees (2002)",
          category: "Anesthesia Pediatric",
          description: "Jackson Rees circuit for pediatric patients",
        },
        {
          id: "pediatric-breathing-circuit",
          image: image25,
          name: "Pediatric Breathing Circuit (1020)",
          category: "Ventilation Pediatric",
          description: "Ventilator breathing support for children",
        },
        {
          id: "t-connector",
          image: image26,
          name: "T-Connector (1500)",
          category: "Connectors",
          description: "Sterile T-type tubing connector",
        },
        {
          id: "bougie-adult",
          image: image27,
          name: "Bougie (Adult)",
          category: "Airway Management",
          description: "Introducer for difficult airway management",
        },
        {
          id: "bronchial-double-lumen",
          image: image13,
          name: "Bronchial Double Lumen Tube",
          category: "Endotracheal Tubes",
          description: "Used for lung isolation during thoracic surgery",
        },
        {
          id: "cuff-meter",
          image: image14,
          name: "Cuff Measuring Meter for E.T. Tube",
          category: "Airway Accessories",
          description: "Measures cuff pressure accurately",
        },
        {
          id: "nasopharyngeal-airway",
          image: image15,
          name: "Nasopharyngeal Airway (28, 30, 34)",
          category: "Airway Management",
          description: "Soft, flexible airway access tool",
        },
        {
          id: "fiberoptic-laryngoscope",
          image: image28,
          name: "Fiberoptic Laryngoscope (4 Blades)",
          category: "Airway Equipment",
          description: "Laryngoscope set with fiberoptic lighting",
        },
        {
          id: "introducer-needle",
          image: image29,
          name: "Introducer Needle 18 G x 7 cm",
          category: "IV Access",
          description: "Sterile introducer needle for catheterization",
        },
        {
          id: "bougie-adult-coude",
          image: image30,
          name: "Bougie Introducer Adult, Coudé Tip (15FR x 70cm)",
          category: "Airway Management",
          description: "Coudé tip helps with tracheal intubation",
        },
        {
          id: "bougie-pediatric",
          image: image31,
          name: "Bougie Introducer Pediatric, Coudé Tip (10FR x 70cm)",
          category: "Pediatric Airway",
          description: "Specialized for pediatric intubation",
        },
        {
          id: "ported-adult",
          image: image32,
          name: "Adult Ported Introducer (15FR x 70cm)",
          category: "Airway Management",
          description: "Ported for suction or oxygen delivery",
        },
        {
          id: "ported-pediatric",
          image: image33,
          name: "Pediatric Ported Introducer (10FR x 70cm)",
          category: "Pediatric Airway",
          description: "Allows additional access during intubation",
        },
        {
          id: "neonatal-stylette",
          image: image34,
          name: "Neonatal Stylette (2.0mm, 6FR x 255mm)",
          category: "Neonatal",
          description: "Stylette for neonatal airway placement",
        },
        {
          id: "pediatric-stylette",
          image: image35,
          name: "Pediatric Stylette (3.0mm, 8FR x 300mm)",
          category: "Pediatric Airway",
          description: "For guiding ETT during pediatric intubation",
        },
        {
          id: "adult-stylette",
          image: image36,
          name: "Adult Stylette (4.0mm, 10FR x 335mm)",
          category: "Airway Equipment",
          description: "Reusable adult stylette for ETT placement",
        },
        {
          id: "malleable-introducer",
          image: image37,
          name: "Adult Malleable Introducer (15FR x 70cm)",
          category: "Airway Management",
          description: "Adjustable for ease of intubation",
        },
        {
          id: "aluminum-stylette",
          image: image38,
          name: "Sterile Adult Aluminum Stylette (9FR x 16)",
          category: "Airway Equipment",
          description: "Made of durable aluminum, sterile packed",
        },
        {
          id: "wendl-airways",
          image: image39,
          name: "Wendl Nasopharyngeal Airways (Silicone) 12FR",
          category: "Airway Management",
          description: "Flexible silicone for nasopharyngeal access",
        },
      ],
    },
  Baxter : {
      logo: Baxter, 
      name: "Baxter",
      bgColor: "bg-green-50", 
      accentColor: "green",
      description:
        "Baxter delivers advanced surgical products and solutions that improve patient care in the operating room.",
      website: "https://www.baxter.com",
      established: "1931",
      headquarters: "US",
      products: [
        {
          id: "floseal",
          image: floseal,
          name: "Floseal",
          category: "Hemostatic Agent",
          description: "A hemostatic matrix for rapid and effective bleeding control.",
          url: "https://ecatalog.baxter.com/ecatalog/loadproduct.html?cid=20016&lid=10001&hid=20001&pid=1472740",
        },
        {
          id: "hemopatch",
          image: hemopatch,
          name: "Hemopatch",
          category: "Hemostatic Patch",
          description: "Sealing hemostat patch for surgical bleeding management.",
          url: "https://advancedsurgery.baxter.eu/hemopatch",
        },
        {
          id: "tiseel",
          image: "/Ophthalmology/Tiseel.jpg",
          name: "Tiseel",
          category: "Fibrin Sealant",
          description: "Fibrin-based surgical sealant used to support hemostasis.",
          url: "https://www.baxter.com/healthcare-professionals/surgical-care/tisseel-fibrin-sealant",
        },
        {
          id: "coseal",
          image: "/coseal.png",
          name: "Coseal",
          category: "Surgical Sealant",
          description: "Synthetic surgical sealant designed to prevent leaks post-operation.",
          url: "https://advancedsurgery.baxter.com/coseal",
        },
      ],
    },
 Synkromax : {
  logo: Synkromax, 
  name: "Synkromax",
  bgColor: "bg-green-50", 
  accentColor: "green",
  description:
    "Synkromax provides specialized cardiovascular surgical solutions, including pericardial patches designed for optimal biocompatibility.",
  website: "https://www.reachmedicalsystems.com/synkromax",
  established: "2009", 
  headquarters: "India",
  products: [
    {
      id: "bovine-patch",
      image: bovinepatch,
      name: "Bovine Pericardial Patch",
      category: "Cardiovascular",
      description: "Durable bovine pericardial patch for cardiovascular surgical applications.",
      url: "https://www.reachmedicalsystems.com/synkromax",
    },
  ],
},
 Terumo : {
  logo: Terumo, 
  name: "Terumo",
  bgColor: "bg-green-50",
  accentColor: "green",
  description:
    "Terumo offers advanced cardiac and vascular surgical technologies including EVH systems, stabilizers, and synthetic grafts.",
  website: "https://www.terumo.com/",
  established:"1921",
  headquarters:"Japan",
  products: [
    {
      id: "evh",
      image: evhs,
      name: "Endoscopic Vessel Harvesting (EVH) System",
      category: "Cardiovascular",
      description: "Minimally invasive EVH system for coronary artery bypass grafting.",
      url: "https://terumocv.com/evh/"
    },
    {
      id: "stabilizer",
      image: stabilizer,
      name: "Stabilizer",
      category: "Cardiac Surgery",
      description: "Titan™ Stabilizer Attachments for beating heart procedures.",
      url: "https://www.terumo-europe.com/en-emea/products/titan%E2%84%A2-stabilizer-attachments-beating-heart"
    },
    {
      id: "gelsoft",
      image: gelsoft,
      name: "Gelsoft Plus",
      category: "Vascular Graft",
      description: "Knitted gelatin-coated vascular graft.",
      url: brochure1
    },
    {
      id: "gelweave",
      image: gelwieve,
      name: "Gelweave™",
      category: "Vascular Graft",
      description: "Knitted woven polyester vascular prostheses.",
      url: brochure2
    },
    {
      id: "aortic",
      image: aortic,
      name: "Gelweave™ Aortic Surgical Grafts",
      category: "Aortic Surgery",
      description: "Specialized grafts for aortic root and arch surgery.",
      url: brochure3
    },
    {
      id: "valsalva",
      image: valsalva,
      name: "Gelweave Valsalva™",
      category: "Aortic Graft",
      description: "Aortic root graft with natural sinus design.",
      url: brochure4
    }
  ]
},
Sinapi : {
  logo: Sinapi, 
  name: "Sinapi Biomedical",
  bgColor: "bg-green-50",
  accentColor: "green",
  description:
    "Sinapi Biomedical develops innovative drainage systems focused on patient comfort and clinical efficiency.",
  website: "https://sinapi.co.za/",
  products: [
    {
      id: "chestdrain",
      image: chestdrain,
      name: "Chest Drain System",
      category: "Thoracic Surgery",
      description: "Advanced chest drainage system with fluid and air evacuation.",
      url: "https://t.sinapibiomedical.com/"
    }
  ]
},
Halyard : {
  logo: Halyard,
  name: "Halyard Health",
  bgColor: "bg-green-50",
  accentColor: "green",
  description:
    "Halyard contributes to the surgical domain with high-quality gowns, drapes, and PPE ensuring infection control and comfort.",
  website: "https://products.halyardhealth.com/",
  products: [
    {
      id: "drapes",
      image: drapes,
      name: "Surgical Drapes",
      category: "Infection Control",
      description: "Sterile drapes for various surgical applications.",
      url: "https://products.halyardhealth.com/products/surgical-solutions/surgical-drapes"
    },
    {
      id: "gowns",
      image: gowns,
      name: "Surgical Gowns",
      category: "Surgical Apparel",
      description: "Surgical gowns designed for protection and comfort.",
      url: "https://products.halyardhealth.com/products/surgical-solutions/surgical-gowns"
    },
    {
      id: "masks",
      image: masks,
      name: "Surgical Masks",
      category: "Personal Protection",
      description: "Medical-grade masks offering fluid resistance and breathability.",
      url: "https://products.halyardhealth.com/products/personal-protection/facial-respiratory-protection/medical-surgical-masks"
    }
  ]
},
Insightra: {
    logo: Insightra, 
    name: "Insightra Medical",
    bgColor: "bg-green-50",
    accentColor: "green",
    description: "Advanced intra-aortic balloon pump for hemodynamic support.",
    website: "https://insightra.com/",
    established: "2001",
    headquarters: "USA",
    products: [
      {
        id: "iabp",
        image: "/Cardiology/IABP.png",
        name: "IABP",
        category: "Cardiovascular Support",
        description: "Intra-aortic balloon pump system.",
        url: "https://insightra.com/wp-content/uploads/2019/01/ULTRA7FR_IAB_product_brochure.pdf"
      }
    ]
    }
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
          <div className="p-6 border-b bg-gradient-to-br from-green-900 via-green-500 to-green-900 text-white ">
            <h1 className="text-4xl font-bold pt-10 sm:pt-0 mb-2">CARDIAC SURGERY</h1>
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
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default CardiacSidebarDesign;
