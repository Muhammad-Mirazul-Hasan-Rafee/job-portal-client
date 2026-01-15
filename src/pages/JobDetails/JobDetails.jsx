import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {_id , title , location , jobType , category , applicationDeadline , salaryRange , description , company , requirements , responsibilities ,status , hr_email , company_logo } = useLoaderData();

    // title , location , jobType , category , applicationDeadline , salaryRange , description , company , requirements , responsibilities ,status , hr_email , company_logo 
  return(
       <div className="max-w-6xl mx-auto px-4 my-10">
      <div className="card bg-base-100 shadow-md">

        {/* ================= Header ================= */}
        <div className="flex flex-col sm:flex-row gap-4 p-5 border-b">
          <img
            src={company_logo}
            alt={title}
            className="w-16 h-16 object-contain"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-lg">{company}</p>

            <div className="flex flex-wrap gap-3 text-sm mt-2">
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt /> {location}
              </span>
              <span className="badge badge-outline">{jobType}</span>
              <span className="badge badge-outline">{category}</span>
            </div>
          </div>

          <div className="self-start">
            <span
              className={`badge ${
                status === "active"
                  ? "badge-success"
                  : "badge-error"
              }`}
            >
              {status}
            </span>
          </div>
        </div>

        {/* ================= Body ================= */}
        <div className="card-body space-y-6">

          {/* Meta Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <p>
              <span className="font-semibold">Deadline:</span>{" "}
              {applicationDeadline}
            </p>
            <p>
              <span className="font-semibold">Salary:</span>{" "}
              {salaryRange.min} – {salaryRange.max}{" "}
              {salaryRange.currency}
            </p>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {category}
            </p>
            <p>
              <span className="font-semibold">Job Type:</span>{" "}
              {jobType}
            </p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Job Description
            </h3>
            <p className="text-white leading-relaxed">
              {description}
            </p>
          </div>

          {/* Requirements & Responsibilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Requirements</h4>
              <div className="flex flex-wrap gap-2">
                {requirements.map((item, index) => (
                  <span
                    key={index}
                    className="border rounded-md px-3 py-1 text-sm hover:bg-slate-900 hover:text-yellow-400 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Responsibilities
              </h4>
              <ul className="list-disc list-inside text-white space-y-1">
                {responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer / Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t pt-4">
            <p className="flex items-center gap-2 text-sm">
              <FaEnvelope /> {hr_email}
            </p>

            <Link to={`/apply/${_id}`}>
              <button className="btn btn-primary w-full sm:w-auto">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default JobDetails;