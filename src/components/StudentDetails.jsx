import React, { useEffect, useState } from "react";
import { deleteStudent, getStudentsInfo } from "../actions/ServerRequests";
import { toast } from "react-toastify";

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getStudentsInfo();
        setStudents(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    console.log(id);
    const res = await deleteStudent(id);
    if (res) {
      toast.success("Student deleted successfully");
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
                Course
              </th>
              <th scope="col" className="table-success">
                Mentor
              </th>
              <th scope="col" className="table-success">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student._id}>
                <th scope="row">{index + 1}</th>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.course}</td>
                <td>{student.mentorAssigned}</td>
                <td>
                  <div className="icons">
                    <i
                      className="bi bi-person-x text-danger"
                      onClick={() => handleDelete(student._id)}
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

export default StudentDetails;
