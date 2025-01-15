import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-blue-300 text-black ml-2 mr-2" >
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
              <span className="text-lg">
                17 /530 A, Ground Floor, Near NSS Office, Container Road,
                Cheranalloor PO Ernakulam, Kerala- 682034
              </span>
            </li>
            {/* Phone */}
            <li className="flex items-center justify-center space-x-2">
              <IoCallOutline className="text-white" />
              <a
                href="tel:+91 9207755944, +91 9207755955"
                className="text-lg hover:text-white"
              >
                +91 9207755944
              </a>
            </li>
            {/* Email */}
            <li className="flex items-center justify-center space-x-2">
              <FaEnvelope className="text-white" />
              <a
                href="mailto:office@nandanasurgicare.com"
                className="text-lg hover:text-white"
              >
                office@nandanasurgicare.com
              </a>
            </li>
            {/* Privacy Policy */}
            <li className="text-lg text-white hover:text-gray-500 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="border-gray-700" />

      {/* Copyright Section */}
      <div className="py-4 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Nandana Surgicare. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
