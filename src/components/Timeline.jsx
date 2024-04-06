import React, { useState } from "react";

function Timeline({ job }) {
  const {
    company_name,
    summary,
    startDate,
    endDate,
    jobTitle,
    jobLocation,
    forEducation,
    bulletPoints = [],
  } = job;

  const formattedStartDate = new Date(startDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
  const formattedEndDate = new Date(endDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {forEducation ? (
        <div className="timeline-start md:text-end mb-10 text-black font-poppins">
          <time className="font-mono italic">
            {formattedStartDate}-{formattedEndDate}
          </time>
          <div className="text-lg font-black">{jobTitle}</div>
          <div className="font-semibold">{company_name}</div>
          <div className="text-rose-600 font-caveat font-bold text-xl">
            {jobLocation}
          </div>
          <div className="mt-2 text-slate-400">{summary}</div>
          {showDetails && (
            <div className="text-justify bg-cyan-200 rounded-lg p-4">
              {bulletPoints.map((point, index) => (
                <p key={index}>{point}</p>
              ))}
            </div>
          )}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-white bg-rose-700 mt-2"
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
        </div>
      ) : (
        <div className="timeline-end md:text-start mb-10 text-black font-poppins">
          <div className="text-lg font-black">{jobTitle}</div>
          <div className="font-semibold">{company_name}</div>
          <div className="text-rose-600 font-caveat font-bold text-xl">
            {jobLocation}
          </div>
          <time className="font-mono italic">
            {formattedStartDate}-{formattedEndDate}
          </time>
          <div className="mt-2 text-slate-400">{summary}</div>
          {showDetails && (
            <div className="text-justify bg-cyan-200 rounded-lg p-4">
              {bulletPoints.map((point, index) => (
                <p key={index}>{point}</p>
              ))}
            </div>
          )}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-white bg-rose-700 mt-2"
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
        </div>
      )}
      <hr />
    </li>
  );
}

export default Timeline;
