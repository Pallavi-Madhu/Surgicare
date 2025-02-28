import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Departments from "../../Components/DepNav"

const Ophthalmology = () => {
  

  return (
    <>
      <Navbar />
      <div className="h-screen">Ophthalmology</div>
      <Departments/>
      <Footer />
    </>
  );
};

export default Ophthalmology;
