import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import TwoMaps from "../Components/MapComponent";
import contact from "../assets/k.png";
const Contact = () => {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <div>
        <Navbar />
        <div className="flex mt-40 lg:mt-0 min-h-screen relative flex-col lg:flex-row">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mt-10 lg:mt-20 text-white">
              Got Questions? Reach Out!
            </h2>
            <p className="text-white text-center w-full lg:w-3/4 px-4 mt-8 lg:mt-20">
              Our team is here to assist with any inquiries or provide the
              information you need. Whether it's about our services, solutions,
              or support, we’re committed to delivering prompt and professional
              responses. Reach out today—we’re ready to help.
            </p>
          </div>
          {/* Form */}
          <div className="w-full lg:w-1/2 relative px-4">
            <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center">
              <div className="w-11/12 sm:w-full max-w-3xl lg:mt-40 lg:mb-10 rounded-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* Administrative Office Section */}
        <div className="flex flex-col text-center p-10">
          <h2 className="text-white mt-80 sm:mt-80 lg:mt-40 mb-10 font-semibold text-3xl lg:text-5xl">
            Administrative Office
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Ernakulam */}
          <div className="bg-gradient-to-b from-blue-300 to-white p-5 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl lg:text-3xl text-center font-semibold">
              Ernakulam
            </h2>
            <ul className="mt-4">
              <li className="flex p-3">
                <FaMapMarkerAlt className="mr-3" />
                <span className="text-base lg:text-2xl">
                  17 /530 A, Ground Floor, Near NSS Office, Container Road,
                  Cheranalloor PO Ernakulam, Kerala-682034
                </span>
              </li>
              <li className="flex p-3">
                <FaEnvelope className="mr-3" />
                <span>
                  <a href="mailto:office@nandanasurgicare.com">
                    office@nandanasurgicare.com
                  </a>
                </span>
              </li>
              <li className="flex p-3">
                <IoCallOutline className="mr-3" />
                <span>
                  <a href="tel:+91 9207755944">+91 9207755944</a>
                </span>
              </li>
            </ul>
          </div>
          {/* Kozhikode */}
          <div className="bg-gradient-to-b from-blue-300 to-white p-5 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl lg:text-3xl text-center font-semibold">
              Kozhikode
            </h2>
            <ul className="mt-4">
              <li className="flex p-3">
                <FaMapMarkerAlt className="mr-3" />
                <span className="text-base lg:text-2xl">
                  Vyapara Bhavan, Eranhipalam, Kozhikode, Kerala-673021
                </span>
              </li>
              <li className="flex p-3">
                <FaEnvelope className="mr-3" />
                <span>
                  <a href="mailto:office@nandanasurgicare.com">
                    office@nandanasurgicare.com
                  </a>
                </span>
              </li>
              <li className="flex p-3">
                <IoCallOutline className="mr-3" />
                <span>
                  <a href="tel:+91 9207755922">+91 9207755922</a>
                </span>
              </li>
            </ul>
          </div>
          {/* Map */}
          <div className=" mb-20 flex justify-center items-center col-span-1 md:col-span-2 px-4">
            <div className="w-full">
              <TwoMaps />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
