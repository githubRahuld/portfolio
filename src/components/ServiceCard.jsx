import React from "react";

function ServiceCard({ src }) {
  return (
    <>
      <div className="w-full  rounded-lg shadow-md overflow-hidden text-black">
        <img
          src={src}
          alt="image"
          className="w-full h-full object-cover rounded-lg"
          style={{ height: "25rem", width: "25rem" }}
        />
      </div>
    </>
  );
}

export default ServiceCard;
