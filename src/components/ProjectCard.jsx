import React from "react";

function ProjectCard({ project }) {
  const {
    title,
    image,
    description,
    techStack = [],
    liveurl,
    githuburl,
  } = project;
  console.log("project are: ", project);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden bg-[url('/img/texture3.jpg')]">
      <div className="relative group">
        <img
          src={image?.url}
          alt={title}
          className="w-full h-48 object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 font-poppins text-black">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-just font-poppins text-just">
          {description}
        </p>
        <div className="flex space-x-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white text-slate-700 text-bold rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <a
            href={liveurl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Live Demo
          </a>
          <a
            href={githuburl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
