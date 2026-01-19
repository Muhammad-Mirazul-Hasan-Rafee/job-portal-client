const AddJob = () => {
return (
  <div className="min-h-screen bg-base-200 flex items-center justify-center py-10">
    <div className="card w-full max-w-4xl bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center mb-8">
          Post a New Job
        </h2>

        <form className="space-y-8">
          {/* Job Title & Location */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Job title"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Job location"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Job Type & Job Field */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Type</span>
              </label>
              <select className="select select-bordered w-full" defaultValue="">
                <option disabled value="">
                  Pick a job
                </option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Intern</option>
                <option>Hybrid</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Field</span>
              </label>
              <select className="select select-bordered w-full" defaultValue="">
                <option disabled value="">
                  Pick a job field
                </option>
                <option>Engineering</option>
                <option>Finance</option>
                <option>Teaching</option>
                <option>Doctor</option>
              </select>
            </div>
          </div>

          {/* HR Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">HR Name</span>
              </label>
              <input
                type="text"
                name="hrname"
                placeholder="HR name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">HR Email</span>
              </label>
              <input
                type="email"
                name="hremail"
                placeholder="HR email"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Company Logo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo</span>
            </label>
            <input
              type="email"
              name="companylogo"
              placeholder="Logo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Salary Range */}
          <div>
            <p className="font-semibold mb-3">Salary Range</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <input
                type="text"
                name="location"
                placeholder="Min"
                className="input input-bordered"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Max"
                className="input input-bordered"
                required
              />
              <select className="select select-bordered">
                <option disabled selected>
                  Currency
                </option>
                <option>BDT</option>
                <option>USDT</option>
                <option>EUR</option>
                <option>KWD</option>
              </select>
            </div>
          </div>

          {/* Job Description */}
          <div className="grid grid-cols-1 gap-4 items-start">
            <label className="label lg:col-span-1">
              <span className="label-text font-medium">
                Job Description
              </span>
            </label>

            <textarea
              className="textarea textarea-bordered min-h-[90px] lg:col-span-3 w-full"
              name="description"
              placeholder="Describe the job role, expectations, and scope"
              required
            ></textarea>
          </div>

          {/* Company Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Job Requirements */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
            <label className="label lg:col-span-1">
              <span className="label-text font-medium">
                Job Requirements
              </span>
            </label>

            <textarea
              className="textarea textarea-bordered lg:col-span-3"
              name="company"
              placeholder="Put each requirement on a new line"
              required
            ></textarea>
          </div>

          {/* Job Responsibility */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
            <label className="label lg:col-span-1">
              <span className="label-text font-medium">
                Job Responsibility
              </span>
            </label>

            <textarea
              className="textarea textarea-bordered lg:col-span-3"
              name="responsibility"
              placeholder="Job responsibility"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button className="btn btn-primary w-full">
              Submit Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);


};

export default AddJob;
