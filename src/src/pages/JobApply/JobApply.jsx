import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };
    fetch("http://localhost:3000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
       if(data.insertedId){
         Swal.fire({
          title: "Applied successfully!",
          icon: "success",
          draggable: true,
        }); 
        navigate('/myApplications');
       }
        console.log(data);
      });
  };
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-base-200 to-base-300 px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-full max-w-6xl">
        {/* ===== Right / Top Content ===== */}
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Get your <span className="text-primary">dream job</span> today
          </h1>
          <p className="py-4 text-gray-600">
            Submit your professional profiles and take the next step in your
            career journey.
          </p>
        </div>

        {/* ===== Form Card ===== */}
        <div className="card w-full max-w-md bg-base-100 shadow-xl border border-amber-200">
          <form onSubmit={submitJobApplication} className="card-body space-y-4">
            <h2 className="text-xl font-semibold text-center">
              Job Application
            </h2>

            <fieldset className="space-y-3">
              <div>
                <label className="label">
                  <span className="label-text">LinkedIn URL</span>
                </label>
                <input
                  type="url"
                  name="linkedin"
                  className="input input-bordered w-full"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">GitHub URL</span>
                </label>
                <input
                  type="url"
                  name="github"
                  className="input input-bordered w-full"
                  placeholder="https://github.com/username"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Resume URL</span>
                </label>
                <input
                  type="url"
                  name="resume"
                  className="input input-bordered w-full"
                  placeholder="Drive / Dropbox / Resume link"
                />
              </div>
            </fieldset>

            <button className="btn btn-primary w-full mt-4">Apply Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
