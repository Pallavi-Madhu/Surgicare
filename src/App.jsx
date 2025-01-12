import React from "react";
import "./index.css"; // Ensure this is your Tailwind CSS file
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
