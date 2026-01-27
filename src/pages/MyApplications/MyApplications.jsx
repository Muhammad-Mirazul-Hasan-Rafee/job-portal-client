import { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]); // ui te dekhanor jnno state e rakha hyeche
  useEffect(() => {
    fetch(`http://localhost:3000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);

  // handle delete
  const deleteApplication = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/jobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingApplication = jobs.filter(
                (job) => job._id !== _id
              );

              setJobs(remainingApplication);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your application has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <h2>My applications: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job) => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={job.company_logo} alt={job.title} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.company}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {job.title}
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button
                    onClick={() => deleteApplication(job._id)}
                    className="btn btn-ghost btn-xs text-red-700 text-2xl bg-white"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
