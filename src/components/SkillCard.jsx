import React from "react";
import AnimatedSection from "./AnimatedSection";
import { useInView } from "react-intersection-observer";

function SkillCard({ image, name, percentage }) {
  const [refSkills, inViewSkills] = useInView();

  return (
    <AnimatedSection refProp={refSkills} inView={inViewSkills}>
      <div className="shadow-md rounded-3xl overflow-hidden p-5 border-2 border-transparent hover:border-black hover:border-opacity-80 hover:border-solid hover:border-2 hover:cursor-pointer transition-all duration-300 ease-out">
        <div className="flex justify-between items-center">
          <img src={image} alt={name} className="h-10 w-10" />
          <h1 className="text-black font-jost text-xl font-bold mb-2">
            {percentage} <span className="text-violet-600">%</span>
          </h1>
        </div>
        <div className="p-4">
          <h1 className="text-black font-jost text-xl sm:text-lg font-bold mb-2">
            {name}
          </h1>
          <p className="text-gray-600 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <input
          type="range"
          min={0}
          max="100"
          value={percentage}
          className="range range-primary h-3"
          readOnly
        />
      </div>
    </AnimatedSection>
  );
}

export default SkillCard;
