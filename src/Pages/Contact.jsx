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
        <div className="pt-24 pb-16 bg-gradient-to-r from-green-500 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto pt-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              We're here to help with your medical equipment needs. 
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919207755944" className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                <Phone size={16} /> Call Now
              </a>
              <a href="https://wa.me/919207755944" className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors inline-flex items-center gap-2">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
       <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-wrap justify-center bg-white rounded-xl shadow-lg p-2">
              <button
                onClick={() => setActiveTab('form')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'form' 
                    ? 'bg-green-400 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Contact Form
              </button>
              <button
                onClick={() => setActiveTab('offices')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'offices' 
                    ? 'bg-green-400 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Our Offices
              </button>
              <button
                onClick={() => setActiveTab('hours')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'hours' 
                    ? 'bg-green-400 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Office Hours
              </button>
            </div>
          </div>

            {activeTab === 'hours' && (
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gray-700 text-white p-6 text-center">
                    <Clock className="text-4xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Office Hours</h3>
                    <p className="text-purple-100">We're here when you need us</p>
                  </div>
                  <div className="p-8">
                    <div className="space-y-4">
                      {officeHours.map((hour, index) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                          <span className="font-medium text-gray-800">{hour.day}</span>
                          <span className="text-gray-600">{hour.time}</span>
                        </div>
                      ))}
                    </div>
                   
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'form' && (
              <div className="p-10">
                
                  <ContactForm />
              
              </div>
            )}
            {activeTab === 'offices' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {/* Ernakulam Office */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-gray-500 text-white p-6">
                      <h3 className="text-2xl font-bold">Ernakulam Office</h3>
                      <p className="text-blue-100">Main Administrative Office</p>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Address</p>
                          <p className="text-gray-600">
                            17/85/A1, "Vyshnavam",<br />
                            Near Palakkal Bhagavathi Temple,<br />
                            Container Terminal Road,<br />
                            Cheranalloor, Cochin -682034
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="text-blue-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Email</p>
                          <a href="mailto:office@nandanasurgicare.com" className="text-gray-600 hover:underline">
                            office@nandanasurgicare.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="text-blue-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Phone</p>
                          <a href="tel:+919207755944" className="text-gray-600 hover:underline">
                            +91 9207755944
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Kozhikode Office */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-gray-500 text-white p-6">
                      <h3 className="text-2xl font-bold">Kozhikode Office</h3>
                      <p className="text-green-100">Regional Branch Office</p>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Address</p>
                          <p className="text-gray-600">
                            Vyapara Bhavan,<br />
                            Eranhipalam,<br />
                            Kozhikode, Kerala-673021
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="text-green-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Email</p>
                          <a href="mailto:office@nandanasurgicare.com" className="text-gray-600 hover:underline">
                            office@nandanasurgicare.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="text-gray-600  flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Phone</p>
                          <a href="tel:+919207755922" className="text-gray-600  hover:underline">
                            +91 9207755922
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Us on Map</h3>
                  <TwoMaps />
                </div>
              </div>
            )}
          </div>
  );
};

export default Contact;
