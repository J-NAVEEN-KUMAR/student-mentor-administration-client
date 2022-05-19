import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { createMentor } from "../actions/ServerRequests";
import "./Mentor.css";

const Mentor = () => {
  const [mentor, setMentor] = useState({
    email: "",
    name: "",
    phone: "",
    technology: "",
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let res = await createMentor(mentor);
      console.log(res.data);
      if (res) {
        setMentor({
          email: "",
          name: "",
          phone: "",
          technology: "",
        });
        setLoading(false);
        history.push("/");
        toast.success("Mentor added successfully");
      }
    } catch (error) {
      toast.error(error.response.data);
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <div className="container-sm mentor">
        <h1>Add Mentor Details</h1>
        <form className="mentor-form" onSubmit={handleSubmit}>
          <div className=" mentor-div">
            <label for="exampleInputEmail1" className="form-label mentor-label">
              Email address:
            </label>
            <input
              type="email"
              className="form-control mentor-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setMentor({ ...mentor, email: e.target.value });
              }}
            />
          </div>
          <div className=" mentor-div">
            <label for="Name" className="form-label mentor-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control mentor-input"
              id="Name"
              aria-describedby="Name"
              onChange={(e) => {
                setMentor({ ...mentor, name: e.target.value });
              }}
            />
          </div>
          <div className=" mentor-div">
            <label for="phone" className="form-label mentor-label">
              Mobile No:
            </label>
            <input
              type="number"
              className="form-control mentor-input"
              id="phone"
              aria-describedby="phone"
              onChange={(e) => {
                setMentor({ ...mentor, phone: e.target.value });
              }}
            />
          </div>
          <div className="mentor-div">
            <label for="course" className="form-label mentor-label">
              Technology:
            </label>
            <select
              className="form-select mentor-select"
              aria-label="Default select course"
              onChange={(e) => {
                setMentor({ ...mentor, technology: e.target.value });
              }}
            >
              <option selected>Select Technology</option>
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

export default Mentor;
