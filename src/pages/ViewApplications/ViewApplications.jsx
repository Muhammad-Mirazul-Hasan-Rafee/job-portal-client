import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();
  const handleStatusUpdate = (e  , id)=>{
    const data = {
      status: e.target.value,}
      fetch(`http://localhost:3000/job-applications/${id}`, {
        method: 'PATCH',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(data => {
       if(data.modifiedCount){
          Swal.fire({
                    title: "Status updated!",
                    icon: "success",
                    draggable: true,
                  });
       }
        console.log(data);
      })
   };
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
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, idx) => (
              <tr key={application._id}>
                <th>{idx + 1}</th>
                <td>{application.applicant_email}</td>
                <td>{}</td>
                <td>
                  <select onChange={(e)=>handleStatusUpdate(e , application._id)} defaultValue={application.status || 'Change Status'} className="select select-sm">
                    <option disabled>Change Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
