import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import star from "../assets/star.svg";
import person from "../assets/person.svg";
import {Link} from "react-router-dom";
import love from "../assets/love.png"

const Footer = () => {

  
  return (
   <footer className="relative">
  {/* Background image */}
<div className="relative z-0">
  {/* Background image */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${love})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 0,
    
    }}
  />

  {/* Overlay (semi-transparent black) */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.77)', // dark overlay
      zIndex: 1,
      
    }}
  />


        {/* Main Footer Content */}
      <div className="relative lg:mx-40 md:mx-20 mx-6  py-10 z-20 ">
        <div className="text-center  mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8  bg-clip-text text-white">
            Get in Touch with Us!
          </h2>
          
          
        </div>

       {/* Company Info Section */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 sm:gap-8 mb-12 pt-8 border-t border-indigo-400/30">
          {/* Company Info */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Nandana SurgiCare
              </h3>
            </div>
            <p className="text-gray-100 text-xl leading-relaxed">
              Delivering health solutions for a better tomorrow through world-class biomedical equipment distribution.
            </p>
          </div>

          {/* First Address */}
          <div className="flex items-start justify-center space-x-3 p-4 rounded-lg backdrop-blur-sm hover:bg-white/70 transition-all duration-300">
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
          <div className="flex items-start justify-center space-x-3 p-4 rounded-lg backdrop-blur-sm hover:bg-white/70 transition-all duration-300">
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
            <div className="flex flex-col items-center space-y-4 mb-4 sm:mb-8">
            {/* Phone */}
            <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg backdrop-blur-sm border border-indigo-200/50 hover:bg-white/70 transition-all duration-300 w-fit">
              <IoCallOutline className="w-6 h-6 text-indigo-100 flex-shrink-0" />
              <div className="text-sm sm:text-lg flex">
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
             {/* Contact-Us svg */}
            <div className="flex justify-center pt-4">
             <Link to="/contact">
             <div className="  bg-white flex  flex-row items-center space-x-2 px-4 py-3 bg-white-400 border border-white/40  ">
              <img
                   src={person}
                   alt="person"
                   className="w-6 h-6 filter grayscale brightness-50"
                 />

          <span className="text-gray-600 text-lg hover:text-indigo-600 text-white transition-colors duration-200 font-bold">Contact</span>
        </div>
        </Link>
        </div>

             {/* Star Line */}
        <div className="relative w-full flex items-center justify-center py-4 sm:py-8">
          <div className="w-full border-t border-white/40" />
        <div className="relative z-10 px-2">
          <img src={star} alt="Star" className="w-12 h-12 sm:h-18 sm:w-18 " />
          {/* Or <Star className="w-6 h-6" /> if imported as component */}
        </div>
        <div className="w-full border-t border-white/40" />
        </div>

            {/* Privacy Policy */}
          <div className="sm:pt-6 flex justify-center pb-4">
            <a
            href="/privacy-policy"
            className="text-white hover:text-indigo-200 font-semibold text-lg transition-colors duration-200  underline decoration-2 underline-offset-1"
            >
            Privacy Policy
            </a>
          </div>
        
        {/* Copyright Section */}
          <p className="text-gray-100 text-lg text-center">
            &copy; {new Date().getFullYear()} Nandana SurgiCare. All rights reserved.
          </p>
           </div>
    </div>
    </footer>
  );
};

export default Footer;
 