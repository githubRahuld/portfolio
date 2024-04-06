import React from "react";

function TestimonialCard({ testimonial }) {
  const { image, name, review, position } = testimonial;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-black font-poppins">
      <div className="relative">
        <img src={image?.url} alt={name} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={image?.url}
            alt={name}
            className="w-20 h-20 rounded-full border-4 border-white"
          />
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 italic mb-4 text-justify">{review}</p>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-rose-700 mb-2 ">{position}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
