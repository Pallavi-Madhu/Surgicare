import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <div className="min-h-screen grid grid-rows-[1fr_auto] bg-blue-400">
        <Navbar />
        <Footer />
      </div>
    </>
  );
};

export default Home;
