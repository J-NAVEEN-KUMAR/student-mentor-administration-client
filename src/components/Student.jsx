import React, { useState } from "react";
import { createStudent } from "../actions/ServerRequests";
import "./Student.css";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Student = () => {
  const [student, setStudent] = useState({
    email: "",
    name: "",
    phone: "",
    course: "",
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let res = await createStudent(student);
      if (res) {
        setStudent({
          email: "",
          name: "",
          phone: "",
          course: "",
        });
        setLoading(false);
        history.push("/");
        toast.success("Student added successfully");
      }
    } catch (error) {
      toast.error(error.response.data);
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <div className="container-sm student">
        <h1>Add Student Details</h1>
        <form className="student-form" onSubmit={handleSubmit}>
          <div className=" student-div">
            <label
              for="exampleInputEmail1"
              className="form-label student-label"
            >
              Email address:
            </label>
            <input
              type="email"
              className="form-control student-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setStudent({ ...student, email: e.target.value });
              }}
            />
          </div>
          <div className=" student-div">
            <label for="Name" className="form-label student-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control student-input"
              id="Name"
              aria-describedby="Name"
              onChange={(e) => {
                setStudent({ ...student, name: e.target.value });
              }}
            />
          </div>
          <div className=" student-div">
            <label for="phone" className="form-label student-label">
              Mobile No:
            </label>
            <input
              type="number"
              className="form-control student-input"
              id="phone"
              aria-describedby="phone"
              onChange={(e) => {
                setStudent({ ...student, phone: e.target.value });
              }}
            />
          </div>
          <div className="student-div">
            <label for="course" className="form-label student-label">
              Course:
            </label>
            <select
              className="form-select student-select"
              aria-label="Default select course"
              onChange={(e) => {
                setStudent({ ...student, course: e.target.value });
              }}
            >
              <option selected>Select course</option>
              <option value="Web development">Web development</option>
              <option value="Android development">Android development</option>
              <option value="Data Science">Data Science</option>
              <option value="Ios development">Ios development</option>
            </select>
          </div>
          {loading ? (
            <div className="d-flex justify-content-center mt-2 text-primary">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Student;
