import React from "react";
import "./index.css"; // Ensure this is your Tailwind CSS file
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Critical_care from "./Pages/Departments/Critical_care";
import Cardiac_surgery from "./Pages/Departments/Critical_care";
import Cardiology from "./Pages/Departments/Critical_care";
import Neurosurgery from "./Pages/Departments/Critical_care";


const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/critical-care" element={<Critical_care />} />
            <Route path="/cardiac-surgery" element={<Cardiac_surgery />} />
            <Route path="/cardiology" element={<Cardiology />} />
            <Route path="/neurosurgery" element={<Neurosurgery />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
