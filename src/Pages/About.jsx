import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import scope from "../assets/scope.jpg";

const About = () => {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url(${scope})`,
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Transparent white overlay
          backgroundBlendMode: "overlay", // Combine the image and color
        }}
      >
        <Navbar />
        <div className="flex items-center justify-center min-h-screen mt-20 px-4 sm:px-10">
          <div className="bg-white bg-opacity-90 px-6 py-6 sm:py-10 max-w-4xl w-full text-black rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-10 text-2xl sm:text-4xl font-bold whitespace-nowrap">
              <span className="mr-2">Welcome to</span>
              <span className="font-bold text-pink-500">
                Nandana SurgiCare!
              </span>
            </div>

            <div className="text-lg sm:text-3xl text-justify">
              <p className="text-indent-5">
                We are a trusted distributor based in Kochi, Kerala,
                specializing in a wide range of medical equipment, instruments,
                devices, and disposables. Our expertise lies in serving the
                critical needs of{" "}
                <span className="font-bold text-pink-500">
                  Cardiology, Vascular, Anesthesia, and Neurology
                </span>{" "}
                departments in both government and private hospitals.
              </p>
              <br />
              <p className="text-indent-5">
                Our core focus is on Cardiac Surgery products, ensuring
                high-quality solutions that meet the demanding standards of this
                field.
              </p>
              <br />
              <p className="text-indent-5">
                Below is a list of the major companies we proudly represent,
                offering you the best in medical innovation and care.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
