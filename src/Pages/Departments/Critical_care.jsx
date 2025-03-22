import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DepNav from "../../Components/DepNav";
import bg from "../../assets/depBG.png";
import BL from "../../assets/BL Lifsciences.png";

const DepartmentPage = ({ name, buttonImages }) => {
  const [selected, setSelected] = useState("BL");
  return (
    <>
      <div>
        <div className="relative z-50">
          {" "}
          <Navbar />
        </div>

        <div
          className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: "rgba(255, 255, 255, 0)",
            backgroundBlendMode: "overlay",
          }}
        ></div>
        <DepNav />
        <Footer />
      </div>
    </>
  );
};

export default function CriticalCare() {
  const buttonImages = [
    { id: "BL", src: BL, alt: "BL Lifesciences" },
    { id: "Insightra", src: BL, alt: "Insightra" },
  ];

  return <DepartmentPage name="CRITICAL CARE" buttonImages={buttonImages} />;
}

