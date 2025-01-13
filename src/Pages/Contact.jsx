import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Connect from "../assets/Connect.png";
import ContactForm from "./ContactForm";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen relative">
        {/*heading*/}
        <div className="flex items-center justify-center w-1/2 p-8">
          <h2 className="text-7xl font-bold text-center text-gray-800">
            Got Questions? Reach Out!
          </h2>
        </div>
        {/*image*/}
        <div className="w-1/2 relative">
          <div
            className="bg-fixed bg-cover w-full h-full"
            style={{
              backgroundImage: `url(${Connect})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.5, // Reduce opacity for background only
            }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
            <div className="w-full max-w-3xl  mt-40 mb-10  rounded-lg ">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="text-center p-20 text-5xl">Corporate Office</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="ml-5 mr-5 mb-5 p-5 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-3xl text-center font-semibold">Ernakulam</h2>
          <ul className="mt-4">
            <li className="flex p-3 ">
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
        <div className="p-5 border ml-5 mr-5 mb-5 border-gray-300 rounded-lg shadow-lg">
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
  );
};

export default Contact;

