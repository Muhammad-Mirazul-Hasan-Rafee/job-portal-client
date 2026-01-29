import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const applications = useLoaderData();
  return (
    <div>
      <h3 className="text-center">
        Application for this job : {applications.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>LinkedIn</th>
           
            </tr>
          </thead>
          <tbody>
           
            {applications.map((application , idx)=> <tr key={application._id}>
              <th>{idx + 1}</th>
              <td>{application.applicant_email}</td>
              <td>{application.linkedIn}</td>
              
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
