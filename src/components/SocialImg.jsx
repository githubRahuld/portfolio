import React from "react";

const SocialImg = ({ src, text }) => {
  return (
    <div className="group relative">
      <a href="#">
        <img
          className="w-full h-full object-cover rounded-full group-hover:opacity-30 transition duration-500 ease-in-out text-black"
          src={src}
          alt={text}
          style={{ height: "60px", width: "60px" }}
        />
      </a>
    </div>
  );
};

export default SocialImg;
