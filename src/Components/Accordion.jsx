import { useState } from "react";
import companies from "../Data/companyData"


const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {companies.map((company, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-4 sm:px-8 py-6 text-left bg-gradient-to-r from-slate-50 to-green-50 hover:from-slate-100 hover:to-blue-100 transition-all duration-200 flex justify-between items-center group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10  sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors">
                <span className="text-white font-bold text-lg">{company.name.charAt(0)}</span>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold text-slate-800">{company.name}</span>
                <p className="text-sm sm:text-lg text-gray-600 mt-1">{company.specialty}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-lg text-gray-600 hidden sm:block">Est. {company.established}</span>
              <span className={`transform transition-transform duration-200 text-green-600 text-xl ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </div>
          </button>
          {openIndex === index && (
            <div className="px-8 py-6 bg-white border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">{company.description}</p>
              
              {/* Key Products Section */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3 text-lg">Key Products & Solutions:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {company.products.map((product, productIndex) => (
                    <div
                      key={productIndex}
                      className="flex items-center space-x-3 p-2 bg-green-700 rounded-lg hover:bg-green-800 transition-colors"
                    >
                      <div className="w-2 h-2 bg-green-100 rounded-full"></div>
                      <span className="text-white  text-lg font-medium">{product}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Items Section */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-3 text-lg">Detailed Product Portfolio:</h4>
                <div className="space-y-3">
                  {company.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start space-x-3 p-3  rounded-lg hover:bg-green-50 transition-colors border-l-4 border-green-700"
                    >
                      <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 font-medium leading-relaxed text-xl">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;