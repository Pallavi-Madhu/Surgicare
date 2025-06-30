
import React, { useState } from 'react';
import {Award, Eye, Download, X, FileText } from 'lucide-react';
import cert1 from "../../src/assets/Certificates/GST CERTIFICATE.pdf";
import cert2 from "../../src/assets/Certificates/Udyam Registration Certificate.Nandana.pdf";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
import image1 from "../../src/assets/Certificates/image.png"
import image2 from "../../src/assets/Certificates/image copy.png"

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  
  const certificates = [
    {
      id: 1,
      title: "GST Registration Certificate",
      file: cert1,
      thumbnail: image1
    },
    {
      id: 2,
      title: "Udyam Registration Certificate", 
      file: cert2,
      thumbnail: image2 
    }
  ];



    const handleDownloadCertificate = (certificate) => {
    const link = document.createElement('a');
    link.href = certificate.file;
    link.download = `${certificate.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
const openCertificate = (certificate) => {
  if (certificate?.file) {
    window.open(certificate.file, '_blank', 'noopener,noreferrer');
  } else {
    console.error("Certificate file not found.");
  }
};




  return (<>
    <Navbar/>
<div className="min-h-screen bg-gradient-to-b from-green-50 via-transparent to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <div className="relative py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                 
              </div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Our <span className="text-green-600">Certifications</span>
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
                We're a fully registered company, ensuring our operations meet the required standards of professionalism and accountability.
              </p>
            </div>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
          </div>
        </div>
        
        {/** CERTIFICATES*/}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-20">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Certificate Preview */}
                <div className="relative  overflow-hidden ">
                  <img
                   onClick={() => openCertificate(certificate)}
                    src={certificate.thumbnail}
                    alt={certificate.title}
                    className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                 
                </div>


                {/* Certificate Details */}
                <div className="p-6">
                  <div className="lg:text-2xl text-xl flex flex-row items-center justify-center text-center py-0 lg:py-4 font-bold text-gray-900 mb-3">
                     <Award className="hidden sm:block w-8 h-8 text-green-600 " />{certificate.title}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="mt-6  flex justify-center sm:items-end items-center flex-col sm:flex-row space-y-3 space-x-3">
                    <button
                      onClick={() => openCertificate(certificate)}
                      className="bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>View Certificate  </span>
                    </button>
                    <button
                      onClick={() => handleDownloadCertificate(certificate)}
                      className="border-gray-400 border  text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Certificates;