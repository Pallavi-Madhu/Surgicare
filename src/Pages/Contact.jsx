import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Connect from "../assets/Connect.png";
import ContactForm from "../Components/ContactForm";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import contact from "../assets/contact.jpg"

const Contact = () => {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${contact})`,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div>
        <Navbar />
        <div className="flex mt-40 lg:mt-0 min-h-screen relative flex-col lg:flex-row">
          {/*heading*/}
          <div className="flex items-center justify-center w-full lg:w-1/2 ">
            <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-800">
              Got Questions? Reach Out!
            </h2>
          </div>
          {/*image & form*/}
          <div className="w-full lg:w-1/2 relative">
            {/* <div
            className="bg-fixed bg-cover w-full h-full"
            style={{
              backgroundImage: `url(${contact})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.5, // Reduce opacity for background only
            }}
          ></div> */}
            <div className="absolute p-4 top-0 left-0 w-full h-screen flex justify-center items-center">
              <div className="w-full max-w-3xl lg:mt-40 lg:mb-10 rounded-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-center p-10 text-5xl">Corporate Office</h2>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
          <div className="ml-5 bg-white mr-5 mb-5 p-5 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-3xl text-center font-semibold">Ernakulam</h2>
            <ul className="mt-4">
              <li className="flex p-3">
                <FaMapMarkerAlt className="mr-3" />
                <span className="text-lg">
                  17 /530 A, Ground Floor, Near NSS Office, Container Road,
                  Cheranalloor PO Ernakulam, Kerala- 682034
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
          <div className="p-5 bg-white border ml-5 mr-5 mb-5 border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-3xl text-center font-semibold">Kozhikode</h2>
            <ul className="mt-4">
              <li className="flex p-5">
                <FaMapMarkerAlt className="mr-3" />
                <span className="text-lg">
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
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
