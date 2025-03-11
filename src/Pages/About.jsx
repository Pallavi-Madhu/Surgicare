import * as React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import scope from "../assets/hos.png";
import AccordionSection from "../Components/Accordion"; // Import the AccordionSection
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div
        className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url(${scope})`,
          backgroundColor: "rgba(255, 255, 255, 0.4)", // Transparent white overlay
          backgroundBlendMode: "overlay", // Combine the image and color
        }}
      >
        <Navbar />
        <motion.div
          className="flex items-center justify-center pt-20 pb-20 sm:min-h-screen px-4 sm:px-10 sm:pt-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-b from-blue-300 to-white bg-opacity-90 p-10 sm:py-10 max-w-4xl w-full text-black font-light rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {/* Header Section */}
            <div className="flex items-center justify-center mb-10 text-2xl sm:text-4xl font-bold whitespace-nowrap">
              <span className="m-2">Welcome to</span>
              <span className="font-bold text-blue-900">
                Nandana SurgiCare!
              </span>
            </div>

            {/* Content Section */}
            <div className="text-lg sm:text-3xl text-center">
              <motion.p
                className="text-indent-5"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              >
                We are a trusted distributor based in Kochi, Kerala,
                specializing in a wide range of medical equipment, instruments,
                devices, and disposables. Our expertise lies in serving the
                critical needs of{" "}
                <span className="font-bold text-blue-900">
                  Cardiology, Vascular, Anesthesia, and Neurology
                </span>{" "}
                departments in both government and private hospitals.
              </motion.p>
              <br />
              <motion.p
                className="text-indent-5"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              >
                Our core focus is on Cardiac Surgery products, ensuring
                high-quality solutions that meet the demanding standards of this
                field.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
        <div>
          <p className="font-semibold text-lg sm:text-4xl flex items-center justify-center px-4 sm:px-80 whitespace-nowrap">
            Here are the key companies we represent
          </p>
        </div>

        {/* Accordion section component */}
        <div className="p-4 mb-20">
          <AccordionSection />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;