import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/Surgicare logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isDisposablesOpen, setIsDisposablesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef(null);

const departments = [
  { name: "Anesthesiology and Critical Care", href: "/anesthesiology&CriticalCare" },
  { name: "Cardiac Surgery and Perfusion", href: "/cardiac-surgery" },
  { name: "Cardiology", href: "/cardiology" },
  { name: "General Surgery", href: "/general-surgery" },
  { name: "Nephrology", href: "/nephrology" },
  { name: "Neurosurgery", href: "/neurosurgery" },
  { name: "Ophthalmology", href: "/ophthalmology" },
  { name: "Orthopedic", href: "/orthopedic" },
  { name: "Plastic Surgery", href: "/plastic-surgery" },
  { name: "Pulmonology", href: "/pulmonology" },
];

  useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return () => {
    document.body.style.overflow = '';
  };
}, [isMenuOpen]);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100 && !isProductsOpen && !isDisposablesOpen) {
        setIsVisible(false);
        setIsMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isProductsOpen, isDisposablesOpen]);

 useEffect(() => {
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      if (isMenuOpen) setIsMenuOpen(false); 
      setIsProductsOpen(false);
      setIsDisposablesOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [isMenuOpen]);


  const toggleProductsMenu = () => setIsProductsOpen(!isProductsOpen);
  const toggleDisposablesMenu = () => setIsDisposablesOpen(!isDisposablesOpen);

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
    <motion.nav 
      ref={navbarRef}
      className="fixed bg-gradient-to-b from-white to-transparent top-0 w-full z-30"
      initial={false}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.3, 
        ease: "easeInOut" 
      }}
    >
      {!isScrolled && (
        <div className="absolute inset-0 z-[-2] bg-white sm:bg-transparent transition-opacity duration-300" />
      )}

      <motion.div
        initial={false}
        animate={{
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255,255,255,0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`absolute inset-0 z-[-1] transition-all duration-500 ${
          isScrolled ? 'shadow-xl border-b border-gray-200/50' : ''
        }`}
      />

      <div className=" md:max-w-2xl  px-4 sm:px-6  lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className=" transition-colors duration-200 relative group  rounded-xl flex items-center justify-center">
              <img src={logo} alt="SurgiCare Logo" className="mb-2 sm:mb-0 w-14 h-10 sm:w-20 sm:h-12" />
            </div>
            <div>
              <h1 className="text-gray-800 hover:text-blue-900 font-sans font-semibold text-2xl sm:text-4xl transition-colors duration-200 relative group">
                Nandana Surgi Care
              </h1>
            </div>
          </div>
          
          {/* Hamburger Icon */}
        <div className="fixed top-4 lg:top-6 right-4 lg:right-10 z-50">
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="text-gray-700 hover:text-green-800 focus:outline-none transition-colors duration-200"
     style={{ WebkitTapHighlightColor: 'transparent' }}
  >
    {isMenuOpen ? (
      <svg className="w-10 h-10 rounded rounded-xl bg-white p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
</div>

        </div>

        {/* Mobile Menu */}
<AnimatePresence>
  {isMenuOpen && (
    <div className="absolute inset-0  z-40 ">
      <motion.div 
        className="max-h-screen rounded rounded-b-2xl  overflow-y-auto bg-white shadow-2xl px-4 pt-4 "
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
             <div className="flex items-center space-x-3">
            <div className=" transition-colors duration-200 relative group  rounded-xl flex items-center justify-center">
              <img src={logo} alt="SurgiCare Logo" className="mb-2 sm:mb-0 w-14 h-10 sm:w-20 sm:h-12" />
            </div>
            <div>
              <h1 className="text-gray-800 hover:text-blue-900 font-sans font-semibold text-2xl sm:text-4xl transition-colors duration-200 relative group">
                Nandana Surgi Care
              </h1>
            </div>
          </div>

              <div className="px-2  space-y-2 mb-4">
                <a
                  href="/"
                  className="block text-gray-700 rounded rounded-xl hover:text-green-700 font-bold text-lg p-3 transition duration-200 hover:shadow-lg"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Home
                </a>
                <a
                  href="/about-us"
                  className="block text-gray-700 rounded rounded-xl hover:text-green-700 font-bold text-lg p-3 transition duration-200 hover:shadow-lg"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  About Us
                </a>

                {/* Products Dropdown */}
                <div>
                  <button
                    onClick={toggleProductsMenu}
                   className="w-full text-left text-gray-700 rounded-xl font-semibold text-lg p-3 transition-colors duration-200 flex items-center justify-between hover:text-green-600 hover:shadow-lg focus:outline-none focus:text-gray-700 active:text-gray-700"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                 >
                    <span>Products</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div 
                        className="ml-4 mt-1 space-y-2 "
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                      >
                        <a
                          href="/products"
                          className="block rounded rounded-xl text-lg bg-green-50 text-green-600 font-sans p-2  hover:bg-green-100 hover:text-green-800 hover:shadow-lg transition-colors duration-200"
                          style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                          Equipments
                        </a>
                        <div>
                          <button
                            onClick={toggleDisposablesMenu}
                            className="w-full text-lg  text-left text-green-600 font-sans bg-green-50 rounded rounded-xl p-2 hover:text-green-800 hover:shadow-lg hover:bg-green-100 transition-colors duration-200 flex items-center justify-between"
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                          >
                            <span>Disposables</span>
                            <svg className={`w-4 h-4 transition-transform duration-200 ${isDisposablesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          <AnimatePresence>
                            {isDisposablesOpen && (
                              <motion.div 
                                className="ml-4 mt-2 grid grid-cols-1 gap-2"
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.2 }}
                              >
                                {departments.map((dept) => (
                                  <a
                                    key={dept.name}
                                    href={dept.href}
                                    className="text-gray-600 pl-4 rounded hover:text-green-900 hover:bg-green-100 font-sans text-lg transition-colors duration-200 flex items-center space-x-2"
                                  >
                                    <span className="text-3xl text-green-700">•</span>
                                    <span>{dept.name } Products</span>
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
                  className="block text-gray-700 hover:text-green-700 font-bold text-lg p-3 transition duration-200 rounded rounded-xl hover:shadow-lg"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Contact
                </a>
              </div>
            </motion.div>
    </div>
  )}
</AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;