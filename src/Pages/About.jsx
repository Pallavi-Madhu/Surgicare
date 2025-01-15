import * as React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import scope from "../assets/hos.png";
import AccordionSection from "../Components/Accordion"; // Import the AccordionSection

const About = () => {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-fixed bg-center "
        style={{
          backgroundImage: `url(${scope})`,
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Transparent white overlay
          backgroundBlendMode: "overlay", // Combine the image and color
        }}
      >
        <Navbar />
        <div className="flex items-center justify-center pt-10 pb-10 sm:min-h-screen px-4 sm:px-10 mt-20 sm:pt-0 sm:pb-0">
          <div className="bg-gradient-to-b from-blue-300 to-white bg-opacity-90 px-6 py-6 sm:py-10 max-w-4xl w-full text-black font-light rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-10 text-2xl sm:text-4xl font-bold whitespace-nowrap">
              <span className="mr-2">Welcome to</span>
              <span className="font-bold text-blue-900">
                Nandana SurgiCare!
              </span>
            </div>

            <div className="text-lg sm:text-3xl text-justify">
              <p className="text-indent-5">
                We are a trusted distributor based in Kochi, Kerala,
                specializing in a wide range of medical equipment, instruments,
                devices, and disposables. Our expertise lies in serving the
                critical needs of{" "}
                <span className="font-bold text-blue-900">
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
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-lg sm:text-4xl flex items-center justify-center px-4 sm:px-80 whitespace-nowrap">
            Here are the key companies we represent
          </p>
        </div>

        {/* Accordion section component */}
        <div className="p-6 mb-10">
          <AccordionSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;