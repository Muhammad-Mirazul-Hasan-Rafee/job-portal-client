import { useEffect, useState } from "react";
import useAuth from "../hooks/UseAuth";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, [user.email]);

  return (
    <div>
      <h2>My posted jobs here</h2>
      <h3>Total posting: {jobs.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Total Application</th>
            </tr>
          </thead>
          <tbody>
            {
                jobs.map((job , idx)=> <tr key={idx}>
              <th>{idx + 1}</th>
              <td>{job.title}</td>
              <td>{job.applicationDeadline}</td>
              <td>{job.applicationCount}</td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
