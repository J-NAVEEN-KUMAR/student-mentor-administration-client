import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteMentor, getMentorsInfo } from "../actions/ServerRequests";

const MentorDetails = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getMentorsInfo();
        setMentors(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    const res = await deleteMentor(id);
    if (res) {
      toast.success("Mentor deleted successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    try {
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
  };
  return (
    <div className="container-sm">
      {loading ? (
        <>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col" className="table-success">
                #
              </th>
              <th scope="col" className="table-success">
                Name
              </th>
              <th scope="col" className="table-success">
                Email
              </th>
              <th scope="col" className="table-success">
                Phone
              </th>
              <th scope="col" className="table-success">
                Technology
              </th>
              <th scope="col" className="table-success">
                Students
              </th>
              <th scope="col" className="table-success">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {mentors.map((mentor, index) => (
              <tr key={mentor._id}>
                <th scope="row">{index + 1}</th>
                <td>{mentor.name}</td>
                <td>{mentor.email}</td>
                <td>{mentor.phone}</td>
                <td>{mentor.technology}</td>
                <td>
                  {mentor.studentsAssigned.map((s, index) =>
                    index >= 0 ? <td>{s},</td> : <td>{s}</td>
                  )}
                </td>
                <td>
                  <div className="icons">
                    <i
                      className="bi bi-person-x text-danger"
                      onClick={() => handleDelete(mentor._id)}
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MentorDetails;
