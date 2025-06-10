import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-300 w-full text-black">
      {/* Footer Text Section */}
      <div className="py-8 px-4">
        <h2 className="text-3xl font-bold text-center  mb-6">
          Get in touch with us!
        </h2>
        <div className="text-center">
          <ul className="space-y-4">
            {/* Address */}
            <li className="flex items-center justify-center space-x-2">
              <FaMapMarkerAlt className="text-white" />
              <span className="text-2xl">
                17/85/A1, “Vyshnavam” ,
                Near Palakkal Bhagavathi Temple, 
                Container Terminal Road,
                Cheranalloor,
                Cochin -682034
              </span>
            </li>
            {/* Phone */}
            <li className="flex items-center justify-center space-x-2">
              <IoCallOutline className="text-gray-500" />
              <a
                href="tel:+91 9847933898, +91 9207755944 "
                className="text-xl hover:text-blue-700"
              >
                +91 9847933898 
              </a>
                  <a
                href="tel:+91 9847933898, +91 9207755944 "
                className="text-xl hover:text-blue-700"
              >
                +91 9207755944
              </a>
            </li>
            {/* Email */}
            <li className="flex items-center justify-center space-x-2">
              <FaEnvelope className="text-gray-500" />
              <a
                href="mailto:office@nandanasurgicare.com"
                className="text-xl hover:text-blue-700"
              >
                office@nandanasurgicare.com
              </a>
            </li>
            {/* Privacy Policy */}
            <li className="text-xl text-blue-900 font-semibold hover:text-gray-500 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="border-gray-700" />

      {/* Copyright Section */}
      <div className="py-4 text-center text-lg text-gray-700">
        <p>
          &copy; {new Date().getFullYear()} Nandana Surgicare. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
