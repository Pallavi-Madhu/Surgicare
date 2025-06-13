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
        <div className="grid md:grid-cols-3 gap-8 mb-12 pt-8 border-t border-indigo-400/30">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
             
              <h3 className="text-3xl font-bold  text-white">
                Nandana SurgiCare
              </h3>
            </div>
            <p className="text-gray-100 text-xl leading-relaxed">
              Delivering health solutions for a better tomorrow through world-class biomedical equipment distribution.
            </p>
          </div>
{/*           
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 text-indigo-800">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about-us' },
                { name: 'Products', href: '/products' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Address */}
            <div className="flex items-start justify-center space-x-3 p-4 rounded-lg backdrop-blur-sm  hover:bg-white/70 transition-all duration-300">
              <FaMapMarkerAlt className="w-6 h-6 text-white mt-1 flex-shrink-0" />
              <div className="text-lg leading-relaxed">
                <strong className="text-white ">17/85/A1, "Vyshnavam"</strong><
                  div className="text-white">
                    Near Palakkal Bhagavathi Temple<br />
                Container Terminal Road<br />
                Cheranalloor, Cochin - 682034</div><br />
              
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm border border-indigo-200/50 hover:bg-white/70 transition-all duration-300">
              <IoCallOutline className="w-6 h-6 text-indigo-100 flex-shrink-0" />
              <div className="text-lg">
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
          <div className="pt-4 flex justify-center">
  <a
    href="/privacy-policy"
    className="text-white hover:text-indigo-200 font-semibold text-lg transition-colors duration-200 underline decoration-2 underline-offset-4"
  >
    Privacy Policy
  </a>
</div>

          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 text-white">Follow Us</h4>
            <div className="flex justify-center text-right space-x-4">
              {[
                { name: 'Facebook', icon: 'F' },
                { name: 'Twitter', icon: 'T' },
                { name: 'LinkedIn', icon: 'in' }
              ].map((social) => (
                <div 
                  key={social.name} 
                  className="w-12 h-12 bg-gray-500 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 shadow-lg"
                >
                  <span className="text-white font-bold">{social.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-indigo-400/30 pt-8 text-center">
          <p className="text-gray-100 text-lg">
            &copy; {new Date().getFullYear()} Nandana SurgiCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;