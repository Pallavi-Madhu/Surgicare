import React from "react";
import './index.css'; // Ensure this is your Tailwind CSS file

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Tailwind CSS</h1>
        <p className="text-gray-600 mb-6">
          This is a test to ensure Tailwind is functioning correctly. The absence of PostCSS should not affect this output.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
