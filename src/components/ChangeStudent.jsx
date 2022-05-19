import React, { useEffect, useState } from "react";
import { useLottie } from "lottie-react";
import arrows from "./arrows.json";
import "./Assignment.css";
import {
  changeMentor,
  getMentorsInfo,
  getStudentsInfo,
} from "../actions/ServerRequests";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
const ChangeStudent = () => {
  const [students, setStudents] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [selectStudent, setSelectStudent] = useState([]);
  const [selectMentor, setSelectMentor] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  //Lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: arrows,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mod = {
    height: 100,
    width: 100,
  };
  const { View } = useLottie(defaultOptions, mod);

  useEffect(() => {
    async function fetchData() {
      const studentInfo = await getStudentsInfo();
      setStudents(studentInfo.filter((s) => s.mentorAssigned));
      const mentorInfo = await getMentorsInfo();
      setMentors(mentorInfo);
    }
    fetchData();
  }, []);

  const changeStudentMentor = async () => {
    try {
      setLoading(true);
      const res = await changeMentor(selectStudent, selectMentor);
      if (res) {
        toast.success("Mentor changed successfully");
        setLoading(false);
        history.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
  };

  console.log(selectStudent, selectMentor);
  return (
    <div className="Assignment">
      <div className="main-container">
        <div className="left">
          <label for="course" className="form-label">
            Mentor:
          </label>
          <select
            className="form-select"
            aria-label="Default select mentor"
            onChange={(e) => setSelectMentor(e.target.value)}
          >
            <option selected>Select Mentor</option>
            {mentors.map((m) => (
              <option value={m._id}>{m.name}</option>
            ))}
          </select>
        </div>
        <div className="center">{View}</div>
        <div className="right">
          <label for="course" className="form-label">
            Student:
          </label>
          <select
            className="form-select"
            aria-label="Default select student"
            onChange={(e) => setSelectStudent(e.target.value)}
          >
            <option selected>Select Student</option>
            {students.map((s) => (
              <option value={s._id}>{s.name}</option>
            ))}
          </select>
        </div>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <button
          className="btn btn-warning text-dark assign-button"
          onClick={changeStudentMentor}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default ChangeStudent;
