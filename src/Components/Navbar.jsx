import React, { useState } from "react";
import logo from "../assets/Surgicare logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);

  const toggleDepartmentsMenu = () => setIsDepartmentsOpen(!isDepartmentsOpen);

  return (
    <>
      <div>
        <div className="min-h-50 bg-black">
          <div className="w-full p-4">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
              {/* Logo Section */}
              <div className="flex flex-col items-center">
                <img src={logo} alt="SurgiCare Logo" className="h-14 w-auto" />
                <p className="text-white text-lg font-bold mt-2">
                  Nandana Surgi Care
                </p>
              </div>

              {/* Hamburger Icon for Mobile */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white focus:outline-none"
                >
                  {isMenuOpen ? (
                    // Cross Icon
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    // Hamburger Icon
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex space-x-8 items-center relative">
                <a
                  href="/"
                  className="text-white text-2xl font-bold hover:text-pink-300 transition duration-300"
                >
                  Home
                </a>
                <a
                  href="/about-us"
                  className="text-white text-2xl font-bold hover:text-pink-300 transition duration-300"
                >
                  About Us
                </a>

                {/* Departments Dropdown */}
                <div className="relative">
                  <button
                    onClick={toggleDepartmentsMenu}
                    className="text-white text-2xl font-bold hover:text-pink-300 transition duration-300"
                  >
                    Departments
                  </button>
                  {isDepartmentsOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md text-black z-10">
                      <a
                        href="/critical-care"
                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                      >
                        Critical Care
                      </a>
                      <a
                        href="/cardiac-surgery"
                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                      >
                        Cardiac Surgery
                      </a>
                      <a
                        href="/cardiology"
                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                      >
                        Cardiology
                      </a>
                      <a
                        href="/neurosurgery"
                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                      >
                        Neurosurgery
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href="/contact"
                  className="text-white text-2xl font-bold hover:text-pink-300 transition duration-300"
                >
                  Contact
                </a>
              </div>

              {/* Mobile Menu - Conditionally Rendered */}
              {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-black text-white p-4 md:hidden">
                  <a
                    href="/"
                    className="block text-lg font-bold hover:text-pink-300"
                  >
                    Home
                  </a>
                  <a
                    href="/about-us"
                    className="block text-lg font-bold hover:text-pink-300"
                  >
                    About Us
                  </a>

                  {/* Mobile Departments Dropdown */}
                  <div className="relative">
                    <button
                      onClick={toggleDepartmentsMenu}
                      className="block text-lg font-bold hover:text-pink-300"
                    >
                      Departments
                    </button>
                    {isDepartmentsOpen && (
                      <div className="bg-white shadow-lg rounded-md text-black">
                        <a
                          href="/critical-care"
                          className="block px-4 py-2 text-sm hover:bg-gray-200"
                        >
                          Critical Care
                        </a>
                        <a
                          href="/cardiac-surgery"
                          className="block px-4 py-2 text-sm hover:bg-gray-200"
                        >
                          Cardiac Surgery
                        </a>
                        <a
                          href="/cardiology"
                          className="block px-4 py-2 text-sm hover:bg-gray-200"
                        >
                          Cardiology
                        </a>
                        <a
                          href="/neurosurgery"
                          className="block px-4 py-2 text-sm hover:bg-gray-200"
                        >
                          Neurosurgery
                        </a>
                      </div>
                    )}
                  </div>

                  <a
                    href="/contact"
                    className="block text-lg font-bold hover:text-pink-300"
                  >
                    Contact
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
