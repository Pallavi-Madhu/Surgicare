import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className={`bg-gray-700`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-8  bg-clip-text text-white">
            Get in Touch with Us!
          </h2>
          
          
        </div>

       {/* Company Info Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12 pt-8 border-t border-indigo-400/30">
          {/* Company Info */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
              <h3 className="text-3xl font-bold text-white">
                Nandana SurgiCare
              </h3>
            </div>
            <p className="text-gray-100 text-xl leading-relaxed">
              Delivering health solutions for a better tomorrow through world-class biomedical equipment distribution.
            </p>
          </div>

          {/* First Address */}
          <div className="flex items-start space-x-3 p-4 rounded-lg backdrop-blur-sm hover:bg-white/70 transition-all duration-300">
            <FaMapMarkerAlt className="w-6 h-6 text-white mt-1 flex-shrink-0" />
            <div className="text-lg leading-relaxed">
              <strong className="text-white">17/85/A1, "Vyshnavam"</strong>
              <div className="text-white">
                Near Palakkal Bhagavathi Temple<br />
                Container Terminal Road<br />
                Cheranalloor, Cochin - 682034
              </div>
            </div>
          </div>

          {/* Second Address */}
          <div className="flex items-start space-x-3 p-4 rounded-lg backdrop-blur-sm hover:bg-white/70 transition-all duration-300">
            <FaMapMarkerAlt className="w-6 h-6 text-white mt-1 flex-shrink-0" />
            <div className="text-lg leading-relaxed">
              <div className="text-white">
                Vyapara Bhavan,<br />
                Eranhipalam,<br />
                Kozhikode, Kerala-673021
              </div>
            </div>
          </div>
        </div>


            {/* Phone */}
            <div className="flex flex-col items-center space-y-4 mb-8">
            {/* Phone */}
            <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg backdrop-blur-sm border border-indigo-200/50 hover:bg-white/70 transition-all duration-300 w-fit">
              <IoCallOutline className="w-6 h-6 text-indigo-100 flex-shrink-0" />
              <div className="text-lg flex">
                <a
                  href="tel:+919847933898"
                  className="hover:text-indigo-300 text-white transition-colors duration-200 font-semibold"
                >
                  +91 9847933898
                </a>
                <span className="mx-2 text-indigo-400">|</span>
                <a
                  href="tel:+919207755944"
                  className="hover:text-indigo-300 text-white  transition-colors duration-200 font-semibold"
                >
                  +91 9207755944
                </a>
              </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm  hover:bg-white/70 transition-all duration-300">
              <FaEnvelope className="w-6 h-6 text-indigo-200 flex-shrink-0" />
              <a
                href="mailto:office@nandanasurgicare.com"
                className="text-lg hover:text-indigo-200 text-white transition-colors duration-200 font-semibold"
              >
                office@nandanasurgicare.com
              </a>
            </div>

            {/* Privacy Policy */}
          <div className="pt-4 flex justify-center pb-10">
            <a
            href="/privacy-policy"
            className="text-white hover:text-indigo-200 font-semibold text-lg transition-colors duration-200  underline decoration-2 underline-offset-1"
            >
            Privacy Policy
            </a>
          </div>
        
        {/* Copyright Section */}
        <div className="border-t border-indigo-400/30 pt-8 text-center"></div>
          <p className="text-gray-100 text-lg text-center">
            &copy; {new Date().getFullYear()} Nandana SurgiCare. All rights reserved.
          </p>
        
      </div>
    </footer>
  );
};

export default Footer;