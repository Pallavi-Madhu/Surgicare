import React from "react";

const Card = ({ image, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center w-full max-w-xs pb-8">
      <img
        src={image}
        className="object-contain w-full h-40 rounded-lg mb-4"
        alt={description}
      />
      <div className="p-4 text-center">
        <p className="text-gray-800 text-lg md:text-xl font-bold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;