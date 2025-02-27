import React from "react";
import "./index.css"; // Ensure this is your Tailwind CSS file
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";

// Import Department Pages
import CriticalCare from "./Pages/Departments/Critical_care";
import CardiacSurgery from "./Pages/Departments/Cardiac_surgery";
import Cardiology from "./Pages/Departments/Cardiology";
import Neurosurgery from "./Pages/Departments/Neurosurgery";
import Ophthalmology from "./Pages/Departments/Ophthalmology";
import Pulmonology from "./Pages/Departments/Pulmonology";
import GeneralSurgery from "./Pages/Departments/GeneralSurgery";
import PlasticSurgery from "./Pages/Departments/PlasticSurgery";
import Orthopedic from "./Pages/Departments/Orthopedic";
import Anesthesiology from "./Pages/Departments/Anesthesiology";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />

            {/* Department Pages */}
            <Route path="/critical-care" element={<CriticalCare />} />
            <Route path="/cardiac-surgery" element={<CardiacSurgery />} />
            <Route path="/cardiology" element={<Cardiology />} />
            <Route path="/neurosurgery" element={<Neurosurgery />} />
            <Route path="/ophthalmology" element={<Ophthalmology />} />
            <Route path="/pulmonology" element={<Pulmonology />} />
            <Route path="/general-surgery" element={<GeneralSurgery />} />
            <Route path="/plastic-surgery" element={<PlasticSurgery />} />
            <Route path="/orthopedic" element={<Orthopedic />} />
            <Route path="/anesthesiology" element={<Anesthesiology />} />

            {/* Fallback Route */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
