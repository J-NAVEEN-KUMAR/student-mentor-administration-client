import axios from "axios";

export const getStudentsInfo = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API}/get-students-info`);
  // console.log(res);
  return res.data;
};

export const getMentorsInfo = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API}/get-mentors-info`);
  // console.log(res);
  return res.data;
};

export const getUnassignedStudents = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API}/get-unassigned-students`
  );
  // console.log(res);
  return res.data;
};

export const createMentor = async (mentorData) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API}/create-mentor`,
    mentorData
  );
  // console.log(res);
  return res;
};

export const createStudent = async (studentData) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API}/create-student`,
    studentData
  );
  // console.log(res);
  return res;
};

export const assignStudentToMentor = async (mentorId, studentsAssigned) => {
  // console.log(mentorId, studentsAssigned);
  const res = await axios.put(
    `${process.env.REACT_APP_API}/assign-student-to-mentor/${mentorId}`,
    { studentsAssigned }
  );
  return res.data;
};

export const changeMentor = async (studentId, mentorAssigned) => {
  const res = await axios.put(
    `${process.env.REACT_APP_API}/change-mentor/${studentId}`,
    { mentorAssigned }
  );
  return res.data;
};

export const deleteStudent = async (studentId) => {
  const res = await axios.delete(
    `${process.env.REACT_APP_API}/delete-student/${studentId}`
  );
  return res;
};

export const deleteMentor = async (mentorId) => {
  const res = await axios.delete(
    `${process.env.REACT_APP_API}/delete-mentor/${mentorId}`
  );
  return res;
};
