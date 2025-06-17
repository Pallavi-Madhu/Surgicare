import React ,{useState,useEffext} from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import TwoMaps from "../Components/MapComponent";
import contact from "../assets/k.png";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { Mail, MapPin, Clock, Phone, MessageCircle, Building, Send } from "lucide-react";


const Contact = () => {
   const [activeTab, setActiveTab] = useState('form');
   const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ];

  return (
   
      <div>
        <Navbar />
        <div className="pt-24 pb-16 bg-gradient-to-r from-green-900 via-green-600 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto pt-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50 leading-relaxed">
              We're here to help with your medical equipment needs. 
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919207755944" className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-900 hover:text-white transition-colors inline-flex items-center gap-2">
                <Phone size={16} /> Call Now
              </a>
              <a href="https://wa.me/919207755944" className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-900 transition-colors inline-flex items-center gap-2">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-30 h-1 bg-gradient-to-r my-2 from-green-500 to-green-900 mx-auto rounded-full"></div>

    <div className="max-w-5xl mx-auto m-8">
          <div className="flex mx-4 gap-3 mt-4 md:mt-8 flex-col sm:flex-row  justify-center bg-white rounded-xl  shadow-2xl p-3">
           <button
                onClick={() => setActiveTab('form')}
                className={`px-6 py-3 mx-2 rounded-lg font-semibold transition-all ${
                  activeTab === 'form' 
                    ? 'bg-white text-green-800 shadow-xl border border-green-500' 
                    : 'text-white bg-green-500 lg:hover:bg-gray-500'
                }`}
              >
                Contact Form
              </button>
              <button
                onClick={() => setActiveTab('offices')}
                className={`px-6 py-3 mx-2 rounded-lg font-semibold transition-all ${
                  activeTab === 'offices' 
                    ? 'bg-white text-green-800 shadow-xl border border-green-500' 
                    : 'text-white bg-green-500 lg:hover:bg-gray-500'
                }`}
              >
                Our Offices
              </button>
              <button
                onClick={() => setActiveTab('hours')}
                className={`px-6 py-3 mx-2 rounded-lg font-semibold transition-all ${
                  activeTab === 'hours' 
                    ? 'bg-white text-green-800 shadow-xl border border-green-500' 
                    : 'text-white bg-green-500 lg:hover:bg-gray-500'
                }`}
              >
                Office Hours
              </button>
            </div>
     </div>

            {activeTab === 'hours' && (
              <div className="max-w-2xl mx-auto p-4 sm:p-8 mb-10 ">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="bg-gray-700 text-white p-6 text-center">
                    <Clock className="text-3xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Office Hours</h3>
                    <p className="text-purple-100">We're here when you need us</p>
                  </div>
                  <div className="p-8">
                    <div className="space-y-4">
                      {officeHours.map((hour, index) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                          <span className="text-sm sm:text-xl text-gray-800">{hour.day}</span>
                          <span className=" text-sm sm:text-xl text-gray-600">{hour.time}</span>
                        </div>
                      ))}
                    </div>
                   
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'form' && (
              <div className=" p-10">

          <motion.div
            className="flex flex-col items-center justify-center w-full px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-center mt-10 text-black">
              Got Questions? <span className="text-green-700">Reach Out!</span>
            </h2>
            <motion.p
              className="text-black text-center w-full sm:w-2/3 lg:w-1/2 mt-8 "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              Our team is here to assist with any inquiries or provide the
              information you need. Whether it's about our services, solutions,
              or support, we’re committed to delivering prompt and professional
              responses. Reach out today—we’re ready to help.
            </motion.p>
          </motion.div>
                
                <div className="mt-20">  <ContactForm /></div>
              
              </div>
            )}
            {activeTab === 'offices' && (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-20 md:mx-20 mx-4">
                  {/* Ernakulam Office */}
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-gray-600 text-white p-8">
                      <h3 className="text-2xl font-bold">Ernakulam Office</h3>
                      <p className="text-gray-100">Main Administrative Office</p>
                    </div>
                    <div className="p-8  space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-indigo-700 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Address</p>
                          <p className="text-gray-700">
                            17/85/A1, "Vyshnavam",<br />
                            Near Palakkal Bhagavathi Temple,<br />
                            Container Terminal Road,<br />
                            Cheranalloor, Cochin -682034
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="text-indigo-700 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <a href="mailto:office@nandanasurgicare.com" className="text-gray-700 text-xl  hover:underline">
                            office@nandanasurgicare.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="text-indigo-700 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Phone</p>
                          <a href="tel:+919207755944" className="text-gray-700  hover:underline">
                            +91 9207755944
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Kozhikode Office */}
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-gray-600 text-white p-8">
                      <h3 className="text-2xl font-bold">Kozhikode Office</h3>
                      <p className="text-gray-100">Regional Branch Office</p>
                    </div>
                    <div className="p-8 space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-indigo-700  mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Address</p>
                          <p className="text-gray-700">
                            Vyapara Bhavan,<br />
                            Eranhipalam,<br />
                            Kozhikode, Kerala-673021
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="text-indigo-700 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <a href="mailto:office@nandanasurgicare.com" className="text-gray-700 text-xl hover:underline">
                            office@nandanasurgicare.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="text-indigo-700  flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Phone</p>
                          <a href="tel:+919207755922" className="text-gray-700  hover:underline">
                            +91 9207755922
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white sm:block hidden rounded-2xl p-6">

                  <h3 className="text-4xl font-bold text-gray-800 mb-6 text-center">Find Us on Map</h3>

                  <div className=" flex justify-center "><TwoMaps /></div>
                </div>
              </div>
            )}
            <Footer/>
          </div>
  );
};

export default Contact;
