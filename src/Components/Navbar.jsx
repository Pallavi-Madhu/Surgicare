import React, { useState } from "react";
import logo from "../assets/Surgicare logo.png";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isDisposablesOpen, setIsDisposablesOpen] = useState(false);

  const toggleProductsMenu = () => setIsProductsOpen(!isProductsOpen);
  const toggleDisposablesMenu = () => setIsDisposablesOpen(!isDisposablesOpen);

  const departments = [
    { name: "Critical Care", href: "/critical-care" },
    { name: "Cardiac Surgery", href: "/cardiac-surgery" },
    { name: "Cardiology", href: "/cardiology" },
    { name: "Neurosurgery", href: "/neurosurgery" },
    { name: "Ophthalmology", href: "/ophthalmology" },
    { name: "Pulmonology", href: "/pulmonology" },
    { name: "General Surgery", href: "/general-surgery" },
    { name: "Plastic Surgery", href: "/plastic-surgery" },
    { name: "Orthopedic", href: "/orthopedic" },
    { name: "Anesthesiology", href: "/anesthesiology" },
  ];

  const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};
 
const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

  return (
    <>
      <div>
        <div className=" top-0 w-full bg-white relative z-50 ">
          <div className="w-full m-5">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
              {/* Logo Section */}
              <div className="flex flex-col items-center">
                <img src={logo} alt="SurgiCare Logo" className="h-14 w-auto" />
              </div>
              <p className="text-3xl sm:text-6xl font-bold p-2 bg-gradient-to-l from-blue-500 to-black bg-clip-text text-transparent">
                Nandana Surgi Care
              </p>

              {/* Hamburger Icon for Mobile */}
              <div className="lg:hidden p-7">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-black w-10  focus:outline-none"
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
                      className="w-10 h-10"
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
              <div className="hidden lg:flex p-0 md:p-2 md:mr-4 lg:mr-0 space-x-8 items-center relative">
                <a
                  href="/"
                  className="text-black text-3xl font-bold hover:text-blue-700 transition duration-300"
                >
                  Home
                </a>
                <a
                  href="/about-us"
                  className="text-black text-3xl font-bold hover:text-blue-700 transition duration-300"
                >
                  About Us
                </a>

                {/* Products Dropdown */}
                <div className="relative ">
                  <button
                    onClick={toggleProductsMenu}
                    className="text-black text-3xl font-bold hover:text-blue-700 transition duration-300"
                  >
                    Products
                  </button>
                  {isProductsOpen && (
<div className="relative w-full">
  <div className="absolute left-0 mt-4 w-96 bg-white shadow-lg rounded-md text-black font-bold z-10">

                      <a
                        href="/products"
                        className="block text-pink-700 px-6 py-2 text-2xl hover:bg-pink-200"
                      >
                        Equipments
                      </a>
                      <div>
                <button
                  onClick={toggleDisposablesMenu}
                  className="w-full text-pink-700 text-left px-6 py-2 text-2xl font-bold hover:bg-pink-200"
                >
                  Disposables
                </button>
                <AnimatePresence>
                  {isDisposablesOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                     <div className="grid grid-cols-2 gap-x-6 gap-y-2 px-6 py-4">
  {departments.map((dept) => (
    <a
      key={dept.name}
      href={dept.href}
      className="text-xl font-semibold hover:bg-gray-200 px-2 py-2 rounded border border-gray-400"
    >
      {dept.name} Products
    </a>
  ))}
</div>


                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
                    </div>
                     </div>
                  )}
                </div>
                

                <a
                  href="/contact"
                  className="text-black text-3xl font-bold hover:text-blue-700"
                >
                  Contact
                </a>
              </div>
               

              {/* Mobile Menu - Conditionally Rendered */}
            <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      key="main-menu"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      transition={{ duration: 0.3 }}
      className="absolute top-24 left-0 w-full bg-black text-white p-4 lg:hidden"
    >
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

      {/* Mobile Products Dropdown */}
      <div className="relative hover:cursor-pointer">
        <button
          onClick={toggleProductsMenu}
          className="block text-lg font-bold hover:text-pink-300"
        >
          Products
        </button>

        <AnimatePresence>
          {isProductsOpen && (
            <motion.div
              key="products-dropdown"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-lg rounded-md text-black my-3"
            >
              <a
                href="/products"
                className="block px-4 py-2 text-lg text-pink-700 font-semibold hover:bg-pink-200"
              >
                Equipments
              </a>
              <div>
                <button
                  onClick={toggleDisposablesMenu}
                  className="w-full text-left px-4 py-2 text-lg text-pink-700 font-semibold hover:bg-pink-200"
                >
                  Disposables
                </button>
                <AnimatePresence>
                  {isDisposablesOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      {departments.map((dept) => (
                        <a
                          key={dept.name}
                          href={dept.href}
                          className="block px-6 py-2 text-sm font-semibold hover:bg-gray-200"
                        >
                          {dept.name} Products
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <a
        href="/contact"
        className="block text-lg font-bold hover:text-pink-300"
      >
        Contact
      </a>
    </motion.div>
  )}
</AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;