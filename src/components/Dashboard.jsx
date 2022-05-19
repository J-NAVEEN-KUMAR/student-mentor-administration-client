import React from "react";
import "./Dashboard.css";
import StudentDetails from "./StudentDetails";
import MentorDetails from "./MentorDetails";
import UnassignedStudents from "./UnassignedStudents";

const Dashboard = () => {
  return (
    <>
      <div className="container-sm assign-container">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active assign-button"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Students Details
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link assign-button"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Mentors Details
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link assign-button"
              id="pills-unassigned-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-unassigned"
              type="button"
              role="tab"
              aria-controls="pills-unassigned"
              aria-selected="false"
            >
              Unassigned Students
            </button>
          </li>
        </ul>
        <div className="tab-content tab-container" id="pills-tabContent">
          <div
            className="tab-pane fade show active tab-container"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabIndex="0"
          >
            <StudentDetails />
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabIndex="0"
          >
            <MentorDetails />
          </div>
          <div
            className="tab-pane fade"
            id="pills-unassigned"
            role="tabpanel"
            aria-labelledby="pills-unassigned-tab"
            tabIndex="0"
          >
            <UnassignedStudents />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
