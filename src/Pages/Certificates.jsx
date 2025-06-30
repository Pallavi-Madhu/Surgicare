
import React, { useState } from 'react';
import { Eye, Download, X, FileText } from 'lucide-react';
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


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar/>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
            <FileText size={32} className="text-white" />
          </div> */}
          <h1 className="text-4xl font-bold text-green-900 mb-4 pt-10">
            Our Certifications
          </h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Professional certifications and registrations demonstrating our commitment to quality and compliance.
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100"
            >
              
              <div className="relative bg-gradient-to-br from-green-50 to-white h-64 flex items-center justify-center border-b-2 border-green-200">
                
                  <img 
                    src={cert.thumbnail} 
                    alt={cert.title}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-green-900 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleDownloadCertificate(cert)}
                      className="bg-white bg-opacity-95 p-3 rounded-full shadow-lg hover:bg-green-50 transition-all duration-200 hover:scale-110"
                    >
                      <Download size={20} className="text-green-700" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6 bg-gradient-to-b from-white to-green-50">
                <h3 className="text-lg font-semibold text-green-900 mb-4 text-center">
                  {cert.title}
                </h3>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleDownloadCertificate(cert)}
                    className="flex-1 flex items-center justify-center px-4 py-3 border-2 border-green-600 text-green-700 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-200 transform hover:scale-105"
                  >
                    <Download size={16} className="mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl max-h-full overflow-hidden">          
            <div className="p-4 border-t border-green-200 bg-green-50 flex justify-end space-x-3">
              <button
                onClick={() => handleDownloadCertificate(selectedCertificate)}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Download size={16} className="mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Certificates;