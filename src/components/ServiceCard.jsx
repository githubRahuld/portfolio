import React from "react";

function ServiceCard({ userData, className }) {
  return (
    <>
      <div className="carousel-item relative rounded-xl overflow-hidden group m-4 ">
        <img
          src={userData?.image?.url}
          alt="image"
          style={{ height: "20rem", width: "20rem" }}
          className={`className rounded-2xl group-hover:blur-[10px] transition-all duration-300 ease-out`}
        />

        <div className="inset-0 absolute p-5 flex flex-col justify-center  opacity-0 scale-105 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out md:text-center">
          {userData.name && (
            <h3 className="text-2xl font-bold text-black font-jost text-start">
              {userData.name}
            </h3>
          )}
          {userData.desc && (
            <p className="text-base-200 text-thin font-poppins mt-2 text-justify">
              {userData.desc}
            </p>
          )}
          {userData.charge && (
            <p className="text-2xl text-black font-jost font-bold mt-2 text-end">
              {userData.charge}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
